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
import { reactive, computed, toRefs } from '@vue/composition-api'
export default {
  setup() {
    // const capacity = ref(3)
    // const attending = ref(['Tim', 'Bob', 'Joe'])
    //
    // const spacesLeft = computed(() => {
    //   return capacity.value - attending.value.length
    // })

    // Alternate reactive syntax
    const event = reactive({
      capacity: 4,
      attending: ['Tim', 'Bob', 'Joe'],
      spacesLeft: computed(() => {
        return event.capacity - event.attending.length
      })
    })

    function increaseCapacity() {
      event.capacity++
    }

    // return toRefs(event) if destructuring was not needed directly return the toRefs
    return { ...toRefs(event), increaseCapacity }
  }
}
</script>

<style scoped></style>
