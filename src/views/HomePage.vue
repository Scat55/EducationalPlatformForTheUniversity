<script setup>
import Header from '@/components/Header.vue';
import RegForm from '@/components/RegForm.vue';
import Robot from '../components/Robot.vue';
import { useCounterStore } from '../stores/counter';


const status = useCounterStore()


</script>

<template>
  <RegForm v-if="status.statusForm" />
  <header>
    <Header />
  </header>

  <main class="main">
    <Robot />

  </main>
</template>


<style lang="scss"></style>