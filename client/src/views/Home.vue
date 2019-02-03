<template>
  <div id="home">
    <HomeIntro/>
    <HomeContent/>
    <Projects/>
    <Contact/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeIntro from '../components/HomeIntro.vue';
import HomeContent from '../components/HomeContent.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'home',
  components: {
    HomeIntro,
    HomeContent,
    Projects,
    Contact
  }
}
</script>
