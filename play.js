const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '10.255.255.254',
    port: 50541,
  });

  conn.on("data", (data) => {
    console.log('Message from server:', data.toString());
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();