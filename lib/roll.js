import minimist from 'minimist';
const args = minimist(process.argv.slice(2));

// roll function to export
export function roll(sides, dice, rolls){
  var resultArr = [];
  for (let i = 0; i < rolls; i++){
    let output = 0;
    for (let j = 0; j < dice; j++){
      output = output + Math.floor(Math.random() * sides) + 1;
    }
    resultArr.push(output);
  }

  const returnObj = {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": resultArr
	};

  return returnObj;
}