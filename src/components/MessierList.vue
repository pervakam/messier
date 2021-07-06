<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="(it, index) in messierObjects" :key="index">
          <messierItem
            :img="it.fields.image"
            :name="it.fields.messier"
            :year="it.fields.annee"
            :distance="it.fields.distance"
            :objectType="it.fields.objet"
            :constellation="it.fields.const"
            :id="it.recordid">
          </messierItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import messierItem from '@/components/MessierItem.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'MessierList',
  components: {
    messierItem,
  },
  props: {
    congratulation: String,
    messierObjects: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    ...mapActions([
      'GET_DATA_FROM_API',
    ]),
  },
  computed: {
    ...mapState([
      'loading',
    ]),
  },
  created() {
    this.GET_DATA_FROM_API();
  },
};
</script>

<style scoped lang="scss">
ul {
  position: relative;
  list-style: none;
  margin: 40px auto 0;
  padding: 0;
  max-width: 1280px;
  max-height: 3100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  li {
    width: 22%;
    margin: 0 2em 2em 0;
  }
}
</style>
