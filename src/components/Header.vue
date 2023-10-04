<script setup>
import { RouterLink } from 'vue-router';
import { useCounterStore } from '../stores/counter';

const status = useCounterStore();
</script>

<template>
  <div class="header">
    <div class="container">

      <div class="header__logo">
        <RouterLink to="/">
          <img
            src="../assets/images/ЛОГО3.png"
            alt="Logo"
            class="header__logo-img"
          >
        </RouterLink>
        <div class="header__logo-lists">
          <ul class="header__logo-list">
            <li
              class="header__logo-item"
              @click="status.statusForm = true"
            >Задания</li>
            <li class="header__logo-item">О нас</li>
            <li class="header__logo-item">Полезное</li>
            <li
              class="header__logo-item login"
              @click="status.statusForm = true"
            >
              <img
                src="../assets/images/userLog.png"
                alt=""
                class="log"
              >
              Войти
            </li>

          </ul>
        </div>

      </div>

    </div>
  </div>
</template>



<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.header {
  color: $whiteColor;

  &__logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $accentColor;
    padding: 0 3rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    box-shadow: 0 0 10px 2px $accentColor;


    &-img {
      width: 4.3rem;
      margin-top: .625rem;
      margin-bottom: 1rem;
    }

    &-list {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    &-item {
      list-style: none;
      cursor: pointer;
      transition: all .3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}

.login {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: $whiteColor;
  background-color: $lightBlueColor;
  padding: .625rem 1.25rem;
  border-radius: 1rem;
}

.log {
  width: 1.5rem;
}
</style>