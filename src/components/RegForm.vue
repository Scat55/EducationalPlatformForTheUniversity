<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '../stores/counter';

const status = useCounterStore();

const router = useRouter();

const proffesion = [{ id: 0, name: 'Ученик' }, { id: 0, name: 'Учитель' }]

const userName = ref('');
const userPass = ref('')
const userProf = ref({})

const handler = () => {
  console.log(`${userName.value}, ${userPass.value}, ${userProf.value}`)
  router.push('/')
}
</script>

<template>
  <div class="reg">

    <div class="container">

      <form
        action="#"
        class="reg__form"
        @submit.prevent="handler()"
      >

        <p class="reg__form-title">Регистрация</p>
        <img
          src="../assets/images/closeForm.png"
          alt="CloseForm"
          class="reg__form-img"
          @click="status.statusForm = false"
        >

        <div class="reg__info">
          <span class="reg__info-name ">Имя, фамилия</span>
          <input
            type="text"
            class="reg__input name"
            v-model="userName"
          >
        </div>
        <div class="reg__info">
          <span class="reg__info-name">Пароль</span>
          <input
            type="password"
            class="reg__input"
            v-model="userPass"
          >
        </div>
        <select
          name="proffesion"
          id="proffesion"
          class="reg__form-prof"
          v-model="userProf"
        >
          <option
            v-for="prof in proffesion"
            :value="prof.name"
            class="reg__from-option"
          >
            {{ prof.name }}
          </option>
        </select>
        <button
          class="reg__form-btn"
          type="submit"
        >Зарегестрироваться</button>
        <p>Есть аккаут? <span
            class="reg__auth"
            @click="router.push('/auth')"
          > Войти</span> </p>
      </form>


    </div>
  </div>
</template>



<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.reg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  &__form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    width: 25.5rem;
    height: 32.5rem;
    border: 2px solid $lightBlueColor;
    border-radius: 1rem;
    padding: 5.75rem;
    box-shadow: 0 0 20px 0px $accentColor;
    background-color: #fff;



    &-title {
      font-weight: bold;
      font-size: 1.3rem;
    }

    &-img {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      cursor: pointer;
    }

    &-prof {
      width: 18rem;
      border: 1px solid $accentColor;
      border-radius: 0.5rem;
      padding: .625rem 1.25rem;
      font-family: Visitor;
      font-size: 1rem;
      outline: none;
    }

    &-btn {
      padding: .625rem;
      background-color: $lightBlueColor;
      color: $whiteColor;
      font-family: Visitor;
      border: none;
      border-radius: 0.5rem;
      letter-spacing: 0.15rem;
      cursor: pointer;

      &:hover {
        box-shadow: 0 0 20px 0px $accentColor;
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 18rem;
    border: 1px solid $accentColor;
    border-radius: 0.5rem;
    padding: .625rem 1.25rem;

    &-name {
      color: rgba(17, 17, 17, 0.49);
      font-size: 0.9rem;
    }
  }

  &__input {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1rem;
  }

  &__auth {
    cursor: pointer;
    color: $accentColor;
  }
}

.name {
  font-family: Visitor;
}
</style>