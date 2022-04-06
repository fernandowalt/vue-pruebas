const app = Vue.createApp({
  // template:`<h1>Hola mundo</h1>
  // <p>Desde app.js</p>`

  data() {
    return {
      message: "hola mundo!!",
      quote: "I am batman",
      author: "Bruce wane",
    };
  },
  methods: {
    changeQoute(event) {
      console.log("Hola MUndo", event);
      this.author = "walter";
      this.capitalize()
    },
    capitalize() {
      this.quote = this.quote.toUpperCase()
    },
  },
});

app.mount("#myApp");
