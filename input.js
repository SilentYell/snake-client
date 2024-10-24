const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // Check for CTRL+C and terminate the program
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    console.log('Move: up');
  } else if (key === 'a') {
    console.log('Move: left');
  } else if (key === 's') {
    console.log('Move: down');
  } else if (key === 'd') {
    console.log('Move: right');
  }
};

module.exports = {setupInput};