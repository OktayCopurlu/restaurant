<template>
  <section class="restaurantinfo">
    <div v-for="store in getterFoodData" :key="store.id">
      <h2>{{ store.name }}</h2>
      <p>Delivery Time : {{ store.deliveryTime }}</p>
      <p>Raiting {{ store.raiting }}</p>
      <p v-if="store.freeDelivery" class="label">Free Delivery</p>

      <div class="row">
        <div
          v-for="menuItem in store.menu"
          :key="menuItem.id"
          class="items"
          :Style="`background:url(${menuItem.img}) no-repeat center center`"
        >
          <div class="iteminfo">
            <h4>
              {{ menuItem.item }}
            </h4>
            <p>{{ priceFormat(menuItem.price) }}</p>
            <button class="ghost">View Item ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState ,mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(["getterFoodData"]),
  },
  methods: {
    priceFormat(item) {
      return "CHF " + item.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
