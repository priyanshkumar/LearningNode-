var axios = require("axios");
var movieName = "";
movieName = process.argv.slice(2).join("+");
axios({
  method: "GET",
  url:
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
})
  .then(function(res) {
    console.log(res);
  })
  .catch(function(error) {
    console.log(error);
  });
