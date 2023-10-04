<script setup>

import Header from "@/components/Header.vue";
import Profile from "@/components/Profile.vue";
import Footer from "@/components/Footer.vue";
</script>

<script>
export default {
  data() {
    return {
      person: {
        name: 'Sasha',
        changeName: false,
        lastname: 'Volkov',
        changeLastName: false,
        patronymic: 'Segeevich',
        changePatr: false,
        birthday: '14.03.2002',
        changeBirthDay: false,
        student: true,
        teacher: false,
        class: '11',
        changeClass: false,
        email: 'a1exa2@adsaw.ry',
        changePass: false

      }
    }
  }
}
</script>

<template>
  <Header/>
  <div class="container">
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
        <Profile :person="person"/>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style scoped lang="scss">
@import '../assets/styles/styles.scss';

.container {
  margin-top: 80px;
  height: 80vh;
  padding: 10px;
}

.window {
  column-gap: 10px;
  margin: 0 auto;
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
  padding: 14px 3px 0 3px;
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