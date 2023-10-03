<script setup>
import Header from '@/components/Header.vue';
import RegForm from '../components/RegForm.vue';
import { useCounterStore } from '../stores/counter';

const status = useCounterStore()

</script>

<template>
  <RegForm v-if="status.statusForm" />
  <header>
    <Header />
  </header>
</template>


<style lang="scss" scoped></style>