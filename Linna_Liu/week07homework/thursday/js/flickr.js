Vue.component("photo-result", {
  props: ["photo"],
  // template: '<img v-bind:src="ImageURL(photo)">',
  //or shorten the v-bind:
  template: '<img @click="doSomething(photo)" :src="ImageURL(photo)" :title="photo.title"></a>',
  methods: {
    ImageURL: function(p){
      return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`
    },
    doSomething: function(p){
      this.$emit("trigger_details", p, "a string")
    }
  }
})



const app = new Vue ({
  el: "#appRoot",
  data: {
    searchText: "",
    id: '',
    page: 1,
    results: [],
    details: {},
    isFullScreen: false
  },
  methods: {
    doSearch: function(){
      // console.log(this.searchText);
      $.getJSON("https://api.flickr.com/services/rest/", {
        api_key: "Your-api-key",
        method: 'flickr.photos.search',
        text: this.searchText,
        format: 'json',
        nojsoncallback: 1,
        page: this.page
      })
      .done(data => this.results = data.photos.photo)
      .fail(e => console.warn);
    },
    trigger: function(photoItem, string){

      console.log('trigger', photoItem, string);
      // return;
      //full url: https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=2f5ac274ecfac5a455f38745704ad084&photo_id=42398798032&format=json&nojsoncallback=1
      $.getJSON("https://api.flickr.com/services/rest/", {
        api_key: "Your-api-key",
        method: 'flickr.photos.getInfo',
        photo_id: photoItem.id,
        format: 'json',
        nojsoncallback: 1,
      })
      .done(data=> this.details = data.photo)
      .fail(e => console.warn)
    }
  }
});
