<script setup>
const props = defineProps({
  page: Number,
  totalPage: Number,
});

const emit = defineEmits(["change-page"]);
function myFunction(newPage) {
  emit("change-page", newPage);
  console.log(newPage);
}
</script>
<template>
  <div v-show="page > 1">
    <button class="pagination-button" id="firstPage" @click="myFunction(1)">
      &lt;&lt;
    </button>
    <button
      class="pagination-button"
      id="prevPage"
      @click="myFunction(page - 1)"
    >
      &lt;
    </button>
  </div>
  <span>Page {{ page }} of {{ totalPage }} </span>
  <div v-show="page < totalPage">
    <button
      class="pagination-button"
      id="nextPage"
      @click="myFunction(page + 1)"
    >
      &gt;
    </button>
    <!-- create button last -->
    <button
      class="pagination-button"
      id="lastPage"
      @click="myFunction(totalPage)"
    >
      &gt;&gt;
    </button>
  </div>
</template>
<style scoped>
.pagination-button {
  background-color: #fff;
  color: #00b894;
  padding: 8px 12px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;
}
</style>
