const titleUrl = 'https://pic.imgdb.cn/item/67485097d0e0a243d4da3849.jpg'
const imageData = [
    {
      name: "0",
      imageUrl: "https://pic.imgdb.cn/item/67481044d0e0a243d4d8dabe.png"
    },
    {
      name: "1",
      imageUrl: "https://pic.imgdb.cn/item/67481063d0e0a243d4d8dba1.jpg"
    },
    {
      name: "2",
      imageUrl: "https://pic.imgdb.cn/item/67481073d0e0a243d4d8dc1b.png"
    },
    {
      name: "3",
      imageUrl: "https://pic.imgdb.cn/item/67481087d0e0a243d4d8dc90.png"
    },
    {
      name: "4",
      imageUrl: "https://pic.imgdb.cn/item/67481094d0e0a243d4d8dcf5.jpg"
    },
    {
      name: "5",
      imageUrl: "https://pic.imgdb.cn/item/674810a2d0e0a243d4d8dd49.jpg"
    },
    {
      name: "6",
      imageUrl: "https://pic.imgdb.cn/item/674810abd0e0a243d4d8dd93.png"
    },
    {
      name: "7",
      imageUrl: "https://pic.imgdb.cn/item/674810b5d0e0a243d4d8dddf.jpg"
    },
    {
      name: "8",
      imageUrl: "https://pic.imgdb.cn/item/674810c6d0e0a243d4d8de3f.jpg"
    },
    {
      name: "9",
      imageUrl: "https://pic.imgdb.cn/item/674810d5d0e0a243d4d8dea3.jpg"
    },
    {
      name: "10",
      imageUrl: "https://pic.imgdb.cn/item/674810efd0e0a243d4d8df55.jpg"
    }
]
const operators = [
    {
      name: "+",
      imageUrl: "https://pic.imgdb.cn/item/67484cb2d0e0a243d4da2acb.jpg"
    },
    {
      name: "-",
      imageUrl: "https://pic.imgdb.cn/item/67484cbcd0e0a243d4da2af4.jpg"
    },
]
const equalUrl = 'https://pic.imgdb.cn/item/674825c9d0e0a243d4d94a66.jpg'
const circleUrl = 'https://pic.imgdb.cn/item/674829dfd0e0a243d4d95d20.png'
const watermelonUrl = 'https://pic.imgdb.cn/item/67480077d0e0a243d4d885d8.png'
const confirmUrl = 'https://pic.imgdb.cn/item/6748023bd0e0a243d4d88f35.jpg'

Page({
    data: {
      num1: 0,
      num2: 0,
      result: 0,
      operator: "+",
      titleUrl,
      imageData,
      numImage1: "",
      numImage2: "",
      operatorImage: "",
      equalUrl,
      circleUrl,
      watermelonUrl,
      confirmUrl,
    },
  
    onLoad() {
      this.generateMathProblem();
    },
  
    generateMathProblem() {
        let num1, num2, result, operator, operatorImage;
  
        operator = Math.random() > 0.5 ? "+" : "-";
        operatorImage = operator === "+" ? operators[0].imageUrl : operators[1].imageUrl;

        if (operator === "+") {
            num1 = Math.floor(Math.random() * 9) + 1;
            num2 = Math.floor(Math.random() * (10 - num1)) + 1;
        } else {
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * num1)+ 1;
        }
  
        this.setData({
            num1,
            num2,
            result,
            operator,
            numImage1: imageData[num1].imageUrl,
            numImage2: imageData[num2].imageUrl,
            operatorImage
        });
    },

    onChoose(event) {
        const index = event.currentTarget.dataset.index;
        const selectedImage = this.data.imageData[index].imageUrl;
        this.setData({
          circleUrl: selectedImage,
          result: index
        });
      }
  });