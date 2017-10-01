<template>
<transition name="modal">
 <div :class="[style.modalMask]" v-on:click="onClick" style="display: block">
  <div class="modal-dialog" role="document">
    <form :class="[style.modalContent]">
      <div :class="[style.modalHeader]">
        <slot name="header"></slot>
      </div>

      <div :class="[style.modalName]">
        <slot name="name"></slot>
        <input :class="[style.name]" type="text" name="firstandlastname">
      </div>
      <div :class="[style.modalEmail]">
        <slot name="email"></slot>
        <input :class="[style.email]" type="text" name="phone">
      </div>
      <div :class="[style.modalPhone]">
        <slot name="phone"></slot>
        <input :class="[style.phone]" type="text" name="email">
      </div>
      <div :class="[style.modalBody]">
        <slot name="body"></slot>
        <input :class="[style.body]" type="text" name="body">
      </div>
      <div :class="[style.modalFooter]">
        <slot name="footer"></slot>
      </div>
      <my-button style="display: flex;">Submit</my-button>
      <my-button style="margin-top: 10px; display: flex;">Close</my-button>
    </form>
  </div>
</div>
</transition>
</template>

<script>
import style from './style.scss';
import MyButton from '../Button';

export default {
  props: {
  },
  data: () => ({
    style,
  }),
  components: {
    MyButton,
  }
};
</script>
