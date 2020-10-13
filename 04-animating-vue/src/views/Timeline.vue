<template>
  <div>
    <img class="runner first" src="../assets/runner.png" alt="runner" />
    <img class="runner second" src="../assets/runner.png" alt="runner" />
    <img class="runner third" src="../assets/runner.png" alt="runner" />
    <img class="runner fourth" src="../assets/runner.png" alt="runner" />
    <img class="runner fifth" src="../assets/runner.png" alt="runner" />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted() {
    let tl = gsap.timeline({
      repeat: -1, // -1 infinite looping
      repeatDelay: 1
    })
    tl.to('.first', { x: 700, duration: 2, ease: 'expo.out' })
    tl.to('.second', { x: 700, duration: 2, ease: 'expo.out' }, 0.5) // now with an absolute position
    tl.to('.third', { x: 700, duration: 2, ease: 'expo.out' }, '-=1.2')
    tl.to('.fourth', { x: 700, duration: 2, ease: 'expo.out' }, '<')
    tl.to('.fifth', { x: 700, duration: 2, ease: 'expo.out' }, '<0.3')
  }
}
</script>

<style scoped>
.runner {
  display: block;
  height: 5em;
  width: 5em;
  margin-top: 1.5em;
}
</style>
