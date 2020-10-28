<template>
  <div>
    <AppHeader />
    <div class="w-full flex">
      <DcHeroes />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import DcHeroes from "./components/DcHeroes";

export default {
  components: {
    AppHeader,
    DcHeroes,
  },
};
</script>

<style scoped></style>
