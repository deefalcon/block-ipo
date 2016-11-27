module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  rpc: {
    host: "localhost",
    port: 8545
  }
};


// rpc = truffle.connect("localhost:3823")

// app.get("/name", function(){
//   rpc.call.getName();

// }) 



//app.listen(3000)