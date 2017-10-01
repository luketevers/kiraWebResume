<template>
  <div class='bannerContainer'>
    <div class="headShot">
      <img class="headShotImg" :src="iconSrc">
    </div>
    <div class="textBox">
      <div class="textAlign">
        <h1 class="bannerText">
          <slot name='bannerText'>
          </slot>
        </h1>
        <h2 class="bannerSubText">
          <slot name='subText'>
          </slot>
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import logoIcon from '../../assets/kiralogo.svg'
export default {
  props: {
    iconSrc: {
      type: String,
      default: logoIcon
    },
    myHref: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
@media (min-width: 1440px) {
  .bannerContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .headShot {
    height: 450px;
    display: inline-block;
    width: 25%;
  }
  .headShotImg {
    height: 100%;
  }
  .textBox {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    width: 75%;
    padding-left: 10%;
    height: 450px;
    vertical-align: middle;
  }
  .bannerText {
    font-size: 100px;
    color: #282828;
    text-transform: uppercase;
  }
  .bannerSubText {
    font-size: 50px;
    color: #282828;
    padding: 0px;
    margin-bottom: 20px;
  }
}
</style>
