<script setup>

import Header from "@/components/Header.vue";
</script>

<template>
<Header/>
  <div class="main">
    <div class="window">
      <div class="left_div">
        <div class="tab">Профиль</div>
        <div class="tab">Профиль</div>
        <div class="tab">Профиль</div>
        <div class="tab">Профиль</div>
        <div class="tab">Профиль</div>
        <div class="tab">Профиль</div>
      </div>
      <div class="right_div">

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/styles/styles.scss';

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



.left_div {
  background: $lightBlueColor;
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  display: grid;
  padding: 13px 3px 0 3px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
}

.tab {
  padding: 10px;
  width: 100%;
  height: 40px;
  border-radius: 1rem;
  background: aliceblue;
}

.right_div {
  background: $lightBlueColor;
  grid-column: 2 / span 3;
  grid-row: 1 / span 2;
}

.left_div, .right_div {
  border: 2px solid $lightBlueColor;
  border-radius: 1rem;
}



</style>