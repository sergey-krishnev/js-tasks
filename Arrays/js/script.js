const getMultiplyFive = () => {
	let string = jsConsole.read('#multi-five');
	let array = string.split(' ').map(Number).map(x => x * 5);
	jsConsole.write(`Array multiply five: ${array} <br>`);
};

const isArraysEqual = () => {
	let equality = 'equal';
	let firstArray = jsConsole.read('#arrays-equals-1').split(' ');
	let secondArray = jsConsole.read('#arrays-equals-2').split(' ');
	if(firstArray.length!=secondArray.length) 
	equality = "not equal"; 
 else
 { 
 // comparing each element of array 
	for(var i=0;i<firstArray.length;i++) 
	if(firstArray[i]!=secondArray[i]) {
		equality = "not equal";
		break;
	}
 }
 jsConsole.write(`Arrays ${equality} <br>`) 
}

const getMaxNumberSequence = () => {
	let array = jsConsole.read('#max-number-sequence').split(' ').map(Number);
	let maximum = arrayMax(array);
	var sequence = array.filter(function(number) {
		return number == maximum;
	});
	jsConsole.write(`Array: ${sequence} <br>`)
}

function arrayMax(arr) {
  return arr.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
}

const getMaxIncreasingSequence = () => {
	let arr = jsConsole.read('#max-increasing-sequence').split(' ').map(Number);
	let longestIncreasingLength = lis(arr);
	jsConsole.write(`Arrays ${longestIncreasingLength} <br>`);
}

function lis(input) {
  if (input.length === 0) {
    return [];
  }
 
  var lisLenPerIndex = [];
  let max = { index: 0, length: 1 };
 
  for (var i = 0; i < input.length; i++) {
    lisLenPerIndex[i] = 1;
    for (var j = i - 1; j >= 0; j--) {
      if (input[i] > input[j] && lisLenPerIndex[j] >= lisLenPerIndex[i]) {
        var length = lisLenPerIndex[i] = lisLenPerIndex[j] + 1;
        if (length > max.length) {
          max = { index: i, length };
        }
      }
    }
  }
 
  var lis = [input[max.index]];
  for (var i = max.index; i >= 0 && max.length !== 0; i--) {
    if (input[max.index] > input[i] && lisLenPerIndex[i] === max.length - 1) {
      lis.unshift(input[i]);
      max.length--;
    }
  }
 
  return lis;
}

const selectionSort = () => {
	let arr = jsConsole.read('#selection-sort').split(' ').map(Number);
	let len = arr.length;
	for (let i = 0; i < len; i++) {
			let min = i;
			for (let j = i + 1; j < len; j++) {
					if (arr[min] > arr[j]) {
							min = j;
					}
			}
			if (min !== i) {
					let tmp = arr[i];
					arr[i] = arr[min];
					arr[min] = tmp;
			}
	}
	jsConsole.write(`Arrays ${arr} <br>`);
}

const getMostFrequent = () => {
	let tmpArray = jsConsole.read('#most-frequent').split(' ').map(Number);
	let array = jsConsole.read('#most-frequent').split(' ').map(Number);
	let frequent = mode(array);
	let times = 0;
	for (let i = 0; i < tmpArray.length; i++) {
		if (tmpArray[i] == frequent) {
			times++;
		};
	}
	jsConsole.write(`Number ${frequent} (${times}) times <br>`);
}

function mode(arr){
	return arr.sort((a,b) =>
				arr.filter(v => v===a).length
			- arr.filter(v => v===b).length
	).pop();
}

const checkBrackets = () => {
  let expression = jsConsole.read('#brackets');
  let count = 0;

  for (let i = 0; i <= expression.length; i++) {
    if (expression[i] === '(') {
      count++;
    } else if (expression[i] === ')') {
      count--;
    }
  }

  if (count === 0) {
    return jsConsole.write(`true <br>`);
  } else {
    return jsConsole.write(`false <br>`);
  }
};


const getCountSubstring = () => {
  let text = jsConsole.read('textarea');
  let substring = jsConsole.read('#substring');
  let array = text.split(substring);

  let count = array.length;

  if ((count === -1) && (text.length === 0)) {
    return jsConsole.write(`The text is missing. <br>`);
  }
  jsConsole.write(`The substring "${substring}" is contained ${count} times in the text. <br>`);
};

const upCaseLowerCase = () => {
  let expression = jsConsole.read('#text');

  function upcase(params) {
    text = params.replace(/<upcase>(.+?)<\/upcase>/g, (match, contents) => {
      return contents.toUpperCase();
    });
    return text;
  }

  let upperCase = (upcase(expression));

  function mixcase(params) {
    text = params.replace(/<mixcase>(.+?)<\/mixcase>/g, (match, contents) => {
      return rev(contents);

      function rev(contents) {
        var contents = Array.prototype.map.call(contents, (letter) => {
          return Math.random() > .5 ? letter.toUpperCase() : letter;
        }).join("");
        return contents;
      }
    });
    return text;
  }

  let mixx = (mixcase(upperCase));

  function lowcase(mixx) {
    text = mixx.replace(/<lowcase>(.+?)<\/lowcase>/g, function (match, contents) {
      return contents.toLowerCase();
    });
    return text;
  }
  jsConsole.writeLine((lowcase(mixx)));
};

const nbsp = () => {
  let text = jsConsole.read('textarea');
  let nbsp = '&nbsp;';

  if (text.length === 0) {
    return jsConsole.write(`The text is missing. <br>`);
  }

  jsConsole.write(`${text.replace(/ /g, `${nbsp}`)} <br>`);
};
