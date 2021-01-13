<template>
  <div id="app">
    <CompositionExample />
    <ModularizingExample />
  </div>
</template>

<script>
import CompositionExample from './components/CompositionExample.vue'
import ModularizingExample from './components/CompositionExample.vue'

export default {
  name: 'App',
  components: {
    CompositionExample,
    ModularizingExample
  }
}
</script>

<style></style>
