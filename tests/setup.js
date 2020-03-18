import { JSDOM } from 'jsdom';

// fixed jsdom miss
if (typeof window !== 'undefined') {
  const documentHTML = '<!doctype html><html><body</body></html>';
  global.document = new JSDOM(documentHTML); // 模拟 document 对象
  global.window = document.parentWindow; // 模拟 window 对象
}

global.requestAnimationFrame = global.requestAnimationFrame || function (cb) {  // 处理兼容 添加 requestAnimationFrame 动画函数
  return setTimeout(cb, 0);
};


// const Enzyme = require('enzyme');

// const Adapter = require('enzyme-adapter-react-16');

// Enzyme.configure({ adapter: new Adapter() }); // 为 enzyme 添加适配器，针对不同的react版本使用不同的适配器
