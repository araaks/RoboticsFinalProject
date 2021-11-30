const express = require("express");
const app = express();
const port = 3000;
var net = require("net");
var client = new net.Socket();

var List = require("collections/list");

var buff = new List();

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

var sendCycle = function () {
  if (buff.length > 0) {
    var toSend = buff.shift();
    if (client.write(toSend)) {
      console.log("Sent: " + toSend);
      if (toSend == "c") {
        client.destroy();
      }
    } else {
      console.log("Error while sending: " + toSend);
    }
  }

  setTimeout(function () {
    sendCycle();
  }, 1100);
};

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  client.connect(5001, "192.168.1.106", function () {
    console.log("Connected to Pi");
    buff.push("i /dev/ttyUSB0");
		sendCycle();

    buff.push("a set_ascii_leds(98, 101, 102, 102)");
    buff.push("a drive_direct(-300, 300)");
    buff.push("c");
  });
  client.on("data", function (data) {
    console.log("Received: " + data);
  });
  client.on("close", function () {
    console.log("Connection closed");
  });
});
