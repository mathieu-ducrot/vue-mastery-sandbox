<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <p>{{ getEventById(2) }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'EventCreate',
  // # Computed example to access the store
  // computed: {
  //   userName() {
  //     return this.$store.state.user.name
  //   },
  //   userID() {
  //     return this.$store.state.user.id
  //   }
  // }
  // # Computed example with mapState from vuex
  // computed: mapState({
  //   userName: state => state.user.name,
  //   categories: state => state.categories
  // })
  // # Simplified syntax for top-level State
  // computed: mapState(['categories', 'user'])
  computed: {
    // catLength() {
    //   return this.$store.getters.catLength // <-- do not mention ()
    // },
    // getEvent() {
    //   return this.$store.getters.getEventById
    // },
    ...mapGetters(['catLength', 'getEventById']),
    ...mapState(['categories', 'user']) // <-- using object spread operator
  }
}
</script>

<style scoped></style>
