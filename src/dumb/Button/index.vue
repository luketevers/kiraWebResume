<template>
  <div>
    <button v-on:click="onClick" :class="[style.button]">
      <slot>button</slot>
    </button>
  </div>
</template>
<script>
import style from './style.scss';

export default {
  props: {
    onClick: {
      type: Function,
      default: () => console.log('Congratulations! Your website is now dentally hygenic!'),
    },
  },
  data: () => ({
    style,
  }),
};
</script>
