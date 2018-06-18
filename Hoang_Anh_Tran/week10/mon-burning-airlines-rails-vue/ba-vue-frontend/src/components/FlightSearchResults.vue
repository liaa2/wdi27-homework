<template>
  <div>
    <h2>Results</h2>

    <div class="container">

      <div class="row bg-primary text-white">
        <div class="col-4">Date</div>
        <div class="col-2">Flight</div>
        <div class="col-2">Plane</div>
        <div class="col-2">Origin</div>
        <div class="col-2">Destination</div>
      </div>

      <div class="row" v-if="results.length === 0">
        <div class="col-12">Loading...</div>
      </div>

      <div class="row flight-row" v-for="flight in results" @click="flightDetails(flight.id)">
        <div class="col-4">{{flight.departure_date_formatted}}</div>
        <div class="col-2">{{flight.flight_number}}</div>
        <div class="col-2">{{flight.airplane.name}}</div>
        <div class="col-2">{{flight.origin}}</div>
        <div class="col-2">{{flight.destination}}</div>
      </div>

    </div> <!-- container -->

  </div>
</template>

<script>
const FLIGHT_SEARCH_URL = 'http://localhost:3000/flights/search.json';
import axios from 'axios';
  export default{
    //data() guarantees that this is the new object, not several data pointing to the same object. Return make sure a new data is returned.
    props: ['origin', 'destination'], // we get these props from the router URL params, ie /search/:origin/:destination
    data(){
      return {
        // empty array for AJAX to return
        results: []
      };
    },
    created(){
      // similar to ComponentDidMount() in React.js - happening one when the component loads
      // code that runs when the component is created

      // perform AJAX request to get searh results from Rails
      axios.get( FLIGHT_SEARCH_URL, {
        params: {
          origin: this.origin, // these will become key:val pairs in the URL query strin
          destination: this.destination // ie.
        }
      })
      // es6 function, not change the "this"
      .then(response => {
        console.log('AJAX response', response);
        this.results = response.data;
      });

    },
    methods: {
      flightDetails(id){
        console.log('flightDetails(): ', id);
        this.$router.push({
          name: 'flightDetails',
          params: {id}
        });
      }
    },

  };
</script>

<style scoped>
.flight-row:hover {
  cursor: pointer;
  background-color: #EEEEEE;
  font-weight: bold;
}
</style>
