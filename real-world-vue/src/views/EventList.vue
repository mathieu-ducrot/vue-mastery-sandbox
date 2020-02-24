<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'EventList.vue',
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    //https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response) // Logs out the error
      })
  }
}
</script>

<style scoped></style>
