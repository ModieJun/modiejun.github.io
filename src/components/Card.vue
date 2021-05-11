<template>
  <div class="card">
      <img src="../assets/profile.jpg" alt="Image is here" class=" object-cover max-h-140 w-full h-64 sm:w-40 sm:h-auto">
    <div v-if="this.content && this.title" class="p-5 my-auto " >
        <h1 class="text-2xl font-semibold text-gray-800">{{title}}</h1>
        <p class="text-base text-gray-400 mt-2">{{content}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:['src','title','content']
}
</script>

<style>

</style>