<script setup>
import Footer from "@/components/Footer.vue";
</script>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>

  <div class="main">
    <div class="date_person_fio">
      <div class="name"><p>Имя</p>
        <input type="text" v-bind:value="person.name"></div>
      <div class="lastName">
        <p>Фамилия</p>
        <input type="text" v-bind:value="person.lastname">
      </div>
      <div class="patronymic">
        <p>Отчество</p>
        <input type="text" v-bind:value="person.patronymic">
      </div>
    </div>

    <div class="date_person_birthday">
      <p>Дата рождения {{ person.birthday }}</p>
    </div>

    <div class="date_person_class">
      <p>Класс</p>
      <p>Учитель по</p>
      <input type="text">
    </div>

    <div class="date_person_email">
      <p>Почта {{person.email}}</p>
    </div>

    <div class="change_password">
      <button v-if="person.changePass === false" @click="person.changePass = true">Изменить пароль</button>
      <div v-if="person.changePass === true">
        <label>Введите пароль</label><input type="password"><br>
        <label>Введите новый</label><input type="password"><br>
        <label>повторите новый пароль</label><input type="password"><br>
        <button>Подтвердить изменение</button>
        <button @click="person.changePass = false">Отмена</button>
      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">
@import '../assets/styles/styles.scss';

.main {
  font-size: 25px;
  padding: 25px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  overflow-y: auto;
  overflow-x: hidden;
}

.date_person_fio {
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
}

.date_person_birthday {
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
}

.date_person_class {
  grid-row: 3 / span 1;
  grid-column: 1 / span 1;
}

.date_person_email {
  grid-row: 4 / span 1;
  grid-column: 1 / span 1;
}

.change_password {
  grid-row: 5 / span 1;
  grid-column: 1 / span 1;
}
</style>