<template>
  <div class="imageContainer">
    <img :src="imageSrc" class="image" />
  </div>
</template>
<script>
import stockImage from '../../assets/kiralogo.jpg'

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
.imageContainer {
  height: 450px;
}
.image {
  height: 450px;
}
@media (min-width:1440px) {

}
@media (min-width:1024px) and (max-width:1439px) {

}
@media (min-width:768px) and (max-width:1023px) {

}
@media (min-width:320px) and (max-width:767px) {

}
</style>
