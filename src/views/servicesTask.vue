<template>
  <div class="service__wrapper">
    <div class="services">
      <h1 class="title">Services</h1>
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
        <div class="service__title">
          {{ service.title }}
        </div>
        <div>{{ service.currency }}{{ service.price.toFixed(2) }}</div>
      </div>

      <hr class="hr" />
      <div class="total">
        <div>TOTAL</div>
        <div>${{ count }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "servicesTask",
  data: () => {
    return {
      count: "0.00",
      services: [
        {
          id: 1,
          title: "Web Development",
          currency: "$",
          price: 300,
          isSelected: false,
        },
        {
          id: 2,
          title: "Design",
          currency: "$",
          price: 400,
          isSelected: false,
        },
        {
          id: 3,
          title: "Integration",
          currency: "$",
          price: 250,
          isSelected: false,
        },
        {
          id: 4,
          title: "Training",
          currency: "$",
          price: 220,
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
      this.services.forEach((s) =>
        s.id === service.id ? (s.isSelected = !s.isSelected) : s
      );
    },
    counter() {
      const prices = this.services.map((service) =>
        service.isSelected === true ? service.price : 0
      );
      return (this.count = prices
        .reduce((a: number, b: number) => a + b)
        .toFixed(2));
    },
  },
});
</script>

<style>
@import "@/styles/ServicesStyle.scss";
</style>
