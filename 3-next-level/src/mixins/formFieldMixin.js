/* A mixin kinda work like a trait in PHP where it encapsulate a small piece of functionality for any components that import it.
 * Every option (props, methods ...) from the mixin can be override by the component if the option is declare with
 * the same name. */

export const formFieldMixin = {
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
      this.$emit('input', event.target.value)
    }
  }
}
