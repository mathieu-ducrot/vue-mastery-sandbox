<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
    />
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
  computed: {
    // Resolving precedence about input event when inheriting the input event for vuelidate
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue // last definition take precedence so we can emit properly
      }
    }
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
