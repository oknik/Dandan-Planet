from PIL import Image


def resize_image(input_image_path, output_image_path, new_width, new_height):
    image = Image.open(input_image_path)
    resized_image = image.resize((new_width, new_height))
    resized_image.save(output_image_path)


# 使用示例
input_image_path = "1.jpg"
output_image_path = "4.jpg"
new_width = 3072
new_height = 4096

resize_image('C:/Users/000000/Desktop', 'C:/Users/000000/Desktop', new_width, new_height)
