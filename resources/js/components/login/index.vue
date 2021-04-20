/** * Created by vouill on 11/13/17. */

<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="username" type="text" placeholder="Snoopy" />
      <label>Password</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <hr />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
</style>

<script>
const AUTH_REQUEST = 'AUTH_REQUEST'
//import { AUTH_REQUEST } from "actions/auth";

export default {
  name: "login",
  data() {
    return {
      email: "test@example.com",
      password: "test123"
    };
  },
  methods: {
    login: function() {
      const { email, password } = this;
      this.$store.dispatch('auth/'+AUTH_REQUEST, { email, password }).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>
