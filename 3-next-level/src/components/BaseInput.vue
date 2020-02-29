<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
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
