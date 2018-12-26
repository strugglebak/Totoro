!function() {
  let cssCode = `
  /* 首先需要画个背景 */
  .preview {
    background: #E1E7d3;
  }

  /* 然后是鼻子 */
  .nose {
    width: 30px;
    height: 10px;
    background: #5F5852;
    border-radius: 30px/10px;
    position: absolute;
    top: 106px;
    left: 50%;
    margin-left: -15px;
    z-index: 6;
  }

  /* 再画个眼镜吧 */
  .eye {
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 95px;
    z-index: 6;
  }
  .eye::after {
    content: '';
    display: block;
    width: 9px;
    height: 9px;
    background: #5A534E;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    left: 7px;
  }
  /* 看，往左! */
  .eye.left {
    left: 74px;
  }
  /* 看，往右! */
  .eye.right {
    right: 74px;
  }

  /* 然后画这个苯苯的龙猫的头 */
  .head {
    width: 126px;
    height: 75px;
    background: #A4978E;
    border-radius: 100px/60px;
    position: absolute;
    top: 59px;
    left: 50%;
    margin-left: -63px;
    z-index: 1;
  }
  .bodyFiller {
    width: 130px;
    height: 56px;
    background: #A4978E;
    position: absolute;
    top: 107px;
    left: 50%;
    margin-left: -65px;
    z-index: 2;
  }
  /* 圆圆的肚皮... */
  .belly {
    width: 200px;
    height: 214px;
    background: #EFDCCB;
    border-radius: 100px/107px;
    position: absolute;
    top: 157px;
    left: 50%;
    margin-left: -100px;
    z-index: 6;
  }
  .bellyFiller {
    width: 194px;
    height: 63px;
    background: #A4978E;
    position: absolute;
    left: 50%;
    top: 163px;
    margin-left: -97px;
    z-index: 2;
  }
  /*恩... 下肢唉，有点难画呢... */
  .lowerLimb {
    width: 220px;
    height: 225px;
    background: #a4978e;
    border-radius: 110px;
    position: absolute;
    top: 172px;
    left: 50%;
    margin-left: -110px;
    z-index: 1;
  }
  .prune > .pruneLowerLimb {
    width: 8px;
    height: 18px;
    background: #E1E7D3;
    position: absolute;
    top: 378px;
    left: 50%;
    margin-left: -4px;
    z-index: 999;
    transform: rotate(45deg);
  }
  .prune > .pruneFeet {
    width: 124px;
    height: 20px;
    background: #E1E7D3;
    position: absolute;
    top: 381px;
    left: 50%;
    margin-left: -62px;
    z-index: 999;
  }

  /*啊，终于到上肢了,耶!!!*/
  .arm {
    width: 35px;
    height: 131px;
    background: #A4978E;
    position: absolute;
    top: 83px;
    z-index: 4;
  }
  .arm.left {
    left: 37px;
    transform: rotate(27deg);
  }
  .arm.right {
    right: 37px;
    transform: rotate(-27deg);
  }

  /* 好了现在开始画个手手手~~~ */
  .hand {
    width: 38px;
    height: 104px;
    background: #A4978E;
    border-radius: 40px/100px;
    position: absolute;
    top: 192px;
    z-index: 3;
  }
  .hand.left {
    left: 0;
  }
  .hand.right {
    right: 0;
  }

  /* 然后是这只傻呼呼龙猫的花斑，额
   * 这个应该是它的花斑吧...
   * */
  .piebald {
    width: 30px;
    height: 14px;
    background: #89775A;
    border-radius: 100px/50px;
    position: absolute;
    top: 180px;
    left: 50%;
    margin-left: -15px;
    z-index: 7;
  }
  .piebald::after {
    content: '';
    display: block;
    width: 44px;
    height: 30px;
    background: #EFDCCB;
    border-radius: 100px/80px;
    position: absolute;
    top: 4px;
    left: -7px;
  }
  .piebald.spots1 {
    top: 180px;
    left: 50%;
    margin-left: -15px;
  }
  .piebald.spots2 {
    top: 185px;
    left: 73px;
    transform: rotate(350deg);
  }
  .piebald.spots3 {
    top: 185px;
    right: 73px;
    transform: rotate(-350deg);
  }
  .piebald.spots4 {
    top: 215px;
    left: 51px;
    transform: rotate(345deg);
  }
  .piebald.spots5 {
    top: 209px;
    left: 91px;
  }
  .piebald.spots6 {
    top: 209px;
    right: 91px;
  }
  .piebald.spots7 {
    top: 215px;
    right: 51px;
    transform: rotate(-345deg);
  }

  /* 好多花斑终于!! 画完了!
   * 现在开始画耳朵!!!
   * 哦错了是耳根 = = !!
   * */
  .earRoot {
    width: 9px;
    height: 25px;
    background: #A4978E;
    position: absolute;
    top: 55px;
  }
  .earRoot.left {
    left: 80px;
    transform: rotate(348deg);
  }
  .earRoot.right {
    right: 80px;
    transform: rotate(-348deg);
  }

  /* 好了现在是正儿八经的耳朵时间....*/
  .ear-left {
    border: 15px solid transparent;
    border-bottom: 41px solid #A4978E;
    transform: rotate(350deg);
    position: absolute;
    top: -5px;
    left: 60px;
  }
  .ear-left::after {
    content: '';
    display: block;
    border: 15px solid transparent;
    border-top: 10px solid #A4978E;
    position: absolute;
    top: 39px;
    left: -15px;
  }
  .ear-right {
    border: 15px solid transparent;
    border-bottom: 41px solid #A4978E;
    transform: rotate(-350deg);
    position: absolute;
    top: -5px;
    right: 60px;
  }
  .ear-right::after {
    content: '';
    display: block;
    border: 15px solid transparent;
    border-top: 10px solid #A4978E;
    position: absolute;
    top: 39px;
    right: -15px;
  }

  /* 接下来你猜是啥？
   * 当然是重头戏(雾..)
   * 其实就是 totoro 啦
   * */
  .totoro {
    width: 255px;
    height: 80px;
    position: absolute;
    top: 400px;
    }
    .to1 {
        width: 18px;
        height: 66px;
        background: #A4978E;
        border-top-left-radius: 50% 60%;
        border-top-right-radius: 50% 60%;
        border-bottom-right-radius: 50% 40%;
        border-bottom-left-radius: 50% 40%;
        position: absolute;
        top: 0px;
        left: 70px;
        transform: rotate(5deg);
      }
    .to1::after {
        content: '';
        display: block;
        width: 33px;
        height: 18px;
        background: #A4978E;
        border-top-left-radius: 50% 60%;
        border-top-right-radius: 50% 60%;
        border-bottom-right-radius: 50% 40%;
        border-bottom-left-radius: 50% 40%;
        position: absolute;
        top: 20px;
      }
    .to2 {
        width: 18px;
        height: 66px;
        background: #A4978E;
        border-top-left-radius: 50% 60%;
        border-top-right-radius: 50% 60%;
        border-bottom-right-radius: 50% 40%;
        border-bottom-left-radius: 50% 40%;
        transform: rotate(5deg);
        position: absolute;
        top: 0;
        left: 110px;
      }
    .to2::after {
        content: '';
        display: block;
        width: 33px;
        height: 18px;
        background: #A4978E;
        border-top-left-radius: 50% 60%;
        border-top-right-radius: 50% 60%;
        border-bottom-right-radius: 50% 40%;
        border-bottom-left-radius: 50% 40%;
        position: absolute;
        top: 20px;
      }
    .ro {
        width: 43px;
        height: 43px;
        border-radius: 12px;
        background: #A4978E;
        position: absolute;
        top: 21px;
        left: 150px;
        transform: rotate(5deg);
      }
    .ro::after {
        content: '';
        display: block;
        width: 22px;
        height: 17px;
        background: #E1E7d3;
        border-radius: 5px;
        position: absolute;
        top: 13px;
        left: 11px;
      }

    /* 终于画完啦，这只 totoro 龙猫就送给你吧
     * ^.^
     * */
  `;

  let content = document.querySelector('#cssCode');
  let styleTag = document.querySelector('#styleTag');

  let n = 0;
  let id = setInterval(()=> {
    n += 1;
    content.innerHTML = cssCode.substring(0, n);
    styleTag.innerHTML = cssCode.substring(0, n);
    // 使其自动往下滚动
    content.scrollTop = content.scrollHeight;
    if (n >= cssCode.length) {
      window.clearInterval(id);
    }
  }, 50);

}.call();

