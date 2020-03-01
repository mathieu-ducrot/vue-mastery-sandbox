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
import { formFieldMixin } from '../mixins/formFieldMixin'

export default {
  name: 'BaseInput',
  mixins: [formFieldMixin],
  computed: {
    // Resolving precedence about input event when inheriting the input event for vuelidate
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue // last definition take precedence so we can emit properly
      }
    }
  }
}
</script>

<style scoped></style>
