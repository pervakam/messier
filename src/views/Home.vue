<template>
  <div class="home">
    <img class="home__logo" alt="Vue logo" src="../assets/messe.jpg">
      <div>
        <h1>Сколько объектов каталога Месье на этой картинке?</h1>
        <label for="count-input">Ваш ответ: </label>
        <input id="count-input" :value="count" @input="countCheck">
        <p>{{ count }}</p>
      </div>
     <Congratulations
      :congratulation="congratulations"
      :messierObjects="MESSIER_API"
      @showMorePopup="showMorePopup"
      @closeMorePopup="closeMorePopup"
      v-if="count === answer">
    </Congratulations>
  </div>
</template>

<script>
import Congratulations from '@/components/Congratulations.vue';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Congratulations,
  },
  data() {
    return {
      question: 'Сколько галактик на этой картинке?',
      congratulations: 'БИНГО!',
    };
  },
  computed: {
    ...mapGetters(['MESSIER_API', 'objectsSum']),
    ...mapState([
      'count', 'answer',
    ]),
  },
  methods: {
    showMorePopup(modalClass, hideClass) {
      modalClass.classList.remove(hideClass);
    },
    closeMorePopup(modalClass, hideClass) {
      modalClass.classList.add(hideClass);
    },
    addCount() {
      this.$store.commit('addCount');
    },
    removeCount() {
      this.$store.commit('removeCount');
    },
    countCheck(evt) {
      this.$store.commit('countCheck', evt);
    },
    // ...mapActions([
    //   'GET_DATA_FROM_API',
    // ]),
  },
  // created() {
  //   this.GET_DATA_FROM_API();
  // },
};
</script>

<style lang="scss">

.home {
  &__logo {
    width: auto;
    height: 400px;
  }
}
</style>
