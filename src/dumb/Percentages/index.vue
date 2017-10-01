<template>
  <div :class="[style.container]">
    <h2 :class="[style.percentage]">
      <slot name="header">Header Text</slot>
    </h2>
    <p :class="[style.text]">
      <slot name="body">Body text</slot>
    </p>
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
