<template>
  <nav class="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
    <!-- <a href="#">DC Heroes</a> -->
    <!-- <router-link class="mx-2" to="/dc-heroes">dc heroes</router-link>
    <router-link class="mx-2" to="/calendar">calendar</router-link>
    <router-link class="mx-2" to="/markdown">markdown</router-link> -->
    <!-- v-for ile yapalım linkleri -->
    <router-link
      class="mx-2"
      v-for="item in list"
      :key="item.to"
      :to="item.to"
      >{{ item.title }}</router-link
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "dc heroes", to: "/dc-heroes" },
        { title: "calendar", to: "/calendar" },
        { title: "markdown", to: "/markdown" },
      ],
    };
  },
};
</script>

<style scoped></style>
