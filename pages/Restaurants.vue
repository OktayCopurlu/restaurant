<template>
  <main class="container restaurant">
    <h1>Restaurants</h1>
    <AppRestorantInfo />
  </main>
</template>

<script>
import AppRestorantInfo from "@/components/AppRestorantInfo.vue";
export default {
  components: {
    AppRestorantInfo,
  },
};
</script>
<style lang="scss" scope>
h1 {
  text-align: center;
}
</style>