<template>
    <p :class="[style.text]">
      <slot name='body'></slot>
    </p>
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
