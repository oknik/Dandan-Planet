import argparse

# 创建命令行参数解析器，用于接收参数
def create_extract_features_parser():
    parser = argparse.ArgumentParser("feature extraction of sketch images")

    # dataset
    # Shrec13
    parser.add_argument('--view-datadir', type=str,
                        default='./Shrec_13/Shrec_13/12_views/13_view_render_img')  # 模型数据的位置
    parser.add_argument('--workers', default=1, type=int,
                        help="number of data loading workers (default: 0)")

    # test
    # Shrec13
    parser.add_argument('--batch-size', type=int, default=30)
    parser.add_argument('--num-classes', type=int, default=90)
    parser.add_argument('--num-view-samples', type=int, default=1258)

    # 其他
    parser.add_argument('--gpu', type=str, default='0')
    parser.add_argument('--seed', type=int, default=1)
    parser.add_argument('--use-cpu', action='store_false')
    parser.add_argument('--img-size', type=int, default=224, help="image size")
    parser.add_argument('--model-dir', type=str, default='./saved_model/ResNet50')
    parser.add_argument('--model', type=str, choices=['alexnet', 'vgg16', 'vgg19', 'resnet50', 'resnet101', 'inceptionresnetv2'],
                        default='resnet50')
    parser.add_argument('--pretrain', type=bool, choices=[True, False], default=True)
    parser.add_argument('--uncer', type=bool, choices=[True, False], default=False)
    # features
    parser.add_argument('--cnn-feat-dim', type=int, default=2048)
    parser.add_argument('--feat-dim', type=int, default=256)
    parser.add_argument('--sketch-feat-file', type=str, default='./extract_features/shrec13_resnet_best_sketch_features_p=1_addm=1.55m.mat')
    parser.add_argument('--view-feat-file', type=str, default='./extract_features/shrec13_resnet_best_view_features_p=1_addm=1.55m.mat')

    parser.add_argument('--pattern', type=bool, default=False,
                        help="Extract training data features or test data features, 'True' is for train dataset")
    return parser

# 另一个。。命令行参数？
def create_retrieval_evaluation_parser():
    parser = argparse.ArgumentParser("Retrieval Evaluation")
    parser.add_argument('--class-sorting-file', type=str, default='../class_sorting/sketch_class_sorting.mat',
                        help="class sorting flie of test sketches, .mat file")

    parser.add_argument('--distance-type', type=str, choices=['cosine', 'euclidean'], default='cosine')
    parser.add_argument('--num-testsketch-samples', type=int, default=90 * 30)
    parser.add_argument('--num-classes', type=int, default=90)
    parser.add_argument('--num-view-samples', type=int, default=1258)

    parser.add_argument('--view-feat-flie', type=str,
                        default='./extract_features/shrec13_resnet_best_view_features_p=1_addm=1.55m.mat',
                        help="features flie of view images of 3d models, .mat file")

    return parser

def extract_features_parse_args():
    # 解析所有命令行参数，跳过 Flask 特有的参数
    parser = create_extract_features_parser()
    args, unknown_args = parser.parse_known_args()

    return args

def retrieval_evaluation_parse_args():
    # 解析所有命令行参数，跳过 Flask 特有的参数
    parser = create_retrieval_evaluation_parser()
    args, unknown_args = parser.parse_known_args()

    return args

