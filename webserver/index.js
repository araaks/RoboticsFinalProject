const express = require("express");
const app = express();
const port = 3000;
var net = require("net");
var client = new net.Socket();

var List = require("collections/list");

var buff = new List();
var buff_vals = new Map();

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// /drive_direct?left=-300&right=300
app.post("/drive_direct", (req, res) => {
  const left = req.query.left;
  const right = req.query.right;
  if (!buff.has("buff")) {
    buff.push("drive_direct");
  }
  buff_vals.set("drive_direct", `(${left}, ${right})`);
})

app.post("/kill", (req, res) => {
  buff.unshift("c"); // first to process
})

var sendCycle = function () {
  if (buff.length > 0) {
    var toSend = buff.shift();
    var toSendParams = buff_vals.get(toSend)
    buff_vals.delete(toSend)

    if (client.write(`${toSend}${toSendParams}`)) {
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
  }, 1150);
};

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  client.connect(5001, "192.168.1.106", function () {
    console.log("Connected to Pi");
    buff.push("i /dev/ttyUSB0");
		sendCycle();
    buff.push("a set_ascii_leds(98, 101, 102, 102)");
  });
  client.on("data", function (data) {
    console.log("Received: " + data);
  });
  client.on("close", function () {
    console.log("Connection closed");
  });
});
