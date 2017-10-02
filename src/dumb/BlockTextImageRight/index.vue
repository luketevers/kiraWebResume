<template>
  <div class="backgroundRight">
    <div class="textRight">
      <div class="textAlignRight">
        <slot name='heading' class='headingRight'></slot>
        <slot name='body' class="bodyRight"></slot>
      </div>
    </div>
    <div class="imageContainerRight">
      <img :src="imageSrc" class="imageRight" />
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
.backgroundRight {
  background-color: #f1f1f1;
}
.textRight {
  color: #282828;
  text-align: center;
  height: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
}

.imageContainerRight {
    float: right;
    background-color: #f1f1f1;
}
@media (min-width:1440px) {
  .textRight {
    width: 50%;
    height: 450px;
    float: left;
  }
  .headingRight {
    font-size: 20px;
  }
  .bodyRight {

  }
  .imageContainerRight {
    width: 50%;
    height: 450px;
    float: right;
  }
  .imageContainerRight img {
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
