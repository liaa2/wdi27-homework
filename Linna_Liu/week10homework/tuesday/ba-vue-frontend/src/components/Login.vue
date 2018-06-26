<template lang="html">
  <div class="text-center">
    <h3>Login</h3>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="doLogin">Login</button>
    <br>
    <div v-if="error" class="login-error">
      {{error}}
    </div>
    <br>
    <button @click="testAJAX">Test Request</button>
  </div>
</template>

<script>
import axios from 'axios';
const SERVER_AUTH_TOKEN_URL = 'http://localhost:3000/user_token';
export default {
  data(){
    return {
      email: 'one@one.com',
      password: "chicken",
      error: '',
      user_id: 0,
      name: ""
    }
  },
  methods: {
    testAJAX(){
      console.log("clicked");
      axios.get('http://localhost:3000/flights/27.json')
      .then(response => {
        console.log("SUCCESS", response.data);
      })
      .catch(err=>{
        console.log("fail", err);
      })
    },
    decodeJWT(token){
      //split returns an array
      const base64URL = token.split(".")[1];
      const base64 = base64URL.replace('-', "+").replace("_", "/")
      return JSON.parse(atob(base64));
    },
    doLogin(){
      // console.log(this.email, this.password);
      //axios.post returns a promise
      axios.post(SERVER_AUTH_TOKEN_URL, {
        auth: {email: this.email, password:this.password}
        // auth: this.$data
      })
      .then(response => {
        // console.log(response.data);
        if (response.data.jwt) {
          // console.log(response.data);
          console.log(response.data.jwt);
          //the output sup is user.id
          // console.log(this.decodeJWT(response.data.jwt));
          // let decoded = this.decodeJWT(response.data.jwt);
          // let id = decoded.sub
          // this.user_id = id
          // console.log(this.user_id);


          // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Mjk0MDUzOTgsInN1YiI6MjksIm5hbWUiOiJUZXN0IHVzZXIgMSJ9.6FgTIWB6h8NC1GtvEb4nAuamsl49Q_o1xNAqMTWk1EE

          //This header-setting line also appears in App.vue, but that's too late for us here;it will already have run by the time we perform this login - so we have to set the header again here, for *this* page lifetime
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          if (window.localStorage) {
            localStorage.setItem("authToken", response.data.jwt)
          }
        }

        this.$emit("logger")
      })
      .catch(err => {
        console.warn("FAIL", err);
        this.error = "Invalid username or password."
      })

      this.$router.push({ name: 'flightSearch'})
    }
  }
}
</script>

<style lang="css">
</style>
