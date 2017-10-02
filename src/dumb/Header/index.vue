<template>
<div class='headerContainer'>
  <div class="navBar">
    <span class="nav">
      <a :href="myHref1">
        <slot name='slot1'>
        </slot>
      </a>
    </span>
    <span class="nav">
      <a :href="myHref2">
        <slot name='slot2'>
        </slot>
      </a>
    </span>
    <span class="nav">
      <a :href="myHref3">
        <slot name='slot3'>
        </slot>
      </a>
    </span>
  </div>
  <div class="contactBar">
    <div class="logo contactItem">
      <img style='height: 20px; vertical-align: top;' :src="iconSrc">
    </div>
    <div class="contactInfo contactItem">
      <div class="text-center"><i class="fa fa-map-marker"></i> San Luis Obispo, CA</div>
    </div>
    <div class="contactInfo contactItem">
      <div class="text-center"><i class="fa fa-envelope-o"></i><a href="mailto:kevers96@gmail.com"> kevers96@gmail.com</a></div>
    </div>
    <div class="contactInfo contactItem">
      <div class="text-center"><i class="fa fa-mobile"></i><a href="tel:+1-510-828-4726"> +1-510-828-4726</a></div>
    </div>
  </div>
</div>
</template>
<script>
import logoIcon from '../../assets/kiralogo.svg'

export default {
  props: {
    iconSrc: {
      type: String,
      default: logoIcon
    },
    myHref1: {
      type: String,
      default: '/'
    },
    myHref2: {
      type: String,
      default: '#/resume'
    },
    myHref3: {
      type: String,
      default: '#/portfolio'
    }
  }
}
</script>
<style>
.headerContainer {
  background-color: #282828;
  height: 95px;
  display: block;
  position: fixed;
  width: 100%;
}

.navBar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  width: 100%;
  height: 55px;
}

.nav {
  display: inline-block;
  padding: 5px 80px;
  font-size: 40px;
  margin: 0px;
}

.nav a {
  text-decoration: none;
}

.nav p {
  color:  #282828;
  text-decoration: none;
  margin: 0px;
}

.contactItem {
  padding: 0px 50px;
  color: #f1f1f1;
}

.logo {
  height: 20px;
}
.contactBar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  font-family: 'Droid Sans', Arial, sans-serif;
}
.contactInfo {
  line-height: 20px;
  font-size: 16px;
  color: #f1f1f1;
}
.contactItem a {
  text-decoration: none;
  color: #f1f1f1;
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
