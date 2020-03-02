<template>
  <div class="home">
    <button @click="toggleModal">Open</button>
    <!-- named transition -->
    <transition name="fade">
      <div v-if="isOpen" class="modal">
        <button @click="toggleModal">Close</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  // https://easings.net/fr
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
