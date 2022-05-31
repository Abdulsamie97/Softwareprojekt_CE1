<template>
<div>
<h1>Register</h1>

<input
  type="email"
  name="email"
  v-model="email"
  placeholder="email" />
<br>
<input
  type="password"
  name="password"
  v-model="password"
  placeholder="password" />
<br>
<button @click="register">
Register
</button>
</div>
</template>
<!-- watch and mounted shows how two-way binding on v model works for input boxes-->
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello World'
    }, 2000)
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }

}
</script>

<style scoped>

</style>
