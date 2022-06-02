<template>
  <div class="services">
    <h1>Services</h1>
    <div
      class="service"
      v-for="service in services"
      :key="service.id"
      :class="service.isSelected ? 'isselected' : 'notselected'"
      @click="
        select(service);
        counter();
      "
    >
      <div>
        {{ service.title }}
      </div>
      <div>{{ service.currency }}{{ service.price }}</div>
    </div>

    <hr style="width: 420px" />
    <div class="service">
      <div>TOTAL</div>
      <div>${{ count }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "servicesTask",
  data: () => {
    return {
      count: 0,
      services: [
        {
          id: 1,
          title: "Web Development",
          currency: "$",
          // eslint-disable-next-line prettier/prettier
          price: 300.00,
          isSelected: false,
        },
        {
          id: 2,
          title: "Design",
          currency: "$",
          // eslint-disable-next-line prettier/prettier
          price: 400.00,
          isSelected: false,
        },
        {
          id: 3,
          title: "Integration",
          currency: "$",
          // eslint-disable-next-line prettier/prettier
          price: 250.00,
          isSelected: false,
        },
        {
          id: 4,
          title: "Training",
          currency: "$",
          // eslint-disable-next-line prettier/prettier
          price: 220.00,
          isSelected: false,
        },
      ],
    };
  },
  methods: {
    select(service: {
      id: number;
      title: string;
      currency: string;
      price: number;
      isSelected: boolean;
    }) {
      this.services.map((s) =>
        s.id === service.id ? (s.isSelected = !s.isSelected) : service
      );
    },
    counter() {
      const prices = this.services.map((service) =>
        service.isSelected === true ? service.price : 0
      );
      console.log(
        +(this.count = prices.reduce((a: number, b: number) => a + b))
      );
    },
  },
});
</script>

<style>
.service {
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: rgb(238, 190, 214);
  margin-bottom: 5px;
}
.isselected {
  background-color: blue;
  color: white;
}
</style>
