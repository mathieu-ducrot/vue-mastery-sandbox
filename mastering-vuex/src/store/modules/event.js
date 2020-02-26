import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = {
  events: [],
  eventsTotal: 0,
  event: {}
}
export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}

export const actions = {
  createEvent({ commit, rootState }, event) {
    console.log('User creating Event is ' + rootState.user.user.name)

    // dispatch('moduleName/actionToCall', null, { root: true }) <-- call action from another namespaced module

    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  },
  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS', response.data)
        commit('SET_EVENTS_TOTAL', response.headers['x-total-count'])
      })
      .catch(error => {
        console.log('There was an error:', error.response) // Logs out the error
      })
  },
  fetchEvent({ commit, getters }, id) {
    var event = getters.getEventById(id) // See if we already have this event

    if (event) {
      // If we do, set the event
      commit('SET_EVENT', event)
    } else {
      // If not, get it with the API.
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
}

export const getters = {
  // Dynamic Getters
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}
