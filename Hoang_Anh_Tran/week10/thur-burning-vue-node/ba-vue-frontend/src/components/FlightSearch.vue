<template>
  <div>
    <h2>Search</h2>
    <div class="search-form">
      <label>Origin:</label>
      <select v-model="origin">
        <option>Please select</option>
        <option>SYD</option>
        <option>SFO</option>
        <option>SIN</option>
        <option>JFK</option>
      </select>

      <label>Destination:</label>
      <select v-model="destination">
        <option>Please select</option>
        <option>SYD</option>
        <option>SFO</option>
        <option>SIN</option>
        <option>JFK</option>
      </select>
      <button @click="submitSearch">Search Flights</button>

    </div>
  </div>
</template>
<script>

export default {
  // Vue stores state in the 'data' property
  data() {
      return {
      origin: 'SYD',
      destination: 'JFK'
    }
  },

  methods: {
    //submitSearch: function(){ // ES5 key:value object property}
    // ES6 method:
    submitSearch(){
      console.log('clicked', this.origin, this.destination);

      // this.origin = 'SIN'; // dont have to do setState, change state, triggers a re-render
      // $('#origin').val()

      // $ sign indicates stuff from Vue
      this.$router.push({
        name: 'searchResults',
        params: this.$data
        // params: {
        //   origin: this.origin,
        //   destination: this.destination
        // }
      });
    }
  }
};


</script>

<style>

</style>
