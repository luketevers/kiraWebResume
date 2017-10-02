<template>
  <div class="background">
    <div class="text">
      <div class="textAlign">
        <slot name='heading' class='heading'></slot>
        <slot name='body' class="body"></slot>
      </div>
    </div>
    <div class="imageContainer">
      <img :src="imageSrc" class="image" />
    </div>
  </div>
</template>
<script>
import stockImage from '../../assets/kiralogo.png'

export default {
  props: {
    imageSrc: {
      type: String,
      default: stockImage
    }
  }
}
</script>
<style>
.background {
  background-color: #282828;
}
.text {
  color: #f1f1f1;
  text-align: center;
  height: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282828;
}

.imageContainer {
    float: left;
    background-color: #282828;
}
@media (min-width:1440px) {
  .text {
    width: 50%;
    height: 450px;
    float: right;
  }
  .heading {
    font-size: 20px;
  }
  .body {

  }
  .imageContainer {
    width: 50%;
    height: 450px;
    float: left;
  }
  .imageContainer img {
    height: 400px;
    margin: 25px auto;
    display: block;
  }
}
@media (min-width:1024px) and (max-width:1439px) {

}
@media (min-width:768px) and (max-width:1023px) {

}
@media (min-width:320px) and (max-width:767px) {

}
</style>
