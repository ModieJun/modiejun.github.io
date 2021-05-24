<template>
  <!-- Contains contents for the screen only -->
  <div class="contiainer w-full flex flex-col space-y-0">
    <div
      class="py-20 flex flex-col w-full relative items-center justify-center md:py-0 md:flex-row sm:h-screen bg-gradient-to-r from-primary to-secondary"
    >
      <div class="z-10 sm:flex-row sm:-mr-5">
        <div
          class="max-h-full h-full space-y-5 m p-10 w-80 sm:w-96 bg-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col transform duration-75 hover:-translate-y-1"
        >
          <div>
            <h2 class="text-xl text-bold">Junjie Lin</h2>
            <div class="flex flex-row space-x-3 text-gray-600 text-sm">
              <p>English</p>
              <p>Mandarin</p>
              <p>Cantonese</p>
            </div>
          </div>
          <div class="text-base font-light my-1 flex flex-col space-y-1">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p>Technology Consultant</p>
            </div>
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>HONG KONG</p>
            </div>
          </div>
          <div class="flex flex-row justify-between mt-10">
            <div class="flex link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <a href="https://github.com/ModieJun">Github</a>
            </div>
            <div class="flex link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <a
                href="https://www.linkedin.com/in/junjie-lin-modiejun/"
                class="link"
                >Lets Connect</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Image -->
      <div
        class="max-h-52 max-w-48 w-48 h-48 md:w-48 sm:-ml-5 md:h-full items-center justify-center transform skew-y-2"
      >
        <picture>
          <source
            type="image/webp"
            srcset="../assets/profile.webp"
            class="object-cover h-full rounded-xl w-full shadow-lg md:h-full md:w-48 transform ease-in-out duration-75 hover:translate-x-2 hover:-translate-y-1 hover:rotate-3"
          />
          <img
            src="../assets/profile.jpg"
            alt="Profile Image is here"
            class="object-cover h-full rounded-xl w-full shadow-lg md:h-full md:w-48 transform ease-in-out duration-75 hover:translate-x-2 hover:-translate-y-1 hover:rotate-3"
          />
        </picture>
      </div>
    </div>

    <!-- Projects -->
    <div
      class="max-h-90 h-full bg-gradient-to-br py-5 from-white to-secondary flex items-center"
    >
      <div
        class="container mx-auto p-5 sm:p-0 flex flex-col items-center space-y-2"
      >
        <h1 class="text-3xl text-black font-bold py-5" id="Projects" >Projects</h1>
        <div class="grid grid-cols-1 gap-2 align-start lg:grid-cols-2 sm:gap-5">
          <div v-for="proj in projects" :key="proj.projectName">
            <Card
              :src="
                'https://source.unsplash.com/random?' +
                proj.projectCoverImageParam
              "
              :title="proj.projectName"
              :content="proj.projectInfo"
              :actionlink="proj.projectUrl"
              :actiontext="proj.projectLocation"
              :actioninfo="proj.projectCodebase"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Timeline of events and places ive been -->
    <div class="flex flex-col py-5">
      <h2 class="text-3xl text-black font-bold py-5 text-center" id="Milestones">Milestones</h2>
      <Timeline :timelineData="timeline" />
    </div>

    <!-- Footer -->
    <div class="h-full sm:h-50 border-t-2" id="Footer">
      <div class="container mx-auto p-10 flex flex-col">
        <div
          class="container mx-auto py-3 flex flex-col justify-between sm:flex-row"
        >
          <div class="flex flexrow link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 p-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a href="mailto:junjielin8888@gmail.com">Email Me</a>
          </div>
          <a
            class="link"
            href="https://www.linkedin.com/in/junjie-lin-modiejun/"
            >LinkedIn</a
          >
        </div>
        <span class="text-gray-400">@Junjie Lin 2021</span>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Timeline from "@/components/Timeline";
export default {
  name: "Home",
  components: {
    Card,
    Timeline,
  },
  data: function () {
    return {
      projects: [
        {
          projectName: "Cloud Storage [Spring Boot]",
          projectInfo: "Personal Cloud storage made with Spring boot",
          projectUrl: "https://github.com/ModieJun/FileStorage",
          projectLocation: "Github",
          projectCodebase: "Java",
          projectCoverImageParam: "cloud",
        },
      ],
      timeline: [
        {
          title: "MSc Business Information System - Graduation",
          date: "15/05/2021",
          description:
            "Completed Masters degress in Business Information Systems @ City University of Hong Kong",
        },
        {
          title: "BSc Computer Science",
          date: "15/07/2020",
          description:
            "Completed Bachelors degree in Computer Science @ Jinan University, Guangzhou",
        },
        {
          title: "Exchange Program - Ingolstadt, Germany",
          date: "20/2/2019",
          description:
            "Completed exchange program in Germany, enrolled in Software development, Artificial Intelligence and Machine Learning etc.",
        },
      ],
    };
  },
};
</script>