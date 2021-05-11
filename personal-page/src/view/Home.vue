<template>
  <!-- Contains contents for the screen only -->
  <div class="w-full flex flex-col space-y-0">
    <div
      class="flex h-full w-full relative items-center justify-center sm:h-screen"
    >
      <img
        class="object-cover z-0 h-full w-full absolute top-0 left-0"
        src="../assets/parallax1.jpg"
        alt="bg image "
      />
      <div class="h- z-10 inline-block z-1 sm:flex-row sm:-mr-20">
        <Card
          src="@/assets/profile.jpg"
          title="Junjie Lin"
          content="Techie | Tech in Business | AHHHH"
        />
      </div>
    </div>
    <!-- Projects -->
    <div class="h-full bg-gradient-to-br from-gray-300 to-red-400 sm:h-screen">
      <div class="container mx-auto flex flex-col items-start space-y-2">
        <h1 class="ml-2 text-xl">Projects</h1>
        <div
          class="container grid grid-cols-1 gap-4 align-start sm:grid-cols-2 sm:gap-2 sm:justify-evenly sm:align-center"
        >
          <Card title="Something" content="Somthing" />
          <Card title="Something" content="Somthing" />
          <Card title="Something" content="Somthing" />
        </div>
      </div>
      <!-- <Card title="Cloud Projects" content="Cloud Storage"/> -->
    </div>


    <!-- Personal stuff -->
    <div class="h-full sm:h-screen flex sm:items-center">
      <div class="container mx-auto p-5 space-y-2 sm:p-10 grid grid-cols-1 sm:grid-cols-3 sm:auto-cols-max sm:gap-2">
          <Card title="Something" content="Somthing" />
          <Card title="Something" content="Somthing" />
          <Card title="Something" content="Somthing" /> 
      </div>
    </div>

    <!-- Footer -->
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Home",
  components: {
    Card,
  },
};
</script>