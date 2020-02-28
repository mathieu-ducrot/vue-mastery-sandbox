<template>
  <div>
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page !== 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev Page
      </router-link>
      |
    </template>
    <template v-if="this.event.eventsTotal > this.page * this.perPage">
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
  data() {
    return {
      perPage: 3
    }
  },
  //https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: this.perPage,
      page: this.page // <-- What page we're on
    })
  },
  computed: {
    page() {
      // What page we're currently on
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['event', 'user'])
  }
}
</script>

<style scoped></style>
