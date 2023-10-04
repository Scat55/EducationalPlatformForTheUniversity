<script setup>
import Header from "@/components/Header.vue";
import Button from "@/UI/Button.vue";
import FilterItems from "@/components/FilterItems.vue";
import ComplexityTasks from "@/components/ComplexityTasks.vue";
</script>
<script>
import Task from "@/components/Task.vue";

export default {
  components: {
    Task
  },
  data() {
    return {
      zadania: [{
        title: "Сложение двух числе",
        topic: "Математика",
        complexity: "Уровень сложности: Тяжелые",
        bodyTask: "sadkjruesiljfkldxlrjk5hjlghjldfxrhljg drg heslrg ersg hkle lkdfxhgljrfhdls ghrfj edrgehsjlgh ldj f gsjl hsdfjl; g dfg jldsf gdr gdf ;lgjdf hgjdfhjgdfl; d gjldfh gkjsdf gjl;dfh gldf nlg hdfgh dflhg ldfhgl hdfg hdfl gsd"
      }, {
        title: "sdrgrsdgsdrgxdrgxrtdht",
        topic: "Математика",
        complexity: "Уровень сложности: Тяжелые",
        bodyTask: "Нужно будет сложить два числа"
      }, {
        title: "Сложение двух числе",
        topic: "Математика",
        complexity: "Уровень сложности: Тяжелые",
        bodyTask: "Нужно будет сложить два числа"
      }, {
        title: "Сложение двух числе",
        topic: "Математика",
        complexity: "Уровень сложности: Тяжелые",
        bodyTask: "Нужно будет сложить два числа"
      }, {
        title: "Сложение двух числе",
        topic: "Математика",
        complexity: "Уровень сложности: Тяжелые",
        bodyTask: "Нужно будет сложить два числа"
      }, {
        title: "Сложение двух числе",
        topic: "Математика",
        complexity: "Уровень сложности: Тяжелые",
        bodyTask: "Нужно будет сложить два числа"
      }, {
        title: "Сложение двух числе",
        topic: "Математика",
        complexity: "Уровень сложности: Тяжелые",
        bodyTask: "Нужно будет сложить два числа"
      }, {
        title: "Сложение двух числе",
        topic: "Математика",
        complexity: "Уровень сложности: Тяжелые",
        bodyTask: "Нужно будет сложить два числа"
      },]
    }
  }
}


</script>

<template>
  <Header/>
  <div class="main">

    <div class="window">

      <div class="div1">
        <div>Задания</div>
        <div>Слева вы сможете выбрать фильтры для заданий. <br> По каким предметам, сложность и тд.</div>
      </div>

      <div class="div2">
        <div>
          <FilterItems/>
          <ComplexityTasks/>
        </div>

        <button class="btn_filter">Применить фильтр</button>
        <button class="btn_filter">Сбросить</button>
      </div>

      <div class="div3" >
        <div v-for="task in zadania">
          <Task :task="task" />
        </div>
      </div>

    </div>

  </div>

</template>

<style scoped lang="scss">
@import '../../../test/src/assets/styles/styles';

.btn_filter {
  margin-top: 50px;
}

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10px;
}

.window {
  width: 1270px;
  //margin: 0 5% 0 5%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr; /* Строка для div1 и остальное пространство для div2 и div3 */
  gap: 10px; /* Расстояние между элементами */
}

.div1 {
  grid-column: 1 / span 3; /* div1 занимает 3 столбца */
  text-align: center;
}

.div2 {
  grid-row: 2 / span 1; /* div2 находится во второй строке */
  text-align: center;
  height: 400px;
}

.div3 {
  grid-column: 2 / span 2; /* div3 находится в третьем столбце */
  grid-row: 2 / span 1; /* div3 находится во второй строке */
  text-align: center;
}

/* Для оформления и добавления рамок можно добавить следующий стиль: */
.div1, .div2, .div3 {
  border: 2px solid $lightBlueColor;
  padding: 10px;
  border-radius: 1rem;
}
</style>

