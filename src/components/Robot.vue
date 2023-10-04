<script setup>
import { useCounterStore } from '../stores/counter';

const status = useCounterStore();
</script>

<template>
  <div class="robot">
    <div class="container">
      <div class="robot__content">
        <p class="robot__title">В эпоху цифровизации и глобализации, качественное образование становится нашим главным
          приоритетом. У нас вы найдете сочетание проверенных временем методов и современных технологий, чтобы учиться с
          удовольствием и эффективностью. Присоединяйтесь к команде передовых мыслителей!</p>
        <img
          src="../assets/images/robot/robot (1).png"
          alt="Robot"
        >
      </div>
      <button
        class="robot__btn"
        @click="status.statusForm = true"
      >Начать заниматься</button>
    </div>


  </div>
</template>


<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.robot {
  margin-top: 5rem;
  background-color: #00DFCC;
  padding: 1.625rem;
  border-radius: 1rem;

  &__content {
    display: flex;
    align-items: center;

    img {
      width: 40%;
    }
  }

  &__title {
    line-height: 140%;
    letter-spacing: 0.2rem;
  }

  &__btn {
    font-family: Visitor;
    font-size: 1.125rem;
    padding: .625rem 1.25rem;
    background-color: $lightBlueColor;
    color: $whiteColor;
    border: none;
    outline: none;
    border-radius: 1rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 3px 3px $lightBlueColor;
    }
  }
}
</style>