from flask import Flask, request, jsonify, Blueprint, send_file
import os
import uuid
from werkzeug.utils import secure_filename
from extract_features.extract_features import extract_feature
from extract_features.retrieval_evalution import retrieval_evaluation
from flask import current_app
from pathlib import Path
from qcloud_cos import CosConfig
from qcloud_cos import CosS3Client
from urllib.parse import quote
import tencentcloud.common
from tencentcloud.common.exception.tencent_cloud_sdk_exception import TencentCloudSDKException
from tencentcloud.tmt.v20180321 import tmt_client, models
from tencentcloud.common import credential

# 注册蓝图
bp = Blueprint('sketch', __name__)
# # 图片根目录
# BASE_PATH = Path('/www/wwwroot/ddxq/Shrec_13/Shrec_13/12_views')

# 存储桶相关配置

secret_id = 'AKIDSmwwnSuDNL9kCSYRClEWghV6Xr681jGe'
secret_key = 'HONB3sZ6Ukt8MRN9mXCi2EIKI8pKsXN8'
bucket_name = 'model-1331861153'
region = 'ap-shanghai'

cos_endpoint = f'https://{bucket_name}.cos.{region}.myqcloud.com'

config = CosConfig(
    Region = region,
    SecretId = secret_id,
    SecretKey = secret_key
)

client = CosS3Client(config)

# 图像处理函数
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in current_app.config['ALLOWED_EXTENSIONS']


# 处理文件上传的路由
@bp.route('/upload_image', methods=['POST'])  # 创建一个 POST 请求的路由，当用户上传文件时，访问这个接口
def upload_image():
    # 检查请求中是否包含文件
    if 'file' not in request.files:
        return jsonify({"error": "No file part", "details": str(request.files)}), 400

    # 获取上传的文件对象
    file = request.files['file']

    # 如果文件没有选择（文件名为空），返回错误信息
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # 如果文件符合允许的类型，则处理该文件
    if file and allowed_file(file.filename):
        # 使用 secure_filename 函数确保文件名安全（去除不安全字符等）
        filename = secure_filename(file.filename)
        unique_filename = str(uuid.uuid4()) + '_' + filename
        # 把图片保存到特定路径
        if not os.path.exists(current_app.config['UPLOAD_FOLDER']):
            os.makedirs(current_app.config['UPLOAD_FOLDER'])
        in_filepath = os.path.join('uploads', unique_filename)
        file.save(in_filepath)

        sketch_image_feature = extract_feature(unique_filename)

        # print(sketch_image_feature)
        path = retrieval_evaluation(sketch_image_feature)
        prefix = '12_views' + '/' + path
        entag = Path(path).parts[-2]
        print(prefix)
        # print(entag)

        response = client.list_objects(Bucket=bucket_name, Prefix=prefix)

        if 'Contents' in response:
            file_list = response['Contents']
            if file_list:
                selected_file = file_list[2]
                # print(selected_file)
                image_key = selected_file['Key']
                # print(image_key)
                encoded_image_key = quote(image_key,safe='')
                # print(f"encoded:{encoded_image_key}")
                image_url = f'{cos_endpoint}/{encoded_image_key}'
                # print(image_url)
                chtag=dictTag(entag)
                response = {
                    "entag": entag,
                    "chtag": chtag,
                    "image_url": image_url
                }
                return jsonify(response)
            else:
                return jsonify({"message": "No files found under the specified prefix"}), 404

        else:
            return jsonify({"Directory not found": 404})
    else:
        return jsonify({"error": "File type not allowed"}), 400
        
        
        
        
def translateTag(tag, source_language="en", target_language="zh"):
    try:
        cred = credential.Credential(secret_id, secret_key)
        client = tmt_client.TmtClient(credential=cred, region=region)
        
        # 创建请求对象
        req = models.TextTranslateRequest()
        req.SourceText = tag
        req.Source = source_language
        req.Target = target_language
        req.ProjectId = 0
        
        # 调用API发送请求
        response = client.TextTranslate(req)
        
        # 返回翻译结果
        return response.TargetText
    
    except TencentCloudSDKException as e:
        print(f"Error occurred: {e}")
        return None
        
        
def dictTag(tag):
    translation_dict = {
        "airplane": "飞机",
        "ant":"蚂蚁",
        "axe":"斧头",
        "barn":"谷仓",
        "bed":"床",
        "bee":"蜜蜂",
        "beer-mug":"马克杯",
        "bench":"长椅",
        "bicycle":"自行车",
        "binoculars":"望远镜",
        "book":"书",
        "brain":"大脑",
        "bridge":"桥",
        "bush":"灌木丛",
        "butterfly":"蝴蝶",
        "cabinet":"柜子",
        "car_sedan":"轿车",
        "castle":"城堡",
        "chair":"椅子",
        "church":"教堂",
        "computer_monitor":"电脑显示器",
        "couch":"沙发",
        "dog":"狗",
        "dolphin":"海豚",
        "door":"门",
        "dragon":"龙",
        "duck":"鸭子",
        "face":"脸",
        "fish":"鱼",
        "floor_lamp":"落地灯",
        "flower_with_stem":"花",
        "guitar":"吉他",
        "hammer":"锤子",
        "hand":"手",
        "hat":"帽子",
        "head":"头",
        "helicopter":"直升机",
        "horse":"马",
        "hot_air_ballon":"热气球",
        "hourglass":"沙漏",
        "house":"房子",
        "human-skeleton":"骨架",
        "ice-cream-cone":"冰激凌甜筒",
        "knife":"刀",
        "motorbike":"摩托车",
        "palm_tree":"棕榈树",
        "piano":"钢琴",
        "pickup_truck":"卡丁车",
        "pig":"小猪",
        "potted_plant":"盆栽",
        "rabbit":"兔子",
        "race_car":"赛车",
        "sailboat":"帆船",
        "satellite":"卫星",
        "statellite_dish":"卫星天线",
        "screwdriver":"螺丝刀",
        "sea_turtle":"海龟",
        "shark":"鲨鱼",
        "ship":"船",
        "shoe":"鞋子",
        "shovel":"铲子",
        "skateboard":"滑板",
        "skull":"头骨",
        "skyscraper":"摩天大楼",
        "snake":"蛇",
        "snowman":"雪人",
        "space_shuttle":"航天飞机",
        "spider":"蜘蛛",
        "standing_bird":"小鸟",
        "submarine":"潜水艇",
        "suv":"suv汽车",
        "sword":"宝剑",
        "table":"桌子",
        "tablelamp":"台灯",
        "tent":"帐篷",
        "tire":"轮胎",
        "train":"火车",
        "tree":"树",
        "truck":"卡车",
        "tv":"电视",
        "umbrella":"伞",
        "vase":"花瓶",
        "wheel":"齿轮",
        "wine-bottle":"酒瓶",
        "wineglass": "酒杯",
        "wrist-watch": "手表",
    }
    return translation_dict.get(tag, tag)


