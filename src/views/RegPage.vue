<script setup>

</script>

<template>
  <div class="reg">
    <div class="container">
      <form
        action="#"
        class="reg__form"
      >
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
    }
  }

  &__input {
    border: none;
    outline: none;
    background-color: transparent;
  }
}
</style>