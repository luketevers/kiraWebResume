<template>
  <div :class="[style.container]">
    <span>
      <img :src="iconSrc" :class="[style.icon]" v-on:click="onClick"/>
    </span>
  </div>
</template>
<script>
import style from './style.scss';
import envelopeIcon from '../../assets/envelope-icon.svg';

export default {
  props: {
    onClick: {
      type: Function,
      default: () => console.log('Congratulations! Your website is now dentally hygenic!'),
    },
    iconSrc: {
      type: String,
      default: envelopeIcon,
    }
  },
  data: () => ({
    style,
  }),
};
</script>
