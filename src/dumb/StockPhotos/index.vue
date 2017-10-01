<template>
  <div class="imageContainer">
    <img :src="imageSrc" class="image" />
  </div>
</template>
<script>
import stockImage from '../../assets/stockimage.jpg';

export default {
  props: {
    imageSrc: {
      type: String,
      default: stockImage,
    },
  },
  data: () => ({
    style,
  }),
};
</script>
