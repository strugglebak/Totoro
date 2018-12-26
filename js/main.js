!function() {
  let cssCode = `
  .preview {
    background: #E1E7d3;
  }

  .nose {
    position: absolute;
    top: 106px;
    left: 50%;

    width: 30px;
    height: 10px;
    background: #5F5852;
    border-radius: 30px/10px;

    margin-left: -15px;
    z-index: 6;
  }

  .eye {
    position: absolute;
    top: 95px;

    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 50%;
    z-index: 6;
  }
  .eye::after {
    position: absolute;
    top: 7px;
    left: 7px;

    content: '';
    display: block;
    width: 9px;
    height: 9px;
    background: #5A534E;
    border-radius: 50%;
  }
  .eye.left {
    left: 74px;
  }
  .eye.right {
    right: 74px;
  }

  .head {
    position: absolute;
    top: 59px;
    left: 50%;

    width: 126px;
    height: 75px;
    background: #A4978E;
    border-radius: 100px/60px;

    margin-left: -63px;
    z-index: 1;
  }
  .bodyFiller {
    position: absolute;
    top: 107px;
    left: 50%;

    width: 130px;
    height: 56px;
    background: #A4978E;

    margin-left: -65px;
    z-index: 2;
  }
  .belly {
    position: absolute;
    top: 157px;
    left: 50%;

    width: 200px;
    height: 214px;
    background: #EFDCCB;
    border-radius: 100px/107px;

    margin-left: -100px;
    z-index: 6;
  }
  .bellyFiller {
    position: absolute;
    left: 50%;
    top: 163px;

    width: 194px;
    height: 63px;
    background: #A4978E;

    margin-left: -97px;
    z-index: 2;
  }
  .lowerLimb {
    position: absolute;
    top: 172px;
    left: 50%;

    width: 220px;
    height: 225px;
    background: #a4978e;
    border-radius: 110px;

    margin-left: -110px;
    z-index: 1;
  }
  .prune > .pruneLowerLimb {
    position: absolute;
    top: 378px;
    left: 50%;

    width: 8px;
    height: 18px;
    background: #E1E7D3;

    margin-left: -4px;
    z-index: 999;
    transform: rotate(45deg);
  }
  .prune > .pruneFeet {
    position: absolute;
    top: 381px;
    left: 50%;

    width: 124px;
    height: 20px;
    background: #E1E7D3;

    margin-left: -62px;
    z-index: 999;
  }

  .arm {
    position: absolute;
    top: 83px;

    width: 35px;
    height: 131px;
    background: #A4978E;

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

  .hand {
    position: absolute;
    top: 192px;

    width: 38px;
    height: 104px;
    background: #A4978E;
    border-radius: 40px/100px;

    z-index: 3;
  }
  .hand.left {
    left: 0;
  }
  .hand.right {
    right: 0;
  }

  .piebald {
    position: absolute;
    top: 180px;
    left: 50%;
    margin-left: -15px;

    width: 30px;
    height: 14px;
    background: #89775A;
    border-radius: 100px/50px;

    z-index: 7;
  }
  .piebald::after {
    position: absolute;
    top: 4px;
    left: -7px;

    content: '';
    display: block;
    width: 44px;
    height: 30px;
    background: #EFDCCB;
    border-radius: 100px/80px;
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

  .earRoot {
    position: absolute;
    top: 55px;

    width: 9px;
    height: 25px;
    background: #A4978E;
  }
  .earRoot.left {
    left: 80px;
    transform: rotate(348deg);
  }
  .earRoot.right {
    right: 80px;
    transform: rotate(-348deg);
  }

  .ear-left {
    position: absolute;
    top: -5px;
    left: 60px;

    border: 15px solid transparent;
    border-bottom: 41px solid #A4978E;
    transform: rotate(350deg);
  }
  .ear-left::after {
    position: absolute;
    top: 39px;
    left: -15px;

    content: '';
    display: block;
    border: 15px solid transparent;
    border-top: 10px solid #A4978E;
  }

  .ear-right {
      position: absolute;
      top: -5px;
      right: 60px;

      border: 15px solid transparent;
      border-bottom: 41px solid #A4978E;
      transform: rotate(-350deg);
  }
  .ear-right::after {
    position: absolute;
    top: 39px;
    right: -15px;

    content: '';
    display: block;
    border: 15px solid transparent;
    border-top: 10px solid #A4978E;
  }

  .totoro {
    position: absolute;
    top: 400px;

    width: 255px;
    height: 80px;
    }
    .to1 {
        position: absolute;
        top: 0px;
        left: 70px;

        width: 18px;
        height: 66px;
        background: #A4978E;
        border-top-left-radius: 50% 60%;
        border-top-right-radius: 50% 60%;
        border-bottom-right-radius: 50% 40%;
        border-bottom-left-radius: 50% 40%;
        transform: rotate(5deg);
      }
    .to1::after {
        position: absolute;
        top: 20px;

        content: '';
        display: block;
        width: 33px;
        height: 18px;
        background: #A4978E;
        border-top-left-radius: 50% 60%;
        border-top-right-radius: 50% 60%;
        border-bottom-right-radius: 50% 40%;
        border-bottom-left-radius: 50% 40%;
      }
    .to2 {
        position: absolute;
        top: 0;
        left: 110px;

        width: 18px;
        height: 66px;
        background: #A4978E;
        border-top-left-radius: 50% 60%;
        border-top-right-radius: 50% 60%;
        border-bottom-right-radius: 50% 40%;
        border-bottom-left-radius: 50% 40%;
        transform: rotate(5deg);
      }
    .to2::after {
        position: absolute;
        top: 20px;

        content: '';
        display: block;
        width: 33px;
        height: 18px;
        background: #A4978E;
        border-top-left-radius: 50% 60%;
        border-top-right-radius: 50% 60%;
        border-bottom-right-radius: 50% 40%;
        border-bottom-left-radius: 50% 40%;
      }
    .ro {
        position: absolute;
        top: 21px;
        left: 150px;

        width: 43px;
        height: 43px;
        border-radius: 12px;
        background: #A4978E;
        transform: rotate(5deg);
      }
    .ro::after {
        position: absolute;
        top: 13px;
        left: 11px;

        content: '';
        display: block;
        width: 22px;
        height: 17px;
        background: #E1E7d3;
        border-radius: 5px;
      }
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

