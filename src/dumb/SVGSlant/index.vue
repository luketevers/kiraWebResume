<template>
  <div :class="[style.container]">
    <slot>
      This is a body section
    </slot>
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
