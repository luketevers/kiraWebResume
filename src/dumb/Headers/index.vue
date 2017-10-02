<template>
  <div class='headingContainer'>
      <p class="heading">
        <slot name="subHeading">
        </slot>
      </p>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    iconSrc: {
      type: String,
      default: ''
    },
    myHref1: {
      type: String,
      default: ''
    },
    myHref2: {
      type: String,
      default: ''
    },
    myHref3: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.headingContainer {
  background-color: #282828;
  height: 100px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.heading {
  margin: 0px;
}

.heading p {
  font-size: 80px;
  margin: 0px;
  color: #f1f1f1;
  line-height: 1em;
}
@media (min-width:1440px) {

}
@media (min-width:1024px) and (max-width:1439px) {

}
@media (min-width:768px) and (max-width:1023px) {

}
@media (min-width:320px) and (max-width:767px) {

}
</style>
