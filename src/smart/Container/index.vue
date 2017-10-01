<template>
  <div :class="[style.container]">
    <slot></slot>
  </div>
</template>
<script>
import style from './style.scss';

export default {
  props: {
  },
  data: () => ({
    style,
  }),
};
</script>
