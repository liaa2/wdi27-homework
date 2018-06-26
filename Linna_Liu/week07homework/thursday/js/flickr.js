Vue.component("photo-result", {
  props: ["photo"],
  // template: '<img v-bind:src="ImageURL(photo)">',
  //or shorten the v-bind:
  template: '<img @click="doSomething(photo)" :src="imageURL(photo)" :title="photo.title"></a>',
  methods: {
    imageURL: function(p){
      return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`
    },
    doSomething: function(p){
      this.$emit("trigger_details", p, "a string")
    }
  }
})

Vue.component('photo-fullscreen', {
  props: ['photo'],
  template: `
    <div>
      <h2>Image Details</h2>
      <div v-if="photo.owner">
        <p>Username: {{ photo.owner.username }}</p>
        <div v-if="photo.owner.title">
        <p>Title: {{ photo.owner.title._content }}</p>
        </div>
      </div>
      <p>Photo Taken: {{ photo.dates.taken }}</p>
      <img :src="fullscreenURL(photo)" />
    </div>
  `,
  created: function(){
    console.log('created!', this.photo);
  },
  methods: {
    fullscreenURL: function(p){
      console.log({p});
      return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_b.jpg`
    }
  }
});


const app = new Vue ({
  el: "#appRoot",
  data: {
    searchText: "dogs",
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
        api_key: "2f5ac274ecfac5a455f38745704ad084",
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
        api_key: "2f5ac274ecfac5a455f38745704ad084",
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
