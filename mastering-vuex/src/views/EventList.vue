<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <template v-if="page !== 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev Page
      </router-link>
      |
    </template>
    <template v-if="this.eventsTotal > this.page * 3">
      <router-link :to="{ name: 'event-list', query: { page: page + 1 } }">
        Next Page
      </router-link>
    </template>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'EventList.vue',
  components: {
    EventCard
  },
  //https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page // <-- What page we're on
    })
  },
  computed: {
    page() {
      // What page we're currently on
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['events', 'eventsTotal'])
  }
}
</script>

<style scoped></style>
