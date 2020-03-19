<h1 align="center">Parabola js</h1>





![test](https://github.com/Kshao123/parabolaJs/workflows/test/badge.svg?event=push) [![CircleCI branch](https://circleci.com/gh/Kshao123/parabolaJs.svg)](https://circleci.com/gh/Kshao123/parabolaJs) [![Total alerts](https://img.shields.io/lgtm/alerts/g/Kshao123/parabolaJs.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Kshao123/parabolaJs/alerts/) [![codecov](https://codecov.io/gh/Kshao123/parabolaJs/branch/master/graph/badge.svg)](https://codecov.io/gh/Kshao123/parabolaJs) [![Dependencies](https://img.shields.io/david/Kshao123/parabolaJs.svg?style=flat-square)](https://david-dm.org/Kshao123/parabolaJs) [![DevDependencies](https://img.shields.io/david/dev/Kshao123/parabolaJs.svg?style=flat-square)](https://david-dm.org/Kshao123/parabolaJs?type=dev) [![Issues need help](https://flat.badgen.net/github/label-issues/Kshao123/parabolaJs/help%20wanted/open)](https://github.com/Kshao123/parabolaJs/issues?q=is%3Aissue+is%3Aopen) 





## 🖥 Environment Support


| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| IE8+, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📦 Install

```bash
npm install parabola-js
```

```bash
yarn add parabola-js
```

## 参数

> 源自 zhangxinxu(.com)
> http://www.zhangxinxu.com/wordpress/?p=3855，做了些许更改

| param      | type           |
|------------|----------------|
| element       | Node |
| target       | Node |
| options?       | object |


| options      | type           | default | description    |
|------------|----------------|---------|----------------|
| speed       | number | `166.67` | A每帧移动的像素大小，每帧（对于大部分显示屏）大约16~17毫秒
| curvature       | number | `0.001` | 曲率， 实际指焦点到准线的距离，你可以抽象成曲率，这里模拟扔物体的抛物线，因此是开口向下的
| endScale       | string | `1` | 缩放



## 🔨 抛物线

```diff
import React, { Component, createRef } from 'react';
import Parabola from 'parabola-js'
import styles from './pjs.less';

class ParabolaDemo extends Component {
  constructor() {
    super();
    this.wrap = createRef();
    this.item1 = createRef();
    this.item2 = createRef();
  }

  handleClick = e => {
    const rect = this.wrap.current.getBoundingClientRect();
    const diffX = e.clientX - rect.left + this.wrap.current.scrollLeft;
    const diffY = e.clientY - rect.top + this.wrap.current.scrollLeft;
    this.item2.current.style.left = diffX + 'px';
    this.item2.current.style.top = diffY + 'px';
    
+   new Parabola(this.item1.current, this.item2.current).init()
  }

  render() {
    return (
      <div>
        抛物线测试
        <hr/>
        <div ref={this.wrap} className={styles.wrap} onClick={this.handleClick}>
          <div ref={this.item1} className={styles.item1} />
          <div ref={this.item2} className={styles.item2} />
        </div>
      </div>
    )
  }
}

export default ParabolaDemo;
```

## 🔨 购物车demo

> by zhangxinxu(.com)
> https://www.zhangxinxu.com/study/201312/js-parabola-shopping.html

## 🔗 Links

- [抛物线 demo](http://ksh7.com/)
- [blog](https://ksh7.com/)
