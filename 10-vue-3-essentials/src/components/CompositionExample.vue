<template>
  <div>
    <div>Capacity: {{ capacity }}</div>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  setup() {
    const capacity = ref(3)

    function increaseCapacity() {
      capacity.value++
    }
    return { capacity, increaseCapacity }
  }
}
</script>

<style scoped></style>
