<template>
  <div class="card overflow-hidden">
    <div class="md:flex text-wrap">
      <div class="md:flex-shrink-0" v-if="src">
        <img
          :src="src"
          alt="Image is here"
          class="max-h-44 max-w-44 max-w-3xl object-cover h-full w-full md:max-h-60 md:w-44"
        />
      </div>
      <div
        v-if="this.content && this.title"
        class="p-5 flex flex-col space space-y-2"
      >
        <h1 class="uppercase text-base font-semibold text-justify">
          {{ title }}
        </h1>
        <p class="text-sm text-gray-500 mt-2 text-justify">{{ content }}</p>
        <div
          class="flex flex-row space-x-3 pt-2 justify-between items-center text-sm font-light"
          v-if="this.actiontext && this.actionlink"
        >
          <!-- actions -->
          <p class="flex text-black font-bold italic">{{ actioninfo }}</p>
          <a
            :href="actionlink"
            class="btn px-10 md:px-5 py-2 bg-primary text-white hover:ring-2 hover:ring-primary hover:bg-white hover:text-primary"
            >{{ actiontext }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["src", "title", "content", "actiontext", "actionlink", "actioninfo"],
};
</script>