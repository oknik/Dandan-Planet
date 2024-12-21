from sqlalchemy import text

from database import db
from models import Subject, ChineseHanzi, ChinesePinyin, MathResource, Book, BookContent, Letters, \
    WordThemes, Words
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


# 插入语文资源数据
def insert_chinese_hanzi():
    truncate_table("chinese_hanzi")
    chinese_resources = [
        {
            "subject_id": 1,
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
            "subject_id": 1,
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
            "subject_id": 1,
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
            subject_id=resource["subject_id"],
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
        },
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
        },

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
        }
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
        }
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
            "name": "水果跑啊跑",
            "url": 'https://pic.imgdb.cn/item/675557aed0e0a243d4dfed34.jpg',
            "titleUrl": 'https://pic.imgdb.cn/item/675567d8d0e0a243d4dff819.png',
            "audioUrl": f'{base_url}/ fruit.mp3',
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
                # todo
            ])
        }
    ]
    for book in books:
        # 插入书本信息
        new_book = Book(
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
            new_content = BookContent(
                book_id=new_book.id,
                order_id=content["id"],
                url=content["url"],
                audio_url=content["audio"]
            )
            db.session.add(new_content)

    db.session.commit()


# 主函数
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
