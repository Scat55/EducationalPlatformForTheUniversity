<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import { useCounterStore } from '../stores/counter';

const status = useCounterStore();
const router = useRouter();
const userProf = ref({})
const activeClass = ref(true)

const state = reactive({
  fullName: '',
  password: '',
  proffesion: [{ id: 0, name: 'Ученик' }, { id: 0, name: 'Учитель' }]
})

const rules = {
  fullName: { required },
  password: { required, minLength: minLength(8) },
  proffesion: { required }
}

const v$ = useVuelidate(rules, state)
// Валидация формы
const handler = async () => {
  const result = await v$.value.$validate();
  if (result) {
    router.push('/profile')
  } else {
    alert('Error')
  }
  console.log(state.proffesion.name)
}

// Появлени формы и отключение скролла
const body = document.querySelector('body')

const changeStatusOnFalse = () => {
  status.statusForm = false
  body.style.overflow = ""
}
</script>

<template>
  <div class="reg ">

    <div class="container">

      <form
        action="#"
        class="reg__form no-scroll"
        @submit.prevent="handler()"
      >

        <p class="reg__form-title">Регистрация</p>
        <img
          src="../assets/images/closeForm.png"
          alt="CloseForm"
          class="reg__form-img"
          @click="changeStatusOnFalse()"
        >

        <div class="reg__info">
          <span class="reg__info-name ">Имя, фамилия</span>
          <input
            type="text"
            class="reg__input name"
            v-model="state.fullName"
          >

        </div>
        <div class="reg__info">
          <span class="reg__info-name">Пароль</span>
          <input
            type="password"
            class="reg__input"
            v-model="state.password"
          >
        </div>
        <small
          v-for="error in v$.fullName.$errors"
          :key="error.$uid"
        > {{ error.$message }}</small>

        <select
          name="proffesion"
          id="proffesion"
          class="reg__form-prof"
          v-model="state.proffesion.name"
        >
          <option
            v-for=" prof  in  state.proffesion "
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

        <small
          :class="{ activeClass: activeClass }"
          v-for="error in v$.$errors"
          :key="error.$uid"
        >
          {{ error.$property }} - {{ error.$message }}
        </small>
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
  height: 125vh;
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
      transition: all .3s;

      &:hover {
        transform: rotate(-90deg);
      }
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


.activeClass {
  color: red;
}
</style>
