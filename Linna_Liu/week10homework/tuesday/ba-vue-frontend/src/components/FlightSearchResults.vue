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

      <div class="row" v-if="results.length ===0">
        <div class="col=12">
          Loading.....
        </div>
      </div>

      <div class="row flight-row" v-for="flight in results" @click="flightDetails(flight.id)">
        <div class="col-4">{{flight.departure_date_formatted}}</div>
        <div class="col-2">{{flight.flight_number}}</div>
        <div class="col-2">{{flight.airplane.name}}</div>
        <div class="col-2">{{flight.origin}}</div>
        <div class="col-2">{{flight.destination}}</div>
      </div>
    </div>
  </div>

</template>

<script>
const FLIGHT_SEARCH_URL = 'http://localhost:3000/flights/search.json';
import axios from 'axios';

export default {
  props: ['origin', 'destination'], //we get these props from the router URL params, i.e. /search/:origin/:destination
  data(){
    return {
      results: []
    };
  },
  created(){
    //code that runs when the component is created
    //(like React's componentDidMount())

    //perform AJAX request to get search results from Rails
    axios.get(FLIGHT_SEARCH_URL, {
      params: {
        origin: this.origin, //these will bedome key:val pairs in the URL querystring. 'this' means props
        destination: this.destination //i.e.
      }
    })
    .then(response => {
      console.log("AJAX response", response);
      this.results = response.data
    })
  },
  methods: {
    flightDetails(id){
      console.log("flightDetails():", id);
      this.$router.push({
        name:'flightDetails',
        params: {id} // or {id: id}
      })
    }
  },
}
</script>

<style scoped>
.flight-row:hover {
  cursor: pointer;
  background-color: #EEEEEE;
  font-weight: bold;
}
</style>
