<script setup>

</script>

<template>
  <div class="footer">
    <div class="container">

      <div class="footer__logo">
        <img
          src="../assets/images/Logo_px (2).png"
          alt="Logo"
          class="footer__logo-img"
        >
        <p class="footer__logo-title">ЛГПУ имени П.П. Семенова-Тян-Шанского</p>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.footer {
  background-color: $accentColor;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  margin-top: 5rem;

  &__logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    &-img {
      width: 5.3rem;
      margin-top: .625rem;
      margin-bottom: 1rem;
    }

    &-title {
      color: $whiteColor;

    }
  }
}
</style>