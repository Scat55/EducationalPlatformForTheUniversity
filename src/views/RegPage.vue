<script setup>

const proffesion = ['Ученик', 'Учитель']
</script>

<template>
  <div class="reg">
    <div class="container">

      <form
        action="#"
        class="reg__form"
      >
        <p class="reg__form-title">Регистрация</p>
        <div class="reg__info">
          <span class="reg__info-name">Имя</span>
          <input
            type="text"
            class="reg__input"
          >
        </div>
        <div class="reg__info">
          <span class="reg__info-name">Пароль</span>
          <input
            type="password"
            class="reg__input"
          >
        </div>
        <select
          name="proffesion"
          id="proffesion"
          class="reg__form-prof"
        >
          <option
            v-for="prof in proffesion"
            :value="prof"
            class = ""
          >
            {{ prof }}
          </option>
        </select>

      </form>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.reg {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;

  &__form {
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

    &-title {
      font-weight: bold;
      font-size: 1.3rem;
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
}</style>