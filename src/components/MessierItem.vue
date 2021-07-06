<template>
  <div class="messier-object__description">
    <img class="messier-object__description-img" :src="img" alt="изображение галактики">
    <h2>{{ name }}</h2>
    <router-link :to="{name: 'AboutObject', params: {id: id,}}">Подробнее</router-link>
    <router-link :to="`/${id}`">Подробнее ещё</router-link>
    <router-view/>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'messierItem',
  props: {
    name: String,
    img: String,
    year: String,
    constellation: String,
    objectType: String,
    distance: Number,
    id: String,
  },
  data() {
    return {
      showClass: 'messier-object__modal-overlay',
      hideClass: 'messier-object__modal-overlay--hide',
    };
  },
  computed: {
    ...mapGetters(['objectId', 'objectImg', 'objectYear', 'objectDistance', 'objectTypes', 'objectConstellation']),
  },
  methods: {
    showMorePopup() {
      const modalClass = this.$el.querySelector('.messier-object__modal-overlay');
      this.$emit('showMorePopup', modalClass, this.hideClass);
    },
    closeMorePopup() {
      const modalClass = this.$el.querySelector('.messier-object__modal-overlay');
      this.$emit('closeMorePopup', modalClass, this.hideClass);
    },
  },

};
</script>

<style lang="scss">

.messier-object__description {
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    margin: 0;
  }
}

.messier-object__description-img {
  width: 50px;
  height: 50px;
}

.messier-object__modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(33, 37, 41, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  &--hide {
    display: none;
  }
}

</style>
