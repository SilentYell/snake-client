const net = require("net");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  
  // when connected, prints a success message
  conn.on('connect', () => {
    console.log('Successfully connected to the server!');
    conn.write('Name: NIK');
    // conn.write('Move: up');
  });


  // logs data received from the server
  conn.on('data', (data) => {
    console.log('Message from server:', data.toString());
  });

  // logs message when the server ends the connection
  conn.on('end', () => {
    console.log('Disconnected from server');
  });

  // logs an error message when a connection error occurs
  conn.on('error', (err) => {
    console.error('Connection error:', err.message);
  });

  return conn;
};

module.exports = {connect};