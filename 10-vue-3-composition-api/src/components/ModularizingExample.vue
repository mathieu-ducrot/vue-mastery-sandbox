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
import useEventSpace from '@/use/event-space';
// import useMapping from "@/use/mapping"; other Composition Function

export default {
  setup() {
    const { capacity, attending, spacesLeft, increaseCapacity } = useEventSpace();
    // const { map, embedId } = useMapping();

    // it's a Vue 3 Best Practice to be explicited with local objects instead of return { ...useEventSpace(), ...useMapping() }
    return { capacity, attending, spacesLeft, increaseCapacity };
  }
}

</script>

<style scoped></style>
