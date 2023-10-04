<script setup>
import Header from '@/components/Header.vue';
import RegForm from '@/components/RegForm.vue';
import { useCounterStore } from '../stores/counter';


const status = useCounterStore()

</script>

<template>
  <RegForm v-if="status.statusForm" />
  <header>
    <Header />
  </header>

  <main class="no-scroll">
    <div class="container no-scroll">
      <!-- <div class="test">
        <p>Дистанционное обучение открывает перед вами новые горизонты. Благодаря нашим вебинарам и видеоурокам, вы можете
          учиться у лучших специалистов, не выходя из дома. Доступ к знаниям 24/7 в любой точке мира.</p>
        <img
          src="../assets/images/PIC_index/kandinsky-download-1696327693774.png"
          alt=""
        >
      </div> -->

    </div>

  </main>
</template>


<style lang="scss" scoped>
.test {
  display: flex;
  align-items: center;

  img {
    width: 40%;
  }
}

.no-scroll {
  overflow: hidden;
  height: 100%;
}
</style>