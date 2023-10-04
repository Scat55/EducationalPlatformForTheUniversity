<script setup>
import Header from '@/components/Header.vue';
import RegForm from '@/components/RegForm.vue';
import Robot from '../components/Robot.vue';
import Computer from '../components/Computer.vue';
import Positive from '../components/Positive.vue';
import BigForm from '../components/BigFrom.vue';
import LastInfo from '../components/LastInfo.vue';
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
    <Computer />
    <Positive />
    <BigForm />
    <LastInfo />
  </main>
</template>


<style lang="scss"></style>