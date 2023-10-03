<script setup>
import { RouterLink } from 'vue-router';
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
            <li class="header__logo-item">Задания</li>
            <li class="header__logo-item">О нас</li>
            <li class="header__logo-item">Полезное</li>
            <RouterLink
              to="/reg"
              class="router"
            >
              <li class="header__logo-item login">Войти</li>
            </RouterLink>
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
  margin-bottom: 3.125rem;

  &__logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $accentColor;
    padding: 0 3rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;


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
  color: $whiteColor;
  background-color: $lightBlueColor;
  padding: .625rem 1.25rem;
  border-radius: 1rem;
}
</style>