<template>
  <form @submit.prevent="submit">
    <input
      type="email"
      placeholder="What's your email"
      :class="{ error: $v.email.$error }"
      v-model.trim="email"
      @blur="$v.email.$touch()"
    />
    <p v-if="!$v.email.email" class="errorMessage">
      Please enter a valid email address.
    </p>
    <p v-if="!$v.email.required" class="errorMessage">Email is required.</p>

    <button type="submit" :disabled="$v.$invalid">Submit!</button>
  </form>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      email: null
    }
  },
  validations: {
    email: {
      required,
      email
      // Check https://vuelidate.js.org/#custom-validators if needed
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log('Form Submission:', this.email)
      }
    }
  }
}
</script>
