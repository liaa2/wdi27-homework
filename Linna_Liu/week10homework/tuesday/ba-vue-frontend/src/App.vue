<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <h1>BUUUUUURNIIING AIRRRLINNNNNESSS</h1>
        </div>
        <div class="col-1"></div>
      </div>
      <div v-if="this.loginStatus">
        <button @click="logout">logout</button>
      </div>
      <div v-else>
        <button @click="toLoginPage">login</button>
      </div>
      <br>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <!-- like Rails "yield" -->
          <router-view @logger="verified"/>
        </div>
        <div class="col-1"></div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data(){
    return {
      loginStatus: false
    }
  },
  methods: {
    setJWTHeaderFromLocalStorage(){
      if (window.localStorage) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("authToken");
      }
    },
    toLoginPage(){
      this.$router.push({
        name: 'loginForm'
      })
    },
    logout(){
      this.loginStatus = false
    },
    verified(){
      this.loginStatus = true
      this.$router.push({
        name: "flightSearch"
      })
    }
  },
  created(){
    this.setJWTHeaderFromLocalStorage();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
