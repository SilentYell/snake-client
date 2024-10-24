const connect = require("./client");

console.log("Connecting ...");
connect();

const handleUserInput = function(key) {
  // Check for CTRL+C and terminate the program
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
