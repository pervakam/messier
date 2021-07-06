<template>
  <div class="home__congratulations">
    <h1>{{ congratulation }}</h1>
    <button v-on:click="show = !show">
      Посмотреть
    </button>
    <transition name="top">
      <messierList
        v-if="show"
        :messierObjects="messierObjects">
      </messierList>
    </transition>
  </div>
</template>

<script>
import messierList from '@/components/MessierList.vue';

export default {
  name: 'Congratulations',
  components: {
    messierList,
  },
  props: {
    congratulation: String,
    messierObjects: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  &__congratulations {
    margin: 0;
    color: midnightblue;
  }
}

.top-enter-active,
.top-leave-active {
  position: relative;
  animation: 1s slide;
}

.top-enter,
.top-leave-to {
  position: relative;

}

@keyframes slide {
  0% {
    transform: translateX(100vw);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
