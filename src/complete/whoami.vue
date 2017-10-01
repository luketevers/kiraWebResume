<template>
<div class="hello">
  <my-header>
    <p slot='slot1'>About Me</p>
    <p slot='slot2'>Resume</p>
    <p slot='slot3'>Portfolio</p>
  </my-header>
  <my-banner>
    <p class='header' slot="bannerText">
      kira evers
    </p>
    <p class="subHeader" slot="subText">
      Bitchy wino with a penchant for destroying the environment
    </p>
    </slot>
  </my-banner>
  <my-heading1>
    <p slot='subHeading'>ME</p>
  </my-heading1>
</div>
</template>

<script>
import myHeader from '../dumb/Header'
import myBanner from '../dumb/BannerText'
import myHeading1 from '../dumb/Headers'
export default {
  name: 'hello',
  components: {
    myHeader,
    myBanner,
    myHeading1
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-weight: bold;
}

.hello {
  background: #f1f1f1;
  height: 100vh;
}

.bannerContainer {
  padding-top: 95px;
  padding-right: 20px;
}

.subHeader {
  font-family: Droid Sans, Arial, sans-serif;
  font-weight: normal;
}
</style>
