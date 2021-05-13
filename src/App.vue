<template>
  <div id="app" class="min-w-screen w-screen relative">
    <Navbar class="bg-primary shadow-lg" />
    <Home/>
  </div>
</template>

<script>
import Home from '@/view/Home.vue'
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Home,
    Navbar
  }
}
</script>