<script setup>

import Header from "@/components/Header.vue";
</script>

<template>
<Header/>
  <div class="main">
    <div class="window">
      <div class="left_div"></div>
      <div class="right_div"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  padding: 10px;
}

.window {
  column-gap: 10px;
  width: 1270px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
}

.left_div .right_div {
  border-radius: 1rem;
}

.left_div {
  background: #00DFCC;
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
}

.right_div {
  background: #018bd3;
  grid-column: 2 / span 3;
  grid-row: 1 / span 2;
}





</style>