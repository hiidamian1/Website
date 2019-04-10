<template>
  <div>
    <Header v-bind:isMainPage="true"/>
    <HomeIntro/>
    <About/>
    <Projects/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeIntro from '../components/HomeIntro.vue';
import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import Footer from '../components/Footer.vue';
import Header from "../components/Header";

export default {
  name: 'home',
  components: {
    HomeIntro,
    About,
    Projects,
    Footer,
    Header
  }
}
</script>
