<template>
  <div class="whoami">
    <my-header>
      <p slot='slot1'>About Me</p>
      <p slot='slot2'>Resume</p>
      <p slot='slot3'>Portfolio</p>
    </my-header>
    <my-banner class='my-banner'>
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
    <my-block1 title='block1'>
      <p slot='heading'>Hi</p>
      <p slot='body'>My name is what? My name is who?</p>
    </my-block1>
    <my-block2 title="block2">
      <p slot='heading'>Hi</p>
      <p slot='body'>My name is what? My name is who?</p>
    </my-block2>
    <my-block1 title='block3'>
      <p slot='heading'>Hi</p>
      <p slot='body'>My name is what? My name is who?</p>
    </my-block1>
    <my-block2 title="block4">
      <p slot='heading'>Hi</p>
      <p slot='body'>My name is what? My name is who?</p>
    </my-block2>
  </div>
</template>

<script>
import myHeader from '../dumb/Header'
import myBanner from '../dumb/BannerText'
import myHeading1 from '../dumb/Headers'
import myBlock1 from '../dumb/BlockTextImageRight'
import myBlock2 from '../dumb/BlockTextImageLeft'

export default {
  name: 'whoami',
  components: {
    myHeader,
    myBanner,
    myHeading1,
    myBlock1,
    myBlock2
    // myBlock3,
    // myBlock4
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-weight: bold;
}

.whoami {
  background: #f1f1f1;
  height: 100%;
}

.bannerContainer {
  padding-top: 95px;
  padding-right: 20px;
}

.subHeader {
  font-family: Droid Sans, Arial, sans-serif;
  font-weight: normal;
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
