<template lang="html">
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>Flight Details {{iterations}}</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-3 title">
          Flight Number
        </div>
        <div class="col-6">
          {{flight.flight_number}}
        </div>
      </div>

      <div class="row">
        <div class="col-3 title">
          Date
        </div>
        <div class="col-6">
          {{flight.departure_date_formatted}}
        </div>
      </div>

      <div class="row">
        <div class="col-3 title">
          Route
        </div>
        <div class="col-6">
          {{flight.origin}} &#x21E8; {{flight.destination}}
        </div>
      </div>

    </div> <!--container-->
    <br/>

    <div v-if="flight.airplane">
      <div class="plane-row" v-for="row in flight.airplane.rows">
        <div class="label text-center">{{row}}</div>
        <div
        v-for="col in flight.airplane.cols"
        class="plane-seat text-center"
        :class="seatStatus(row, col)"
        @click="bookSeat(row, col)">
          {{col | toSeatLetter}}
        </div>
        <div class="label text-center">{{row}}</div>
      </div>
    </div>

  </div>
</template>

<script>
const FLIGHT_SEARCH_URL = 'http://localhost:3000/flights';
import axios from "axios";
export default {
  props: ["id"],
  data(){
    return {
      flight: {},
      iterations: 0,
      user_id: 0
    }
  },
  created(){
    axios.get(`${FLIGHT_SEARCH_URL}/${this.id}.json`)
    .then(response => {
      this.flight = response.data;
    })
  },
  methods: {
    decodeJWT(token){
      //split returns an array
      const base64URL = token.split(".")[1];
      const base64 = base64URL.replace('-', "+").replace("_", "/")
      return JSON.parse(atob(base64));
    },
    bookSeat(row, col){
      axios.post(`${FLIGHT_SEARCH_URL}/${this.id}.json`, {
        user_id: this.user_id,
        flight_id: this.id,
        row: row,
        col: col
      })
      .then(response => {
        this.flight.reservations.push(response.data)
        // console.log(response.data)
        // console.log(window.localStorage.getItem("authToken"));
        let jwt = window.localStorage.getItem("authToken");
        // console.log(jwt);
        let decoded = this.decodeJWT(jwt)
        // console.log(decoded);
        let id = decoded.sub
        // console.log(id);
        this.user_id = id
      })
      .catch(err => {
        console.warn("error", err);
      })
    },
    seatStatus(row, col){
      for (let i = 0; i < this.flight.reservations.length; i++) {
        const res = this.flight.reservations[i];
        this.iterations ++;
        if (row === res.row && col === res.col) {
          return "occupied";
        }
      }
      return "free";
    }
  },
  filters: {
    toSeatLetter(val){
      return String.fromCharCode(64 + parseInt(val));
    }
  }
}
</script>

<style scoped>
.title {
  font-weight: bold
}

.plane-row {
  min-width: 500px;
}

.plane-row .label{
  padding: 10px;
  display: inline-block;
  width:60px !important;
  height:60px !important;
  font-weight: bold;
}

.plane-seat:hover {
  background-color: rgb(209, 209, 209);
}

.plane-seat {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid #CCCCCC;
  margin-right:6px;
  margin-bottom: 6px;
  cursor: pointer;
  line-height: 40px;
}

.occupied {
  background-color: red;
}

.free {
  background-color: green;
}

</style>
