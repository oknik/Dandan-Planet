from sqlalchemy import text

from database import db
from models import Subject, ChineseHanzi, ChinesePinyin, MathResource, Letters, \
    WordThemes, Words, ResourceType, PictureBook, PictureBookContent
import json


# 清空
def truncate_table(table_name):
    db.session.execute(text(f"TRUNCATE TABLE {table_name}"))
    db.session.commit()


# 插入课程分类数据
def insert_subjects():
    subjects = [
        {"name": "chinese"},
        {"name": "math"},
        {"name": "english"},
        {"name": "reading"}
    ]
    for subject in subjects:
        if not Subject.query.filter_by(name=subject["name"]).first():
            new_subject = Subject(name=subject["name"])
            db.session.add(new_subject)
    db.session.commit()
    resources = [
        {"subject_id": 1, "name": "chinese_hanzi"},
        {"subject_id": 1, "name": "chinese_pinyin"},
        {"subject_id": 2, "name": "math"},
        {"subject_id": 3, "name": "english_letter"},
        {"subject_id": 3, "name": "english_word"},
        {"subject_id": 4, "name": "fruit"},
        {"subject_id": 4, "name": "horse"},
        {"subject_id": 4, "name": "mike"},
        {"subject_id": 4, "name": "splat"},
        {"subject_id": 5, "name": "drawing"}
    ]
    for resource in resources:
        new_subject = ResourceType(subject_id=resource["subject_id"],
                                   name=resource["name"])
        db.session.add(new_subject)
    db.session.commit()


# 插入语文资源数据
def insert_chinese_hanzi():
    truncate_table("chinese_hanzi")
    chinese_resources = [
        {
            "difficulty": "easy",
            "content": json.dumps([
                '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
                '大', '小', '多', '少', '人', '车', '工', '左', '右', '上',
                '爸', '妈', '白', '云', '日', '月', '太', '阳', '牛', '马',
                '金', '木', '水', '火', '土', '天', '田', '地', '衣', '花',
                '内', '外', '下', '公', '母', '爷', '奶', '兴', '子', '女',
            ], ensure_ascii=False)
        },
        {
            "difficulty": "medium",
            "content": json.dumps([
                '家', '国', '同', '有', '无', '济', '电', '我', '你', '他',
                '学', '习', '体', '民', '得', '因', '果', '由', '其', '前',
                '后', '里', '化', '高', '分', '成', '可', '年', '月', '日',
                '时', '秒', '是', '从', '物', '先', '现', '好', '坏', '说',
                '产', '正', '反', '心', '气', '向', '明', '位', '问', '育',
            ], ensure_ascii=False)
        },
        {
            "difficulty": "hard",
            "content": json.dumps([
                '商', '越', '复', '影', '酸', '甜', '苦', '辣', '咸', '感',
                '情', '理', '省', '市', '区', '县', '东', '西', '南', '北',
                '率', '劳', '动', '光', '荣', '素', '荤', '书', '诗', '音',
                '医', '院', '食', '堂', '警', '察', '消', '防', '政', '府',
                '族', '养', '自', '律', '红', '橙', '黄', '绿', '青', '蓝',
            ], ensure_ascii=False)
        }
    ]
    for resource in chinese_resources:
        new_resource = ChineseHanzi(
            difficulty=resource["difficulty"],
            content=resource["content"])
        db.session.add(new_resource)
    db.session.commit()


def insert_chinese_pinyin():
    truncate_table("chinese_pinyin")
    chinese_resources = [
        {
            "name": 'a',
            "image_url": 'https://pic.imgdb.cn/item/6757cdb4d0e0a243d4e0e95c.jpg',
            "audio_url": 'https://dlink.host/musics'
                         '/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20v'
                         '/OnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3N'
                         '/vZnRfY29tL0VReHNKNjhDczVsT28zNXlZeGVKOEJ3QnJkeWxxYTRsWjhHR3o1Zy1iTEtVZGc.mp3'
        },  # todo
    ]
    for resource in chinese_resources:
        new_resource = ChinesePinyin(
            name=resource["name"],
            image_url=resource["image_url"],
            audio_url=resource["audio_url"])
        db.session.add(new_resource)
    db.session.commit()


# 插入数学资源数据
def insert_math_resources():
    truncate_table("math_resources")
    base_url1 = '/static/number'
    base_url2 = '/static/detail'
    math_resources = [
        # calculate中imgdata
        {
            "type": "imgdata",
            "name": '0',
            "image_url": 'https://pic.imgdb.cn/item/67481044d0e0a243d4d8dabe.png'
        },
        # ...
        # calculate中imgdata2
        {
            "type": "imgdata_border",
            "name": '0',
            "image_url": 'https://pic.imgdb.cn/item/674b0259d0e0a243d4db7662.jpg',
            "audio_url": '0.mp3'
        },
        # ...
        # calculate中operators
        {
            "type": "operators",
            "name": '+',
            "image_url": 'https://pic.imgdb.cn/item/67484cb2d0e0a243d4da2acb.jpg',
        },
        # ...
        # details中
        {
            "type": "imgdata_detail",
            "name": 'zero',
            "image_url": 'https://pic.imgdb.cn/item/6742037ad29ded1a8c405f1c.png',
            "pic_url": 'https://pic.imgdb.cn/item/673cb78fd29ded1a8c2293b3.jpg',
            "text_url": 'https://pic.imgdb.cn/item/67420214d29ded1a8c3f3d3c.png',
            "write_url": 'https://pic.imgdb.cn/item/6738a670d29ded1a8cc6fb11.png',
            "audio_url": '0.mp3',
            "audio_number_url": '0.mp3'
        },  # todo

    ]
    for resource in math_resources:
        if resource.get("audio_url"):
            if resource["type"] == "imgdata_detail":
                resource["audio_url"] = f"{base_url2}/{resource['audio_url']}"
            else:
                resource["audio_url"] = f"{base_url1}/{resource['audio_url']}"
        if resource.get("audio_number_url"):
            resource["audio_number_url"] = f"{base_url1}/{resource['audio_number_url']}"
        new_resource = MathResource(
            type=resource.get("type"),
            name=resource.get("name"),
            image_url=resource.get("image_url"),
            audio_url=resource.get("audio_url"),
            text_url=resource.get("text_url"),
            write_url=resource.get("write_url"),
            audio_number_url=resource.get("audio_number_url"),
        )
        db.session.add(new_resource)
    db.session.commit()


# 插入英语资源数据
def insert_letters():
    truncate_table("letters")
    english_resources = [
        {
            "letter": "A",
            "word": "apple",
            "letter_url": 'https://pic.imgdb.cn/item/6757e047d0e0a243d4e0f5dc.png',
            "word_url": 'https://pic.imgdb.cn/item/6757e0b9d0e0a243d4e0f5ff.png',
            "write_url": 'https://pic.imgdb.cn/item/6757e254d0e0a243d4e0f6ff.png',
        },
        {
            "letter": "B",
            "word": "banana",
            "letter_url": 'https://pic.imgdb.cn/item/6757e28cd0e0a243d4e0f706.png',
            "word_url": 'https://pic.imgdb.cn/item/6757e2b5d0e0a243d4e0f714.png',
            "write_url": 'https://pic.imgdb.cn/item/6757e30ad0e0a243d4e0f72a.png',
        },
        {
            "letter": "C",
            "word": "cat",
            "letter_url": 'https://pic.imgdb.cn/item/67580ca7d0e0a243d4e13125.png',
            "word_url": 'https://pic.imgdb.cn/item/67580cddd0e0a243d4e131dc.png',
            "write_url": 'https://pic.imgdb.cn/item/67580d0fd0e0a243d4e13285.png',
        },
        {
            "letter": "D",
            "word": "dog",
            "letter_url": 'https://pic.imgdb.cn/item/67582df5d0e0a243d4e17904.png',
            "word_url": 'https://pic.imgdb.cn/item/67582e2ad0e0a243d4e17914.png',
            "write_url": 'https://pic.imgdb.cn/item/67582e68d0e0a243d4e17918.png',
        },
        {
            "letter": "E",
            "word": "elephant",
            "letter_url": 'https://pic.imgdb.cn/item/67582fb3d0e0a243d4e17974.png',
            "word_url": 'https://pic.imgdb.cn/item/67582ffed0e0a243d4e1798d.png',
            "write_url": 'https://pic.imgdb.cn/item/6758303ed0e0a243d4e1799d.png',
        },
        {
            "letter": "F",
            "word": "frog",
            "letter_url": 'https://pic.imgdb.cn/item/675831add0e0a243d4e179e6.png',
            "word_url": 'https://pic.imgdb.cn/item/675831e0d0e0a243d4e179f1.png',
            "write_url": 'https://pic.imgdb.cn/item/67583210d0e0a243d4e179fc.png',
        },
        {
            "letter": "G",
            "word": "girl",
            "letter_url": 'https://pic.imgdb.cn/item/67583345d0e0a243d4e17a3e.png',
            "word_url": 'https://pic.imgdb.cn/item/6758336dd0e0a243d4e17a42.png',
            "write_url": 'https://pic.imgdb.cn/item/675833a9d0e0a243d4e17a50.png',
        },
        {
            "letter": "H",
            "word": "home",
            "letter_url": 'https://pic.imgdb.cn/item/67583523d0e0a243d4e17a93.png',
            "word_url": 'https://pic.imgdb.cn/item/67583583d0e0a243d4e17aa8.png',
            "write_url": 'https://pic.imgdb.cn/item/675835b1d0e0a243d4e17aae.png',
        },
        {
            "letter": "I",
            "word": "ice",
            "letter_url": 'https://pic.imgdb.cn/item/675836dfd0e0a243d4e17b30.png',
            "word_url": 'https://pic.imgdb.cn/item/6758371dd0e0a243d4e17b37.png',
            "write_url": 'https://pic.imgdb.cn/item/67583759d0e0a243d4e17b4c.png',
        },
        {
            "letter": "J",
            "word": "juice",
            "letter_url": 'https://pic.imgdb.cn/item/67583895d0e0a243d4e17b97.png',
            "word_url": 'https://pic.imgdb.cn/item/675838bbd0e0a243d4e17b9f.png',
            "write_url": 'https://pic.imgdb.cn/item/675838e0d0e0a243d4e17ba2.png',
        },
        {
            "letter": "K",
            "word": "kite",
            "letter_url": 'https://pic.imgdb.cn/item/67583a29d0e0a243d4e17bff.png',
            "word_url": 'https://pic.imgdb.cn/item/67583a51d0e0a243d4e17c07.png',
            "write_url": 'https://pic.imgdb.cn/item/67583a7fd0e0a243d4e17c17.png',
        },
        {
            "letter": "L",
            "word": "love",
            "letter_url": 'https://pic.imgdb.cn/item/67583bbcd0e0a243d4e17c71.png',
            "word_url": 'https://pic.imgdb.cn/item/67583befd0e0a243d4e17c82.png',
            "write_url": 'https://pic.imgdb.cn/item/67583dced0e0a243d4e17d17.png',
        },
        {
            "letter": "M",
            "word": "moon",
            "letter_url": 'https://pic.imgdb.cn/item/67583f91d0e0a243d4e17d8f.png',
            "word_url": 'https://pic.imgdb.cn/item/67583fb3d0e0a243d4e17d96.png',
            "write_url": 'https://pic.imgdb.cn/item/67583fdcd0e0a243d4e17da7.png',
        },
        {
            "letter": "N",
            "word": "nurse",
            "letter_url": 'https://pic.imgdb.cn/item/675844fcd0e0a243d4e17eb5.png',
            "word_url": 'https://pic.imgdb.cn/item/6758454dd0e0a243d4e17ebf.png',
            "write_url": 'https://pic.imgdb.cn/item/67584579d0e0a243d4e17ed1.png',
        },
        {
            "letter": "O",
            "word": "orange",
            "letter_url": 'https://pic.imgdb.cn/item/6758468ad0e0a243d4e17f27.png',
            "word_url": 'https://pic.imgdb.cn/item/67584f65d0e0a243d4e1823a.png',
            "write_url": 'https://pic.imgdb.cn/item/67584fa9d0e0a243d4e18244.png',
        },
        {
            "letter": "P",
            "word": "pig",
            "letter_url": 'https://pic.imgdb.cn/item/6758518fd0e0a243d4e1828c.png',
            "word_url": 'https://pic.imgdb.cn/item/675851c9d0e0a243d4e18291.png',
            "write_url": 'https://pic.imgdb.cn/item/67585220d0e0a243d4e182a4.png',
        },
        {
            "letter": "Q",
            "word": "question",
            "letter_url": 'https://pic.imgdb.cn/item/675853c9d0e0a243d4e182ff.png',
            "word_url": 'https://pic.imgdb.cn/item/67585419d0e0a243d4e18315.png',
            "write_url": 'https://pic.imgdb.cn/item/6758543ed0e0a243d4e18324.png',
        },
        {
            "letter": "R",
            "word": "rabbit",
            "letter_url": 'https://pic.imgdb.cn/item/67585878d0e0a243d4e1846a.png',
            "word_url": 'https://pic.imgdb.cn/item/675858a6d0e0a243d4e18481.png',
            "write_url": 'https://pic.imgdb.cn/item/6758591ed0e0a243d4e184a0.png',
        },
        {
            "letter": "S",
            "word": "snake",
            "letter_url": 'https://pic.imgdb.cn/item/67585e35d0e0a243d4e18582.png',
            "word_url": 'https://pic.imgdb.cn/item/67585e5dd0e0a243d4e1858c.png',
            "write_url": 'https://pic.imgdb.cn/item/67585eaad0e0a243d4e185a8.png',
        },
        {
            "letter": "T",
            "word": "tea",
            "letter_url": 'https://pic.imgdb.cn/item/67586056d0e0a243d4e185e4.png',
            "word_url": 'https://pic.imgdb.cn/item/6758607dd0e0a243d4e185ea.png',
            "write_url": 'https://pic.imgdb.cn/item/675860a5d0e0a243d4e185ee.png',
        },
        {
            "letter": "U",
            "word": "universe",
            "letter_url": 'https://pic.imgdb.cn/item/67586245d0e0a243d4e1861e.png',
            "word_url": 'https://pic.imgdb.cn/item/67586266d0e0a243d4e18625.png',
            "write_url": 'https://pic.imgdb.cn/item/675862b8d0e0a243d4e18637.png',
        },
        {
            "letter": "V",
            "word": "violin",
            "letter_url": 'https://pic.imgdb.cn/item/67586397d0e0a243d4e18671.png',
            "word_url": 'https://pic.imgdb.cn/item/6758647cd0e0a243d4e186ad.png',
            "write_url": 'https://pic.imgdb.cn/item/675864abd0e0a243d4e186b5.png',
        },
        {
            "letter": "W",
            "word": "wolf",
            "letter_url": 'https://pic.imgdb.cn/item/675865a0d0e0a243d4e186e9.png',
            "word_url": 'https://pic.imgdb.cn/item/6758662fd0e0a243d4e18712.png',
            "write_url": 'https://pic.imgdb.cn/item/6758668bd0e0a243d4e1874b.png',
        },
        {
            "letter": "X",
            "word": "x-ray",
            "letter_url": 'https://pic.imgdb.cn/item/67586827d0e0a243d4e187d3.png',
            "word_url": 'https://pic.imgdb.cn/item/675869dcd0e0a243d4e18805.png',
            "write_url": 'https://pic.imgdb.cn/item/675869f6d0e0a243d4e18806.png',
        },
        {
            "letter": "Y",
            "word": "yogurt",
            "letter_url": 'https://pic.imgdb.cn/item/67586adad0e0a243d4e18829.png',
            "word_url": 'https://pic.imgdb.cn/item/67586af5d0e0a243d4e18832.png',
            "write_url": 'https://pic.imgdb.cn/item/67586b1fd0e0a243d4e18834.png',
        },
        {
            "letter": "Z",
            "word": "zebra",
            "letter_url": 'https://pic.imgdb.cn/item/67586da2d0e0a243d4e188aa.png',
            "word_url": 'https://pic.imgdb.cn/item/67586dd2d0e0a243d4e188b6.png',
            "write_url": 'https://pic.imgdb.cn/item/67586e02d0e0a243d4e188c0.png',
        }
    ]
    for resource in english_resources:
        new_resource = Letters(
            letter=resource["letter"],
            word=resource["word"],
            letter_url=resource["letter_url"],
            word_url=resource["word_url"],
            write_url=resource["write_url"]
        )
        db.session.add(new_resource)
    db.session.commit()


# 单词主题
def insert_themes():
    english_resources = [
        {
            "theme": "weather",
            "url": 'https://pic.imgdb.cn/item/67613705d0e0a243d4e52fbd.png',  # word-select里
            "themeUrl": 'https://pic.imgdb.cn/item/676173f0d0e0a243d4e582b0.png',  # word-learning里
        },
        {
            "theme": "month",
            "url": 'https://pic.imgdb.cn/item/67613736d0e0a243d4e52fd4.png',
            "themeUrl": 'https://pic.imgdb.cn/item/6761a3dad0e0a243d4e58dda.png',
        },
        {
            "theme": "food",
            "url": 'https://pic.imgdb.cn/item/6761375cd0e0a243d4e52ff3.png',
            "themeUrl": 'https://pic.imgdb.cn/item/676263e8d0e0a243d4e5a86e.png',
        },
        {
            "theme": "color",
            "url": 'https://pic.imgdb.cn/item/6761378ad0e0a243d4e53069.png',
            "themeUrl": 'https://pic.imgdb.cn/item/676265fdd0e0a243d4e5a905.png',
        },
        {
            "theme": "clothing",
            "url": 'https://pic.imgdb.cn/item/676147bbd0e0a243d4e55d1d.png',
            "themeUrl": 'https://pic.imgdb.cn/item/676267dcd0e0a243d4e5a9b6.png',
        },
        {
            "theme": "feeling",
            "url": 'https://pic.imgdb.cn/item/676137b3d0e0a243d4e530be.png',
            "themeUrl": 'https://pic.imgdb.cn/item/67626b0dd0e0a243d4e5aaf0.png',
        },
        {
            "theme": "season",
            "url": 'https://pic.imgdb.cn/item/676137edd0e0a243d4e530d3.png',
            "themeUrl": 'https://pic.imgdb.cn/item/67626c71d0e0a243d4e5ab9b.png',
        },
        {
            "theme": "preposition",
            "url": 'https://pic.imgdb.cn/item/67613830d0e0a243d4e530fb.png',
            "themeUrl": 'https://pic.imgdb.cn/item/67626dc7d0e0a243d4e5ac22.png',
        },
        {
            "theme": "transport",
            "url": 'https://pic.imgdb.cn/item/676147fed0e0a243d4e55db9.png',
            "themeUrl": 'https://pic.imgdb.cn/item/67626f2bd0e0a243d4e5acae.png',
        },
        {
            "theme": "day",
            "url": 'https://pic.imgdb.cn/item/67613871d0e0a243d4e5311a.png',
            "themeUrl": 'https://pic.imgdb.cn/item/676270b9d0e0a243d4e5ad2c.png',
        },
        {
            "theme": "time",
            "url": 'https://pic.imgdb.cn/item/67613896d0e0a243d4e53133.png',
            "themeUrl": 'https://pic.imgdb.cn/item/67627249d0e0a243d4e5aec8.png',
        },
        {
            "theme": "sports",
            "url": 'https://pic.imgdb.cn/item/676138b9d0e0a243d4e53163.png',
            "themeUrl": 'https://pic.imgdb.cn/item/676273fcd0e0a243d4e5afb2.png',
        },
        {
            "theme": "vegetable",
            "url": 'https://pic.imgdb.cn/item/67614836d0e0a243d4e55e6a.png',
            "themeUrl": 'https://pic.imgdb.cn/item/67627575d0e0a243d4e5b036.png',
        },
        {
            "theme": "activity",
            "url": 'https://pic.imgdb.cn/item/67614859d0e0a243d4e55ee0.png',
            "themeUrl": 'https://pic.imgdb.cn/item/676276ecd0e0a243d4e5b103.png',
        },
        {
            "theme": "shape",
            "url": 'https://pic.imgdb.cn/item/6761486dd0e0a243d4e55f09.png',
            "themeUrl": 'https://pic.imgdb.cn/item/676277b9d0e0a243d4e5b149.png',
        },
    ]
    for resource in english_resources:
        new_resource = WordThemes(
            theme=resource["theme"],
            url=resource["url"],
            theme_url=resource["themeUrl"],
        )
        db.session.add(new_resource)
    db.session.commit()


# 插入单词
def insert_words():
    truncate_table("words")
    english_resources = [
        {
            "theme_id": 1,
            "word": "sunny",
            "wordUrl": 'https://pic.imgdb.cn/item/67619e49d0e0a243d4e58c42.jpg',
        },
        {
            "theme_id": 1,
            "word": "rainy",
            "word_url": 'https://pic.imgdb.cn/item/67619e71d0e0a243d4e58c44.jpg',
        },
        {
            "theme_id": 1,
            "word": "cloudy",
            "word_url": 'https://pic.imgdb.cn/item/67626102d0e0a243d4e5a7b8.jpg'
        },
        {
            "theme_id": 1,
            "word": "snowy",
            "word_url": 'https://pic.imgdb.cn/item/67626133d0e0a243d4e5a7bf.jpg'
        },
        {
            "theme_id": 1,
            "word": "stormy",
            "word_url": 'https://pic.imgdb.cn/item/67626172d0e0a243d4e5a7cd.jpg',
        },
        {
            "theme_id": 2,
            "word": "January",
            "word_url": 'https://pic.imgdb.cn/item/676261d1d0e0a243d4e5a7ea.jpg',
        },
        {
            "theme_id": 2,
            "word": "February",
            "word_url": 'https://pic.imgdb.cn/item/676261e1d0e0a243d4e5a7f2.jpg',
        },
        {
            "theme_id": 2,
            "word": "March",
            "word_url": 'https://pic.imgdb.cn/item/676261f4d0e0a243d4e5a7f5.jpg',
        },
        {
            "theme_id": 2,
            "word": "April",
            "word_url": 'https://pic.imgdb.cn/item/67626216d0e0a243d4e5a7f9.jpg'
        },
        {
            "theme_id": 2,
            "word": "May",
            "word_url": 'https://pic.imgdb.cn/item/67626236d0e0a243d4e5a7fd.jpg',
        },
        {
            "theme_id": 2,
            "word": "June",
            "word_url": 'https://pic.imgdb.cn/item/67626271d0e0a243d4e5a804.jpg',
        },
        {
            "theme_id": 2,
            "word": "July",
            "word_url": 'https://pic.imgdb.cn/item/67626326d0e0a243d4e5a83d.jpg'
        },
        {
            "theme_id": 2,
            "word": "August",
            "word_url": 'https://pic.imgdb.cn/item/6762633ed0e0a243d4e5a841.jpg'
        },
        {
            "theme_id": 2,
            "word": "September",
            "word_url": 'https://pic.imgdb.cn/item/6762634ad0e0a243d4e5a844.jpg'
        },
        {
            "theme_id": 2,
            "word": "October",
            "word_url": 'https://pic.imgdb.cn/item/67626355d0e0a243d4e5a847.jpg'
        },
        {
            "theme_id": 2,
            "word": "November",
            "word_url": 'https://pic.imgdb.cn/item/67626370d0e0a243d4e5a84c.jpg'
        },
        {
            "theme_id": 2,
            "word": "December",
            "word_url": 'https://pic.imgdb.cn/item/67626393d0e0a243d4e5a85b.jpg'
        },
        {
            "theme_id": 3,
            "word": "egg",
            "word_url": 'https://pic.imgdb.cn/item/67626483d0e0a243d4e5a890.jpg'
        },
        {
            "theme_id": 3,
            "word": "cookie",
            "word_url": 'https://pic.imgdb.cn/item/6762648fd0e0a243d4e5a891.jpg'
        },
        {
            "theme_id": 3,
            "word": "bread",
            "word_url": 'https://pic.imgdb.cn/item/676264a2d0e0a243d4e5a896.jpg'
        },
        {
            "theme_id": 3,
            "word": "cake",
            "word_url": 'https://pic.imgdb.cn/item/676264bbd0e0a243d4e5a899.jpg'
        },
        {
            "theme_id": 3,
            "word": "burger",
            "word_url": 'https://pic.imgdb.cn/item/676264cad0e0a243d4e5a89b.jpg'
        },
        {
            "theme_id": 3,
            "word": "candy",
            "word_url": 'https://pic.imgdb.cn/item/676264e6d0e0a243d4e5a8a0.jpg'
        },
        {
            "theme_id": 4,
            "word": "yellow",
            "word_url": 'https://pic.imgdb.cn/item/676265a4d0e0a243d4e5a8df.png',
        },
        {
            "theme_id": 4,
            "word": "black",
            "word_url": 'https://pic.imgdb.cn/item/67626632d0e0a243d4e5a90f.png',
        },
        {
            "theme_id": 4,
            "word": "blue",
            "word_url": 'https://pic.imgdb.cn/item/67626670d0e0a243d4e5a92f.png',
        },
        {
            "theme_id": 4,
            "word": "red",
            "word_url": 'https://pic.imgdb.cn/item/676266a1d0e0a243d4e5a941.png'
        },
        {
            "theme_id": 4,
            "word": "purple",
            "word_url": 'https://pic.imgdb.cn/item/676266ced0e0a243d4e5a961.png'
        },
        {
            "theme_id": 4,
            "word": "white",
            "word_url": 'https://pic.imgdb.cn/item/676266f1d0e0a243d4e5a96d.png'
        },
        {
            "theme_id": 4,
            "word": "green",
            "word_url": 'https://pic.imgdb.cn/item/67626717d0e0a243d4e5a97f.png'
        },
        {
            "theme_id": 4,
            "word": "orange",
            "word_url": 'https://pic.imgdb.cn/item/6762674fd0e0a243d4e5a98b.png'
        },
        {
            "theme_id": 4,
            "word": "pink",
            "word_url": 'https://pic.imgdb.cn/item/6762677cd0e0a243d4e5a993.png'
        },
        {
            "theme_id": 5,
            "word": "cap",
            "word_url": 'https://pic.imgdb.cn/item/67626852d0e0a243d4e5a9e7.png'
        },
        {
            "theme_id": 5,
            "word": "coat",
            "word_url": 'https://pic.imgdb.cn/item/6762686ad0e0a243d4e5a9f5.png'
        },
        {
            "theme_id": 5,
            "word": "dress",
            "word_url": 'https://pic.imgdb.cn/item/67626885d0e0a243d4e5a9fc.png'
        },
        {
            "theme_id": 5,
            "word": "gloves",
            "word_url": 'https://pic.imgdb.cn/item/67626914d0e0a243d4e5aa3b.png'
        },
        {
            "theme_id": 5,
            "word": "hoody",
            "word_url": 'https://pic.imgdb.cn/item/6762696cd0e0a243d4e5aa50.png'
        },
        {
            "theme_id": 5,
            "word": "jeans",
            "word_url": 'https://pic.imgdb.cn/item/676269a3d0e0a243d4e5aa55.png'
        },
        {
            "theme_id": 5,
            "word": "shirt",
            "word_url": 'https://pic.imgdb.cn/item/676269d9d0e0a243d4e5aa60.png'
        },
        {
            "theme_id": 6,
            "word": "tired",
            "word_url": 'https://pic.imgdb.cn/item/67626b85d0e0a243d4e5ab43.png'
        },
        {
            "theme_id": 6,
            "word": "angry",
            "word_url": 'https://pic.imgdb.cn/item/67626ba1d0e0a243d4e5ab49.png'
        },
        {
            "theme_id": 6,
            "word": "happy",
            "word_url": 'https://pic.imgdb.cn/item/67626bb9d0e0a243d4e5ab50.png'
        },
        {
            "theme_id": 6,
            "word": "hungry",
            "word_url": 'https://pic.imgdb.cn/item/67626bdfd0e0a243d4e5ab57.png'
        },
        {
            "theme_id": 6,
            "word": "sad",
            "word_url": 'https://pic.imgdb.cn/item/67626bf9d0e0a243d4e5ab5b.png'
        },
        {
            "theme_id": 6,
            "word": "scared",
            "word_url": 'https://pic.imgdb.cn/item/67626c1cd0e0a243d4e5ab61.png'
        },
        {
            "theme_id": 7,
            "word": "spring",
            "word_url": 'https://pic.imgdb.cn/item/67626cb6d0e0a243d4e5abca.png'
        },
        {
            "theme_id": 7,
            "word": "summer",
            "word_url": 'https://pic.imgdb.cn/item/67626ce0d0e0a243d4e5abd3.png'
        },
        {
            "theme_id": 7,
            "word": "autumn",
            "word_url": 'https://pic.imgdb.cn/item/67626cfdd0e0a243d4e5abd6.png'
        },
        {
            "theme_id": 7,
            "word": "winter",
            "word_url": 'https://pic.imgdb.cn/item/67626d22d0e0a243d4e5abe2.png'
        },
        {
            "theme_id": 8,
            "word": "in",
            "word_url": 'https://pic.imgdb.cn/item/67626e0ad0e0a243d4e5ac45.png',
        },
        {
            "theme_id": 8,
            "word": "on",
            "word_url": 'https://pic.imgdb.cn/item/67626e29d0e0a243d4e5ac4e.png',
        },
        {
            "theme_id": 8,
            "word": "above",
            "word_url": 'https://pic.imgdb.cn/item/67626e4bd0e0a243d4e5ac62.png',
        },
        {
            "theme_id": 8,
            "word": "between",
            "word_url": 'https://pic.imgdb.cn/item/67626e60d0e0a243d4e5ac6d.png',
        },
        {
            "theme_id": 8,
            "word": "behind",
            "word_url": 'https://pic.imgdb.cn/item/67626e87d0e0a243d4e5ac77.png',
        },
        {
            "theme_id": 8,
            "word": "under",
            "word_url": 'https://pic.imgdb.cn/item/67626eb7d0e0a243d4e5ac91.png',
        },
        {
            "theme_id": 9,
            "word": "bicycle",
            "word_url": 'https://pic.imgdb.cn/item/67626f4cd0e0a243d4e5acc2.png'
        },
        {
            "theme_id": 9,
            "word": "bus",
            "word_url": 'https://pic.imgdb.cn/item/67626fcad0e0a243d4e5aced.png'
        },
        {
            "theme_id": 9,
            "word": "car",
            "word_url": 'https://pic.imgdb.cn/item/67626fe8d0e0a243d4e5acf3.png'
        },
        {
            "theme_id": 9,
            "word": "ferry",
            "word_url": 'https://pic.imgdb.cn/item/67627015d0e0a243d4e5acff.png'
        },
        {
            "theme_id": 9,
            "word": "taxi",
            "word_url": 'https://pic.imgdb.cn/item/67627057d0e0a243d4e5ad27.png'
        },
        {
            "theme_id": 10,
            "word": "Monday",
            "word_url": 'https://pic.imgdb.cn/item/67627105d0e0a243d4e5ad4a.png'
        },
        {
            "theme_id": 10,
            "word": "Tuesday",
            "word_url": 'https://pic.imgdb.cn/item/67627143d0e0a243d4e5ad6f.png'
        },
        {
            "theme_id": 10,
            "word": "Wednesday",
            "word_url": 'https://pic.imgdb.cn/item/6762716ad0e0a243d4e5ae8e.png'
        },
        {
            "theme_id": 10,
            "word": "Thursday",
            "word_url": 'https://pic.imgdb.cn/item/6762717fd0e0a243d4e5ae93.png'
        },
        {
            "theme_id": 10,
            "word": "Friday",
            "word_url": 'https://pic.imgdb.cn/item/6762719dd0e0a243d4e5ae99.png'
        },
        {
            "theme_id": 10,
            "word": "Saturday",
            "word_url": 'https://pic.imgdb.cn/item/676271b6d0e0a243d4e5aea3.png'
        },
        {
            "theme_id": 10,
            "word": "Sunday",
            "word_url": 'https://pic.imgdb.cn/item/676271ced0e0a243d4e5aeaf.png'
        },
        {
            "theme_id": 11,
            "word": "twelve o'clock",
            "word_url": 'https://pic.imgdb.cn/item/676272f4d0e0a243d4e5af48.png'
        },
        {
            "theme_id": 11,
            "word": "ten past twelve",
            "word_url": 'https://pic.imgdb.cn/item/6762731dd0e0a243d4e5af55.png'
        },
        {
            "theme_id": 11,
            "word": "nine thirty",
            "word_url": 'https://pic.imgdb.cn/item/67627380d0e0a243d4e5af87.png'
        },
        {
            "theme_id": 12,
            "word": "badminton",
            "word_url": 'https://pic.imgdb.cn/item/67627446d0e0a243d4e5afcb.png',
        },
        {
            "theme_id": 12,
            "word": "baseball",
            "word_url": 'https://pic.imgdb.cn/item/67627463d0e0a243d4e5afde.png',
        },
        {
            "theme_id": 12,
            "word": "basketball",
            "word_url": 'https://pic.imgdb.cn/item/67627473d0e0a243d4e5afe6.png',
        },
        {
            "theme_id": 12,
            "word": "football",
            "word_url": 'https://pic.imgdb.cn/item/6762749dd0e0a243d4e5aff3.png',
        },
        {
            "theme_id": 12,
            "word": "skiing",
            "word_url": 'https://pic.imgdb.cn/item/676274c9d0e0a243d4e5b00d.png',
        },
        {
            "theme_id": 12,
            "word": "swimming",
            "word_url": 'https://pic.imgdb.cn/item/676274e6d0e0a243d4e5b019.png',
        },
        {
            "theme_id": 13,
            "word": "carrot",
            "word_url": 'https://pic.imgdb.cn/item/676275add0e0a243d4e5b04d.png'
        },
        {
            "theme_id": 13,
            "word": "corn",
            "word_url": 'https://pic.imgdb.cn/item/676275cfd0e0a243d4e5b05b.png'
        },
        {
            "theme_id": 13,
            "word": "cucumber",
            "word_url": 'https://pic.imgdb.cn/item/676275e8d0e0a243d4e5b060.png'
        },
        {
            "theme_id": 13,
            "word": "mushroom",
            "word_url": 'https://pic.imgdb.cn/item/67627615d0e0a243d4e5b08b.png'
        },
        {
            "theme_id": 13,
            "word": "pepper",
            "word_url": 'https://pic.imgdb.cn/item/6762763ad0e0a243d4e5b09e.png'
        },
        {
            "theme_id": 13,
            "word": "spinach",
            "word_url": 'https://pic.imgdb.cn/item/6762765fd0e0a243d4e5b0b8.png'
        },
        {
            "theme_id": 14,
            "word": "climbing",
            "word_url": 'https://pic.imgdb.cn/item/67627700d0e0a243d4e5b10e.png'
        },
        {
            "theme_id": 14,
            "word": "cooking",
            "word_url": 'https://pic.imgdb.cn/item/67627732d0e0a243d4e5b133.png'
        },
        {
            "theme_id": 14,
            "word": "dancing",
            "word_url": 'https://pic.imgdb.cn/item/6762774fd0e0a243d4e5b137.png'
        },
        {
            "theme_id": 14,
            "word": "reading",
            "word_url": 'https://pic.imgdb.cn/item/6762776ed0e0a243d4e5b13c.png'
        },
        {
            "theme_id": 15,
            "word": "triangle",
            "word_url": 'https://pic.imgdb.cn/item/67627808d0e0a243d4e5b164.png'
        },
        {
            "theme_id": 15,
            "word": "circle",
            "word_url": 'https://pic.imgdb.cn/item/67627824d0e0a243d4e5b168.png'
        },
        {
            "theme_id": 15,
            "word": "heart",
            "word_url": 'https://pic.imgdb.cn/item/6762784ed0e0a243d4e5b170.png'
        },
        {
            "theme_id": 15,
            "word": "rectangle",
            "word_url": 'https://pic.imgdb.cn/item/67627868d0e0a243d4e5b17d.png'
        },
        {
            "theme_id": 15,
            "word": "square",
            "word_url": 'https://pic.imgdb.cn/item/67627888d0e0a243d4e5b183.png'
        },
    ]
    for resource in english_resources:
        new_resource = Words(
            theme_id=resource["theme_id"],
            word=resource["word"],
            word_url=resource["wordUrl"],
        )
        db.session.add(new_resource)
    db.session.commit()


# 插入绘本资源数据
def insert_picture_books():
    base_url = '/static/read'
    books = [
        {
            "resource_type_id": 6,
            "name": "水果跑啊跑",
            "url": 'https://pic.imgdb.cn/item/675557aed0e0a243d4dfed34.jpg',
            "titleUrl": 'https://pic.imgdb.cn/item/675567d8d0e0a243d4dff819.png',
            "audioUrl": f'{base_url}/fruit.mp3',
            "content": json.dumps([
                {
                    "id": 1,
                    "url": "https://pic.imgdb.cn/item/67555fb8d0e0a243d4dff3b1.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/ca/ca627759aa30bc49995400041e224eca.mp3"
                },
                {
                    "id": 2,
                    "url": "https://pic.imgdb.cn/item/67555fc0d0e0a243d4dff3bc.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/2a/2a6f6a88efa49b5bf9ace68ef6b68dfd.mp3"
                },
                {
                    "id": 3,
                    "url": "https://pic.imgdb.cn/item/67555fccd0e0a243d4dff3c4.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/19/197f2089682c149c344ecdd5e6ef02f7.mp3"
                },
                {
                    "id": 4,
                    "url": "https://pic.imgdb.cn/item/67555fd3d0e0a243d4dff3ca.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/dc/dcf6c5baa1944ab03443c30fb8fb62d0.mp3"
                },
                {
                    "id": 5,
                    "url": "https://pic.imgdb.cn/item/67555fe2d0e0a243d4dff3cf.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/c4/c45f6c684f678d463e2fbb07579af453.mp3"
                },
                {
                    "id": 6,
                    "url": "https://pic.imgdb.cn/item/67555ff3d0e0a243d4dff3dc.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/48/48c1f7131178a467cedef5b8a7f0bd4e.mp3"
                },
                {
                    "id": 7,
                    "url": "https://pic.imgdb.cn/item/6755600fd0e0a243d4dff3ec.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/7b/7b7da225a162c9086934462b518723b0.mp3"
                },
                {
                    "id": 8,
                    "url": "https://pic.imgdb.cn/item/67556019d0e0a243d4dff3f1.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/23/23e02f1417dc2c3cc7494287bf2ee93e.mp3"
                },
                {
                    "id": 9,
                    "url": "https://pic.imgdb.cn/item/67556020d0e0a243d4dff3f6.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/b3/b3cd5cea241af335b64f0db7d0964a2f.mp3"
                },
                {
                    "id": 10,
                    "url": "https://pic.imgdb.cn/item/67556040d0e0a243d4dff406.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/d8/d8a6fa9f5bab3eb3372c588424765972.mp3"
                },
                {
                    "id": 11,
                    "url": "https://pic.imgdb.cn/item/67556047d0e0a243d4dff409.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/fe/feb8962d844d470a4d9ef30ee37e85ff.mp3"
                }
            ])
        },
        {
            "resource_type_id": 7,
            "name": '我要骑大马',
            "url": 'https://pic.imgdb.cn/item/67545d13d0e0a243d4dfcd7f.jpg',
            "titleUrl": 'https://pic.imgdb.cn/item/67556705d0e0a243d4dff7ea.png',
            "audioUrl": f'{base_url}/horse.mp3',
            "contentUrl": json.dumps([
                {
                    "id": 1,
                    "url": "https://pic.imgdb.cn/item/67556723d0e0a243d4dff7f1.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/58/58d4bd97a845471c95d7d06d646e6b02.mp3"
                },
                {
                    "id": 2,
                    "url": "https://pic.imgdb.cn/item/6755672bd0e0a243d4dff7f3.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/f2/f2daf040dc45f266a5b233b330f0402e.mp3"
                },
                {
                    "id": 3,
                    "url": "https://pic.imgdb.cn/item/67556731d0e0a243d4dff7f5.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/bd/bd62c1dc945c493bb23934c4e8bea2d3.mp3"
                },
                {
                    "id": 4,
                    "url": "https://pic.imgdb.cn/item/67556736d0e0a243d4dff7f6.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/4c/4cb1c611dc3f32749aa1fe74bd3e5773.mp3"
                },
                {
                    "id": 5,
                    "url": "https://pic.imgdb.cn/item/6755673cd0e0a243d4dff7f7.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/1c/1c60772b5eddc2e2ea7a55b7e2390b4a.mp3"
                },
                {
                    "id": 6,
                    "url": "https://pic.imgdb.cn/item/67556742d0e0a243d4dff7f8.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/85/85f93c6df53bf57da6686e86966d3e30.mp3"
                },
                {
                    "id": 7,
                    "url": "https://pic.imgdb.cn/item/6755674ad0e0a243d4dff7fb.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/5c/5c18b9ceee2fa038793e25414776b470.mp3"
                },
                {
                    "id": 8,
                    "url": "https://pic.imgdb.cn/item/67556753d0e0a243d4dff7fc.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/e3/e3896e0fe1a4c993b7e4e08b21aebd05.mp3"
                },
                {
                    "id": 9,
                    "url": "https://pic.imgdb.cn/item/67556759d0e0a243d4dff7fe.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/05/05dedb01ca17f91d6e6fcff88ad84d75.mp3"
                },
                {
                    "id": 10,
                    "url": "https://pic.imgdb.cn/item/6755675fd0e0a243d4dff800.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/42/425ba629357f1fa0c50bee0c3d66e4ff.mp3"
                },
                {
                    "id": 11,
                    "url": "https://pic.imgdb.cn/item/67556766d0e0a243d4dff802.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/b6/b6d7ad87b80443917fe948a75a2ecf43.mp3"
                }
            ])
        },
        {
            "resource_type_id": 8,
            "name": 'Mike helps out',
            "url": 'https://pic.imgdb.cn/item/67546012d0e0a243d4dfce04.jpg',
            "titleUrl": 'https://pic.imgdb.cn/item/67554e1bd0e0a243d4dfe7e3.png',
            "audioUrl": f'{base_url}/mike.mp3',
            "contentUrl": json.dumps([
                {
                    "id": 1,
                    "url": "https://pic.imgdb.cn/item/67554d0fd0e0a243d4dfe791.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/41/79/dfe458b4-35d1-4908-a6f3-9376385ce5ec.mp3"
                },
                {
                    "id": 2,
                    "url": "https://pic.imgdb.cn/item/67554d1ed0e0a243d4dfe795.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/bb/7f/a94bbe1d-a76b-4fcc-b529-e27097e41735.mp3"
                },
                {
                    "id": 3,
                    "url": "https://pic.imgdb.cn/item/67554d24d0e0a243d4dfe799.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/d0/57/a85cffd4-05ef-45fc-b9d2-b9043e42c852.mp3"
                },
                {
                    "id": 4,
                    "url": "https://pic.imgdb.cn/item/67554d2bd0e0a243d4dfe79a.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/10/31/8f5e3c74-8c65-4ce3-a225-79afd907dc8a.mp3"
                },
                {
                    "id": 5,
                    "url": "https://pic.imgdb.cn/item/67554d32d0e0a243d4dfe79c.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/ac/8d/9e4c4a03-5694-4a58-b0d7-2c636b681987.mp3"
                },
                {
                    "id": 6,
                    "url": "https://pic.imgdb.cn/item/67554d38d0e0a243d4dfe79e.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/00/c2/5066ae47-1f05-4b70-a565-f88bedb4dedd.mp3"
                },
                {
                    "id": 7,
                    "url": "https://pic.imgdb.cn/item/67554d40d0e0a243d4dfe79f.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/f9/48/c7eed3fe-b038-4fd9-9faa-020606338716.mp3"
                },
            ])
        },
        {
            "resource_type_id": 9,
            "name": 'Splat',
            "url": 'https://pic.imgdb.cn/item/6754648cd0e0a243d4dfcf1f.png',
            "titleUrl": 'https://pic.imgdb.cn/item/67554e6fd0e0a243d4dfe808.png',
            "audioUrl": f'{base_url}/splat.mp3',
            "contentUrl": json.dumps([
                {
                    "id": 1,
                    "url": "https://pic.imgdb.cn/item/675466c5d0e0a243d4dfcf92.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/e4/5e/b3c53388-3291-4720-92c8-092e19f4c860.mp3"
                },
                {
                    "id": 2,
                    "url": "https://pic.imgdb.cn/item/675466d1d0e0a243d4dfcf95.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/f3/12/7b21f127-42b9-4a90-90b3-7c50a543a0d8.mp3"
                },
                {
                    "id": 3,
                    "url": "https://pic.imgdb.cn/item/675466dcd0e0a243d4dfcf96.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/c3/6d/5c8a513e-b707-4636-a605-29528c8d5516.mp3"
                },
                {
                    "id": 4,
                    "url": "https://pic.imgdb.cn/item/675466e6d0e0a243d4dfcf98.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/d8/36/f0c389aa-fcc3-4697-a19a-c9dafdb318a3.mp3"
                },
                {
                    "id": 5,
                    "url": "https://pic.imgdb.cn/item/675466f1d0e0a243d4dfcf99.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/1e/d8/c861723b-d6b1-4b9f-9f35-ba015a8c786f.mp3"
                },
                {
                    "id": 6,
                    "url": "https://pic.imgdb.cn/item/675466f9d0e0a243d4dfcfa4.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/e1/0b/decef66b-b370-4105-956d-224136d35f27.mp3"
                },
                {
                    "id": 7,
                    "url": "https://pic.imgdb.cn/item/67546702d0e0a243d4dfcfbc.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/83/c0/9a137886-d6c5-4210-a129-d0fb875425fd.mp3"
                },
                {
                    "id": 8,
                    "url": "https://pic.imgdb.cn/item/6754670bd0e0a243d4dfcfc1.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/e9/a6/e36b551d-3adc-415c-be67-4d78c547f9df.mp3"
                },
                {
                    "id": 9,
                    "url": "https://pic.imgdb.cn/item/67546722d0e0a243d4dfcfc3.jpg",
                    "audio": "https://image.limaogushi.com/file/picture-books/audio/c9/60/a22e37b9-8b10-4425-b6d4-fea836e745f4.mp3"
                }
            ])
        },
    ]
    for book in books:
        # 插入书本信息
        new_book = PictureBook(
            resource_type_id=book["resource_type_id"],
            name=book["name"],
            url=book["url"],
            title_url=book["titleUrl"],
            audio_url=book["audioUrl"]
        )
        db.session.add(new_book)
        db.session.flush()  # 获取新插入的书本的 ID
        content_data = json.loads(book["content"])

        # 插入书本内容
        for content in content_data:
            new_content = PictureBookContent(
                book_id=new_book.id,
                order_id=content["id"],
                url=content["url"],
                audio_url=content["audio"]
            )
            db.session.add(new_content)

    db.session.commit()

# def seed_data():
#     insert_subjects()
#     insert_chinese_hanzi()
#     insert_chinese_pinyin()
#     insert_math_resources()
#     insert_letters()
#     insert_themes()
#     insert_words()
#     insert_picture_books()
#
#
# if __name__ == "__main__":
#     from app import create_app
#
#     app = create_app()
#     with app.app_context():
#         seed_data()
