<template>
  <div>
    <AppHeader />
    <div class="w-full flex">
      <router-view></router-view>
      <!-- <Calendar /> -->
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
// import Calendar from "./components/Calendar"


export default {
  components: {
    AppHeader,
    // Calendar
  },
};
</script>

<style scoped></style>