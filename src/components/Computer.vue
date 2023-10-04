<script setup>

</script>

<template>
  <div class="computer">
    <div class="container">

      <div class="computer__content">
        <img
          src="../assets/images/PIC_index/comp.png"
          alt="Computer"
          class="computer__img"
        >
        <p class="computer__title">Уроки, тесты, проекты по школьной программе<span class="computer__subtitle">Смотреть
            задания -></span></p>

      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.computer {

  margin-top: 3.125rem;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.75rem;
  }

  &__img {
    width: 20%;
    border-radius: 9rem;
  }

  &__title {
    font-size: 3rem;
  }

  &__subtitle {
    display: block;
    padding-top: 1rem;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
      transform: translateX(.625rem);
    }
  }
}
</style>