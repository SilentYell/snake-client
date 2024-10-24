let connection;

const movementKey = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right'
};

const snakeMessages = {
  '1': 'Say: Yum!',
  '2': 'Say: Outta my way!',
  '3': 'Say: Jerk!',
  '4': 'Say: Congrats!'
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  // Check for CTRL+C and terminate the program
  if (key === '\u0003') {
    process.exit();
  }
  //if the key press is from the movement key obj then write that message
  if (movementKey[key]) {
    connection.write(movementKey[key]);
  }
  if (snakeMessages[key]) {
    connection.write(snakeMessages[key]);
  }
};

module.exports = {setupInput};