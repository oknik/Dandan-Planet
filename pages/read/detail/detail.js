const audioBaseUrl='/static/read'
const audioReadUrl=`${audioBaseUrl}/read.mp3`
const {audioPlayer}=require('../../../utils/playaudio.js');
const chineseBookData = [
    {
        id: 1,
        name: '水果跑啊跑',
        url: 'https://pic.imgdb.cn/item/675557aed0e0a243d4dfed34.jpg',
        titleUrl: 'https://pic.imgdb.cn/item/675567d8d0e0a243d4dff819.png',
        audioUrl:`${audioBaseUrl}/fruit.mp3`,
        contentUrl: [
            {
                id: 1,
                url: "https://pic.imgdb.cn/item/67555fb8d0e0a243d4dff3b1.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/ca/ca627759aa30bc49995400041e224eca.mp3"
            },
            {
                id: 2,
                url: "https://pic.imgdb.cn/item/67555fc0d0e0a243d4dff3bc.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/2a/2a6f6a88efa49b5bf9ace68ef6b68dfd.mp3"
            },
            {
                id: 3,
                url: "https://pic.imgdb.cn/item/67555fccd0e0a243d4dff3c4.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/19/197f2089682c149c344ecdd5e6ef02f7.mp3"
            },
            {
                id: 4,
                url: "https://pic.imgdb.cn/item/67555fd3d0e0a243d4dff3ca.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/dc/dcf6c5baa1944ab03443c30fb8fb62d0.mp3"
            },
            {
                id: 5,
                url: "https://pic.imgdb.cn/item/67555fe2d0e0a243d4dff3cf.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/c4/c45f6c684f678d463e2fbb07579af453.mp3"
            },
            {
                id: 6,
                url: "https://pic.imgdb.cn/item/67555ff3d0e0a243d4dff3dc.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/48/48c1f7131178a467cedef5b8a7f0bd4e.mp3"
            },
            {
                id: 7,
                url: "https://pic.imgdb.cn/item/6755600fd0e0a243d4dff3ec.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/7b/7b7da225a162c9086934462b518723b0.mp3"
            },
            {
                id: 8,
                url: "https://pic.imgdb.cn/item/67556019d0e0a243d4dff3f1.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/23/23e02f1417dc2c3cc7494287bf2ee93e.mp3"
            },
            {
                id: 9,
                url: "https://pic.imgdb.cn/item/67556020d0e0a243d4dff3f6.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/b3/b3cd5cea241af335b64f0db7d0964a2f.mp3"
            },
            {
                id: 10,
                url: "https://pic.imgdb.cn/item/67556040d0e0a243d4dff406.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/d8/d8a6fa9f5bab3eb3372c588424765972.mp3"
            },
            {
                id: 11,
                url: "https://pic.imgdb.cn/item/67556047d0e0a243d4dff409.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/fe/feb8962d844d470a4d9ef30ee37e85ff.mp3"
            }
        ]
    },
    {   
        id: 2,
        name: '我要骑大马',
        url: 'https://pic.imgdb.cn/item/67545d13d0e0a243d4dfcd7f.jpg',
        titleUrl: 'https://pic.imgdb.cn/item/67556705d0e0a243d4dff7ea.png',
        audioUrl:`${audioBaseUrl}/horse.mp3`,
        contentUrl: [
            {
                id: 1,
                url: "https://pic.imgdb.cn/item/67556723d0e0a243d4dff7f1.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/58/58d4bd97a845471c95d7d06d646e6b02.mp3"
            },
            {
                id: 2,
                url: "https://pic.imgdb.cn/item/6755672bd0e0a243d4dff7f3.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/f2/f2daf040dc45f266a5b233b330f0402e.mp3"
            },
            {
                id: 3,
                url: "https://pic.imgdb.cn/item/67556731d0e0a243d4dff7f5.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/bd/bd62c1dc945c493bb23934c4e8bea2d3.mp3"
            },
            {
                id: 4,
                url: "https://pic.imgdb.cn/item/67556736d0e0a243d4dff7f6.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/4c/4cb1c611dc3f32749aa1fe74bd3e5773.mp3"
            },
            {
                id: 5,
                url: "https://pic.imgdb.cn/item/6755673cd0e0a243d4dff7f7.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/1c/1c60772b5eddc2e2ea7a55b7e2390b4a.mp3"
            },
            {
                id: 6,
                url: "https://pic.imgdb.cn/item/67556742d0e0a243d4dff7f8.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/85/85f93c6df53bf57da6686e86966d3e30.mp3"
            },
            {
                id: 7,
                url: "https://pic.imgdb.cn/item/6755674ad0e0a243d4dff7fb.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/5c/5c18b9ceee2fa038793e25414776b470.mp3"
            },
            {
                id: 8,
                url: "https://pic.imgdb.cn/item/67556753d0e0a243d4dff7fc.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/e3/e3896e0fe1a4c993b7e4e08b21aebd05.mp3"
            },
            {
                id: 9,
                url: "https://pic.imgdb.cn/item/67556759d0e0a243d4dff7fe.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/05/05dedb01ca17f91d6e6fcff88ad84d75.mp3"
            },
            {
                id: 10,
                url: "https://pic.imgdb.cn/item/6755675fd0e0a243d4dff800.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/42/425ba629357f1fa0c50bee0c3d66e4ff.mp3"
            },
            {
                id: 11,
                url: "https://pic.imgdb.cn/item/67556766d0e0a243d4dff802.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/b6/b6d7ad87b80443917fe948a75a2ecf43.mp3"
            }
        ]
    },
]
const englishBookData = [
    {
        id: 3,
        name: 'Mike helps out',
        url: 'https://pic.imgdb.cn/item/67546012d0e0a243d4dfce04.jpg',
        titleUrl: 'https://pic.imgdb.cn/item/67554e1bd0e0a243d4dfe7e3.png',
        audioUrl:`${audioBaseUrl}/mike.mp3`,
        contentUrl: [
            {
                id: 1,
                url: "https://pic.imgdb.cn/item/67554d0fd0e0a243d4dfe791.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/41/79/dfe458b4-35d1-4908-a6f3-9376385ce5ec.mp3"
            },
            {
                id: 2,
                url: "https://pic.imgdb.cn/item/67554d1ed0e0a243d4dfe795.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/bb/7f/a94bbe1d-a76b-4fcc-b529-e27097e41735.mp3"
            },
            {
                id: 3,
                url: "https://pic.imgdb.cn/item/67554d24d0e0a243d4dfe799.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/d0/57/a85cffd4-05ef-45fc-b9d2-b9043e42c852.mp3"
            },
            {
                id: 4,
                url: "https://pic.imgdb.cn/item/67554d2bd0e0a243d4dfe79a.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/10/31/8f5e3c74-8c65-4ce3-a225-79afd907dc8a.mp3"
            },
            {
                id: 5,
                url: "https://pic.imgdb.cn/item/67554d32d0e0a243d4dfe79c.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/ac/8d/9e4c4a03-5694-4a58-b0d7-2c636b681987.mp3"
            },
            {
                id: 6,
                url: "https://pic.imgdb.cn/item/67554d38d0e0a243d4dfe79e.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/00/c2/5066ae47-1f05-4b70-a565-f88bedb4dedd.mp3"
            },
            {
                id: 7,
                url: "https://pic.imgdb.cn/item/67554d40d0e0a243d4dfe79f.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/f9/48/c7eed3fe-b038-4fd9-9faa-020606338716.mp3"
            },
        ]
    },
    {   
        id: 4,
        name: 'Splat',
        url: 'https://pic.imgdb.cn/item/6754648cd0e0a243d4dfcf1f.png',
        titleUrl: 'https://pic.imgdb.cn/item/67554e6fd0e0a243d4dfe808.png',
        audioUrl:`${audioBaseUrl}/splat.mp3`,
        contentUrl: [
            {
                id: 1,
                url: "https://pic.imgdb.cn/item/675466c5d0e0a243d4dfcf92.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/e4/5e/b3c53388-3291-4720-92c8-092e19f4c860.mp3"
            },
            {
                id: 2,
                url: "https://pic.imgdb.cn/item/675466d1d0e0a243d4dfcf95.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/f3/12/7b21f127-42b9-4a90-90b3-7c50a543a0d8.mp3"
            },
            {
                id: 3,
                url: "https://pic.imgdb.cn/item/675466dcd0e0a243d4dfcf96.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/c3/6d/5c8a513e-b707-4636-a605-29528c8d5516.mp3"
            },
            {
                id: 4,
                url: "https://pic.imgdb.cn/item/675466e6d0e0a243d4dfcf98.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/d8/36/f0c389aa-fcc3-4697-a19a-c9dafdb318a3.mp3"
            },
            {
                id: 5,
                url: "https://pic.imgdb.cn/item/675466f1d0e0a243d4dfcf99.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/1e/d8/c861723b-d6b1-4b9f-9f35-ba015a8c786f.mp3"
            },
            {
                id: 6,
                url: "https://pic.imgdb.cn/item/675466f9d0e0a243d4dfcfa4.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/e1/0b/decef66b-b370-4105-956d-224136d35f27.mp3"
            },
            {
                id: 7,
                url: "https://pic.imgdb.cn/item/67546702d0e0a243d4dfcfbc.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/83/c0/9a137886-d6c5-4210-a129-d0fb875425fd.mp3"
            },
            {
                id: 8,
                url: "https://pic.imgdb.cn/item/6754670bd0e0a243d4dfcfc1.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/e9/a6/e36b551d-3adc-415c-be67-4d78c547f9df.mp3"
            },
            {
                id: 9,
                url: "https://pic.imgdb.cn/item/67546722d0e0a243d4dfcfc3.jpg",
                audio: "https://image.limaogushi.com/file/picture-books/audio/c9/60/a22e37b9-8b10-4425-b6d4-fea836e745f4.mp3"
            }
        ]
    },
]

Page({
    data: {
      itemId: '',
      titleUrl: '',
      contentUrl: [],
    },
  
    onLoad: function(options) {
      const id = options.id;
      this.setData({
        itemId: id
      });

      const titleData = this.getTitle(id);
      const contentData = this.getContent(id);
      const audioData = this.getAudio(id);
      this.setData({
        titleUrl: titleData,
        contentUrl: contentData,
        audioUrl:audioData
      });
      audioPlayer([audioData,audioReadUrl]);
    },
    
    getTitle: function(id) {
        const chineseBook = chineseBookData.find(item => item.id === parseInt(id));
        const englishBook = englishBookData.find(item => item.id === parseInt(id));
        if (chineseBook) {
            return chineseBook.titleUrl;
        } else if (englishBook) {
            return englishBook.titleUrl;
        }
    },

    getContent: function(id) {
        const chineseBook = chineseBookData.find(item => item.id === parseInt(id));
        const englishBook = englishBookData.find(item => item.id === parseInt(id));
        if (chineseBook) {
            return chineseBook.contentUrl;
        } else if (englishBook) {
            return englishBook.contentUrl;
        }
    },
    getAudio: function(id) {
      const chineseBook = chineseBookData.find(item => item.id === parseInt(id));
      const englishBook = englishBookData.find(item => item.id === parseInt(id));
      if (chineseBook) {
          return chineseBook.audioUrl;
      } else if (englishBook) {
          return englishBook.audioUrl;
      }
  },

    playAudio: function (e) {
        const audioUrl = e.currentTarget.dataset.audio;
        const innerAudioContext = wx.createInnerAudioContext();
        innerAudioContext.src = audioUrl;
        innerAudioContext.play();
        innerAudioContext.onError((res) => {
          console.error('音频播放错误:', res.errMsg);
        });
      },
});