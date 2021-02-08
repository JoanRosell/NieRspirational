const fs = require('fs');

const INPUT_FILE = './input.txt';

/**
 * Reads a file and splits it into three arrays, one for each option set.
 * @param {string} filename - String containing the path to the file
 */
const readOptions = function readOptionsFromFile(filename) {
  const lines = fs.readFileSync(filename, 'utf8').split('\n');
  const options = [];
  let startIdx = 0;
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i] === '') {
      options.push(lines.slice(startIdx, i));
      startIdx = i + 1;
    }
  }

  return options;
};

/**
 * Randomly chooses one string from each array in options and concatenates them
 * @param {string[][]} options
 */
const buildRandMessage = function buildRandMessage(options) {
  let message = '';
  options.forEach((optionArray) => {
    message += `${
      optionArray[Math.floor(Math.random() * optionArray.length)]
    } `;
  });
  return message;
};

console.log(buildRandMessage(readOptions(INPUT_FILE)));
