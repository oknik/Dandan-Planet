import os
import sys
import numpy as np

from extract_features.parser import extract_features_parse_args

sys.path.append('../')  # 将父目录添加到搜索路径中

import torch
import torch.nn as nn
from torch.optim import lr_scheduler
import torch.backends.cudnn as cudnn
from torchvision import transforms
from torchvision import datasets
from torch.utils.data import DataLoader
from model.sketch_model import SketchModel
from model.classifier import Classifier
from extract_features.test_view_dataset_reader import MultiViewDataSet
import model.magclassifier as magclassifier
import model.classifier as classifier
from model.view_model import MVCNN
from PIL import Image
import torchvision.transforms as transforms
from flask import current_app

args = extract_features_parse_args()

def extract_feature(image_name):
    os.environ['CUDA_VISIBLE_DEVICES'] = args.gpu
    use_gpu = torch.cuda.is_available()

    if use_gpu:
        print("Currently using GPU: {}".format(args.gpu))
        cudnn.benchmark = True  # 卷积操作优化
    else:
        print("Currently using CPU")

    # 设置存放图片的文件夹
    image_dir = current_app.config['UPLOAD_FOLDER']
    img_path = os.path.join(image_dir, image_name)
    try:
        image = Image.open(img_path).convert('RGB')  # 确保是 RGB 格式
    except FileNotFoundError:
        print(f"Image {image_name} not found in directory {image_dir}")
        return None

    # 加载图像并应用变换
    sketch_transforms = transforms.Compose([
        transforms.Resize(299),  # 调整到所需大小
        transforms.ToTensor(),
        transforms.Normalize([0.5, 0.5, 0.5], [0.5, 0.5, 0.5])  # Imagenet standards
    ])

    # 应用预处理
    image = sketch_transforms(image).unsqueeze(0)  # 添加批次维度 [1, C, H, W]，表示 batch_size=1

    sketch_model = SketchModel(args.model, args.num_classes, use_gpu=True)
    sketch_classifier = magclassifier.Classifier(12, 2048, args.num_classes)

    if use_gpu:
        sketch_model = nn.DataParallel(sketch_model).cuda()
        sketch_classifier = nn.DataParallel(sketch_classifier).cuda()

    # 加载模型
    sketch_model.load_state_dict(
            torch.load(args.model_dir + '/' + args.model + '_best_baseline_sketch_model' + '.pth'))
    sketch_classifier.load_state_dict(
        torch.load(args.model_dir + '/' + args.model + '_best_baseline_sketch_classifier' + '.pth'))

    # 切换到评估模式
    if use_gpu:
        sketch_model.cuda()
        sketch_classifier.cuda()
    sketch_model.eval()
    sketch_classifier.eval()

    # 提取特征
    with torch.no_grad():
        if use_gpu:
            image = image.cuda()

        output = sketch_model.forward(image)
        mu_embeddings, logits = sketch_classifier.forward(output)
        x_norm = torch.norm(mu_embeddings, dim=1, keepdim=True)
        features = nn.functional.normalize(mu_embeddings, dim=1)
    
    return features.detach().cpu().numpy()
    
    