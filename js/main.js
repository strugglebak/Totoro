!function() {
  let cssCode = `
.nose {
  width: 30px;
  height: 10px;
  background: #5F5852;
  position: absolute;
  left: 50%;
  margin-left: -15px;
  top: 106px;
  border-radius: 30px/10px;
  z-index: 6;
}

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
  left: 7px;
  top: 7px;
}
.eye.left {
  left: 74px;
}
.eye.right {
  right: 74px;
}

.head {
  width: 126px;
  height: 75px;
  background: #A4978E;
  position: absolute;
  left: 50%;
  margin-left: -63px;
  top: 59px;
  z-index: 1;
  border-radius: 100px/60px;
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
.belly {
  width: 200px;
  height: 214px;
  background: #EFDCCB;
  position: absolute;
  top: 157px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px/107px;
  z-index: 6;
}
.bellyFiller {
  width: 194px;
  height: 63px;
  background: #A4978E;
  position: absolute;
  left: 50%;
  margin-left: -97px;
  top: 163px;
  z-index: 2;
}
.lowerLimb {
  width: 220px;
  height: 225px;
  position: absolute;
  top: 172px;
  left: 50%;
  margin-left: -110px;
  background: #a4978e;
  border-radius: 110px;
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
  position: absolute;
  top: 381px;
  background: #E1E7D3;
  left: 50%;
  margin-left: -62px;
  z-index: 999;
}

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

.hand {
  width: 38px;
  height: 104px;
  position: absolute;
  top: 192px;
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
  width: 30px;
  height: 14px;
  position: absolute;
  border-radius: 100px/50px;
  background: #89775A;
  z-index: 7;
}
.piebald::after {
  content: '';
  display: block;
  width: 44px;
  height: 30px;
  border-radius: 100px/80px;
  /*-webkit-border-radius: 100px/80px;*/
  position: absolute;
  top: 4px;
  left: -7px;
  background: #EFDCCB;
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

.ear-left {
  border: 15px solid transparent;
  border-bottom: 41px solid #A4978E;
  width: 0px;
  position: relative;
  top: -4px;
  left: 61px;
  transform: rotate(350deg);
}
.ear-left::after {
  content: '';
  display: block;
  border: 15px solid transparent;
  border-top: 10px solid #A4978E;
  position: absolute;
  top: 39px;
  left: -16px;
}
  .ear-right {
    border: 15px solid transparent;
    border-bottom: 41px solid #A4978E;
    width: 0px;
    position: relative;
    top: -62px;
    right: -162px;
    transform: rotate(11deg);
  }
  .ear-right::after {
    content: '';
    display: block;
    border: 15px solid transparent;
    border-top: 10px solid #A4978E;
    position: absolute;
    top: 39px;
    right: -16px;
  }

  .totoro {
    width: 255px;
    height: 80px;
    position: relative;
    top: 310px;
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
    top: 0;
    left: 70px;
    transform: rotate(5deg);
  }
  .to1::after {
    content: '';
    display: block;
    width: 33px;
    height: 18px;
    background: #A4978E;
    position: absolute;
    top: 20px;
    border-top-left-radius: 50% 60%;
    border-top-right-radius: 50% 60%;
    border-bottom-right-radius: 50% 40%;
    border-bottom-left-radius: 50% 40%;
  }
  .to2 {
    width: 18px;
    height: 66px;
    background: #A4978E;
    border-top-left-radius: 50% 60%;
    border-top-right-radius: 50% 60%;
    border-bottom-right-radius: 50% 40%;
    border-bottom-left-radius: 50% 40%;
    position: absolute;
    top: 0;
    left: 110px;
    transform: rotate(5deg);
  }
  .to2::after {
    content: '';
    display: block;
    width: 33px;
    height: 18px;
    background: #A4978E;
    position: absolute;
    top: 20px;
    border-top-left-radius: 50% 60%;
    border-top-right-radius: 50% 60%;
    border-bottom-right-radius: 50% 40%;
    border-bottom-left-radius: 50% 40%;
  }
  .ro {
    width: 43px;
    height: 43px;
    border-radius: 12px;
    background: #A4978E;
    transform: rotate(5deg);
    position: absolute;
    top: 21px;
    left: 150px;
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
  `;

  let content = document.querySelector('#cssCode');
  let styleTag = document.querySelector('#styleTag');

  let n = 0;
  let id = setInterval(()=> {
    n += 1;
    content.innerHTML = cssCode.substring(0, n);
    styleTag.innerHTML = cssCode.substring(0, n);
    if (n >= cssCode.length) {
      window.clearInterval(id);
    }
  }, 100);

}.call();
