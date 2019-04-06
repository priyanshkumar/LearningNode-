var fs = require("fs");

fs.appendFile("WriteRead.txt", process.argv[2] + ",", function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("WriteRead.txt updated");
});

fs.readFile("WriteRead.txt", "UTF-8", function(err, data) {
  if (err) {
    console.log(err);
  }

  console.log(data);
});
