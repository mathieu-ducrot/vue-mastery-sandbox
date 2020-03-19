<template>
  <div>
    <h1>Dashboard</h1>
    <v-data-table
      :headers="headers"
      :items="employees"
      :items-per-page="5"
      class="elevation-1"
      @click:row="selectRow"
      multi-sort
    ></v-data-table>
    <v-snackbar v-model="snackbar">
      You have selected {{ selectedEmployee.name }},
      {{ selectedEmployee.title }}
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import employees from '@/data/employees.json'

export default {
  data() {
    return {
      selectedEmployee: {
        name: '',
        title: ''
      },
      snackbar: false,
      headers: [
        { text: '#', value: 'id' },
        {
          text: 'Name',
          align: 'start',
          value: 'name'
        },
        {
          text: 'Title',
          value: 'title',
          sortable: false
        },
        { text: 'Salary', value: 'salary' }
      ]
    }
  },
  methods: {
    selectRow(event) {
      this.snackbar = true
      this.selectedEmployee.name = event.name
      this.selectedEmployee.title = event.title
    }
  },
  computed: {
    employees() {
      return employees
    }
  }
}
</script>

<style scoped></style>
