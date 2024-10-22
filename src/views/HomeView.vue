<script setup>
import pagination from "@/components/pagination.vue";
import product from "@/components/product.vue";
import productform from "@/components/productForm.vue";
import { ref, watchEffect } from "vue";
import axios from "axios";

const products = ref([]);
const page = ref(1);
const limit = ref(8);
const loading = ref(true);
async function getData() {
  const API_URL = `http://localhost:3000/products?_page=${page.value}&_per_page=${limit.value}`;
  try {
    loading.value = true;
    const res = await axios.get(API_URL);
    products.value = await res.data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}
watchEffect(() => {
  getData();
});
function changeHalaman(newAngka) {
  console.log(newAngka);
  page.value = newAngka;
}

async function saveProduct(item) {
  try {
    await axios.post("http://localhost:3000/products", item);
    getData();
  } catch (error) {
    console.error(error);
  }
}

console.log(page.value);
console.log(products);
</script>
<template>
  <div v-if="loading">Loading......</div>
  <main v-else>
    <productform @create-product="saveProduct" />
    <div class="product-grid">
      <product
        v-for="(item, index) in products.data"
        :key="index"
        :productItem="item"
      />
    </div>
    <div class="pagination">
      <pagination
        :page="page"
        :totalPage="products.pages"
        @change-page="changeHalaman"
      />
    </div>
  </main>
</template>
<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 80%;
  margin: 0 auto;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
