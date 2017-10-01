<template>
  <div :class="[style.container]">
    <div :class="[style.subContainer]">
      <img :src="iconSrc" :class="[style.icon]">
    </div>
    <p :class="[style.text]">
      <slot>file text</slot>
    </p>
  </div>
</template>

<script>
import style from './style.scss';
import iconSrc from '../../assets/page-icon.svg';

export default {
  props: {
    iconSrc: {
      type: String,
      default: iconSrc,
    },
  },
  data: () => ({
    style,
  }),
};
</script>
