<template>
  <div>
    <div class="messier-object__modal" v-if="messierObject">
      <img :src="messierObject.fields.image" alt="изображение галактики">
      <p>Год открытия {{ messierObject.fields.annee }} г.</p>
      <p>расстояние от Земли {{ messierObject.fields.distance }} световых лет</p>
      <p>Тип объекта {{ messierObject.fields.objet }}</p>
      <p>Созвездие {{ messierObject.fields.const }}</p>
      <router-link :to="{name: 'Home'}">назад</router-link>
    </div>
    <NotFound
      v-else>
    </NotFound>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import NotFound from '@/components/NotFound.vue';

export default {
  name: 'AboutObject',
  components: {
    NotFound,
  },
  methods: {
    closeMorePopup() {
      this.$emit('closeMorePopup');
    },
    ...mapActions([
      'GET_DATA_FROM_API',
    ]),
  },
  computed: {
    ...mapGetters(['object']),
    messierObject() {
      return this.object(this.$route.params.id);
    },
  },
  async created() {
    if (!this.messierObject) {
      await this.GET_DATA_FROM_API();
    }
  },
};
</script>

<style lang="scss">

.messier-object__modal {
  position: relative;
  background-color: white;
  box-sizing: border-box;
  padding: 40px;
  text-align: left;
  border-radius: 8px;
  width: 750px;

  img {
    width: 450px;
    height: 450px;
  }
}

</style>
