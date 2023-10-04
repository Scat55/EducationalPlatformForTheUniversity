<script setup>

</script>

<template>
  <div class="big">
    <div class="container">
      <p class="big__title">Начние учиться уже сегодня!</p>
      <p class="big__subtitle">Зарегестируйтесь и получайте знания</p>

      <div class="big__content">
        <form
          action="#"
          class="big__form"
          @submit.prevent="handler()"
        >
          <div class="big__info">
            <span class="big__info-name ">Имя, фамилия</span>
            <input
              type="text"
              class="big__input name"
              v-model="userName"
            >
          </div>
          <div class="big__info">
            <span class="big__info-name">Пароль</span>
            <input
              type="password"
              class="big__input"
              v-model="userPass"
            >
          </div>
          <button
            class="big__form-btn"
            type="submit"
          >Регистрация</button>
        </form>

        <img
          src="../assets/images/space/space (6).png"
          alt=""
          class="big__img"
        >
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
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  &__img {
    width: 40%;
  }

}

.big {


  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    width: 35.5rem;
    height: 32.5rem;

    border-radius: 1rem;
    padding: 5.75rem;


    &-title {
      font-weight: bold;
      font-size: 1.3rem;
    }



    &-btn {
      padding: .625rem;
      color: $whiteColor;
      font-family: Visitor;
      border: none;
      border-radius: 0.5rem;
      letter-spacing: 0.15rem;
      cursor: pointer;
      background-color: $accentColor;

      &:hover {
        box-shadow: 0 0 20px 0px $accentColor;
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 3px solid $accentColor;
    border-radius: 0.5rem;
    padding: .625rem 1.25rem;

  }

  &__input {
    border: none;
    outline: none;
    font-size: 1rem;
    background-color: transparent;
    color: $whiteColor;

  }


}

.name {
  font-family: Visitor;
}
</style>