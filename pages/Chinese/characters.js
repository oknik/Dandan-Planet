// pages/Chinese/characters.js
import cnchar from 'cnchar';
import draw from 'cnchar-draw';

cnchar.use(draw);

Page({
  data: {
    activeKey: 0, // 左侧分类选中项，0: 全部, 1: 已学习, 2: 未学习
    selectedCategory: '启蒙', // 当前选择的分类
    characters: [], // 筛选后的汉字
    allCharacters: [ // 所有汉字数据
      { char: '人', category: '启蒙', learned: false },
      { char: '一', category: '启蒙', learned: false },
      { char: '二', category: '启蒙', learned: false },
      { char: '大', category: '启蒙', learned: false },
      { char: '小', category: '启蒙', learned: false },
      { char: '山', category: '启蒙', learned: false },
      { char: '水', category: '启蒙', learned: false },
      { char: '火', category: '启蒙', learned: false },
      { char: '木', category: '基础', learned: true },
      { char: '田', category: '基础', learned: false },
      { char: '日', category: '基础', learned: false },
      { char: '月', category: '基础', learned: false },
      { char: '云', category: '基础', learned: false },
      { char: '雨', category: '基础', learned: false },
      { char: '花', category: '基础', learned: false },
      { char: '果', category: '基础', learned: false },
      { char: '家', category: '拓展', learned: false },
      { char: '园', category: '拓展', learned: false },
      { char: '学', category: '拓展', learned: false },
      { char: '朋', category: '拓展', learned: false },
      { char: '友', category: '拓展', learned: false },
      { char: '老', category: '拓展', learned: false },
      { char: '师', category: '拓展', learned: false },
      { char: '爱', category: '拓展', learned: false },
    ],
  },

  onLoad() {
    // 默认展示启蒙分类的所有汉字
    this.initCharacters();
    this.filterCharacters();
  },

  initCharacters() {
    const query = wx.createSelectorQuery();
    
    const { characters } = this.data;
    characters.forEach((item, index) => {
      const canvasId = `char-${index}`;
      query
        .select(`#${canvasId}`)
        .node((res) => {
          if (res && res.node) {
            cnchar.draw(item.char, {
              el: res.node, // 使用 canvas 节点
              type: 'normal',
              style: {
                outlineColor: '#ddd',
                strokeColor: '#333',
              },
            });
          }
        })
        .exec();
    });
  },

  filterCharacters() {
    const { allCharacters, selectedCategory, activeKey } = this.data;
    let filtered = allCharacters.filter((item) => item.category === selectedCategory);

    if (activeKey === 1) filtered = filtered.filter((item) => item.learned); // 已学习
    if (activeKey === 2) filtered = filtered.filter((item) => !item.learned); // 未学习

    this.setData({ characters: filtered });
  },

  selectCategory(event) {
    // 顶部分类切换
    const category = event.currentTarget.dataset.category;
    this.setData({ selectedCategory: category }, this.filterCharacters);
  },

  onCharacterTap(event) {
    console.log(event.currentTarget.dataset.char); // 检查是否输出正确的汉字
    const char = event.currentTarget.dataset.char;
    if (char) {
      wx.navigateTo({
        url: `/pages/learnCharacter/learnCharacter?character=${char}`,
      });
    } else {
      wx.showToast({
        title: '未能获取汉字信息',
        icon: 'none',
      });
    }
  },

  onClickLeft() {
    wx.navigateTo({
      url: '/pages/dashboard/dashboard'
    })
  },

  onChange(event) {
    // 左侧状态切换（全部、已学习、未学习）
    this.setData({ activeKey: event.detail }, this.filterCharacters);
  },
})