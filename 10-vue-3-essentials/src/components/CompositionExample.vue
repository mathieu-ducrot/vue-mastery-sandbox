<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
export default {
  setup() {
    const capacity = ref(3)
    const attending = ref(['Tim', 'Bob', 'Joe'])

    const spacesLeft = computed(() => {
      return capacity.value - attending.value.length
    })

    function increaseCapacity() {
      capacity.value++
    }
    return { capacity, attending, spacesLeft, increaseCapacity }
  }
}
</script>

<style scoped></style>
