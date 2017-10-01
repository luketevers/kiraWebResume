<template>
  <div :class="[style.container]">
    <h2 :class="[style.header]">
      <slot name="header">Header1</slot>
    </h2>
    <h3 :class="[style.subHeader]">
      <slot name="subHeader">Header2</slot>
    </h3>
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
