import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FlightSearch from '@/components/FlightSearch';
import FlightSearchResults from '@/components/FlightSearchResults';

import FlightDetails from '@/components/FlightDetails';
import ReservationDetails from '@/components/ReservationDetails';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/search',
      name: 'flightSearch',
      component: FlightSearch
    },
    {
      path: '/search/:origin/:destination',
      name: 'searchResults',
      component: FlightSearchResults,
      props: true
      // takes origin and destination as props
    },
    {
      path: '/flights/:id',
      name: 'flightDetails',
      component: FlightDetails,
      props: true
    },
    {
      path: '/reservation/create',
      name: 'reservationDetails',
      component: ReservationDetails,
      props: true
    }

  ]
})
