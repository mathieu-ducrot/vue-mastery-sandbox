<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select
      :value="value"
      @change="updateValue"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="option === value"
        >{{ option }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      // https://developer.mozilla.org/fr/docs/Web/API/Event/target
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped></style>
