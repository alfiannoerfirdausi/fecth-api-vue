<script setup>
import { useRouter } from "vue-router";

const { productItem } = defineProps({
  productItem: Object,
});

const router = useRouter();
function goDetail(e) {
  console.log(e);
  router.push(`/productDetail/${productItem.id}`);
}
</script>
<template>
  <div class="product-card" @click="goDetail">
    <img
      :src="productItem.image"
      :alt="productItem.title"
      class="product-image"
    />
    <h2 class="product-title">{{ productItem.title }}</h2>
    <p class="product-description">{{ productItem.description }}</p>
    <span class="product-price">${{ productItem.price.toFixed(2) }}</span>
  </div>
</template>
<style scoped>
.product-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-description {
  color: #555;
  margin-bottom: 10px;
}

.product-price {
  color: #00b894;
  font-weight: bold;
}
</style>
