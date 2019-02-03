<template>
  <div class="home">
    <HomeIntro/>
    <HomeContent/>
    <Projects/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeIntro from '../components/HomeIntro.vue';
import HomeContent from '../components/HomeContent.vue';
import Projects from '../components/Projects.vue';

export default {
  name: 'home',
  components: {
    HomeIntro,
    HomeContent,
    Projects
  }
}
</script>
