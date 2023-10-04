<script setup>
import { useCounterStore } from '../stores/counter';

const status = useCounterStore();

const body = document.querySelector('body')

const changeStatusOnTrue = () => {
  status.statusForm = true
  body.style.overflow = "hidden"
}
</script>

<template>
  <div class="big">
    <div class="container">
      <p class="big__title">Начние учиться уже сегодня!</p>
      <p class="big__subtitle">Зарегестируйтесь и получайте знания</p>

      <div class="big__content">
        <p class="big__content-text">Обучение может быть не только полезным, но и увлекательным! Попробуйте наши
          образовательные игры и квизы,
          разработанные для закрепления и проверки знаний в интерактивной форме. Играя, вы будете учиться быстрее!</p>
        <div class="big__content-robot">
          <img
            src="../assets/images/spaceMan.png"
            alt="SpaceMan"
            class="big__content-img"
          >
          <a
            href="#"
            class="big__content-btn"
            @click="changeStatusOnTrue()"
          >Войти</a>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.big {
  background-color: #0046B8;
  border-radius: 1rem;
  margin-top: 1.875rem;

  &__title {
    font-size: 2rem;
    padding-top: 2.25rem;
    color: $whiteColor;
  }

  &__subtitle {
    color: $whiteColor;

  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-img {
      width: 30rem;
    }

    &-robot {
      position: relative;
    }

    &-btn {
      position: absolute;
      top: 6.25rem;
      right: 4.375rem;
      background-color: $accentColor;
      padding: .625rem 1.25rem;
      border-radius: 1rem;
      cursor: pointer;
      color: $whiteColor;
      text-decoration: none;
    }

    &-text {
      color: $whiteColor;
      font-size: 1.4rem;
    }
  }
}
</style>