<template>
  <div class="container mx-auto">
    <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-white">
      <div
        class="contents"
        v-for="(entry, index) in this.timelineData"
        :key="index"
      >
        <!--  Timeline pin -->
        <!-- iF the timeline is in the same time  -->
        <div
          v-if="shouldBeLeft(index)"
          class="flex flex-row-reverse justify-end md:contents"
        >
          <div
            class="bg-primary container col-start-1 col-end-5 p-4 rounded-xl my-4 shadow-md"
          >
            <div class="mb-4">
              <h3 class="font-bold text-lg">{{ entry.title }}</h3>
              <p class="text-xs font-light">{{ entry.date }}</p>
            </div>
            <p class="leading-tight text-justify text-sm italic">
              {{ entry.description }}
            </p>
          </div>
          <!-- Timline Pin - in the middle -->
          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-secondary pointer-events-none"></div>
            </div>
            <div
              class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary shadow"
            ></div>
          </div>
        </div>

        <!-- right entry -->
        <div v-else class="flex md:contents">
          <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-secondary pointer-events-none"></div>
            </div>
            <div
              class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-secondary shadow"
            ></div>
          </div>
          <div
            class="bg-primary container col-start-6 col-end-10 p-4 rounded-xl my-4 shadow-md"
          >
            <div class="mb-4">
              <h3 class="font-bold text-lg ">{{ entry.title }}</h3>
              <p class="text-xs font-light">{{ entry.date }}</p>
            </div>
            <p class="leading-tight text-justify text-sm italic">
              {{ entry.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timeline",
  props: ["timelineData"],
  methods: {
    shouldBeLeft: function (index) {
      return index % 2 === 0 ? true : false;
    },
  },
};
</script>

<style>
</style>