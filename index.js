// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 uses block scope and counter2 uses global scope
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  // console.log(Math.floor(Math.random()*3))
    return Math.floor(Math.random()*3)
}
// inning()
// inning()
// inning()

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/ 

function finalScore(cb, innings){
  // let Home = 0;
  // let Away = 0;
  const totalScore = {
    Home: 0,
    Away: 0
  }
  for(let i=0; i<innings; i++){
    // Home+=cb();
    // Away+=cb();
    totalScore.Home = totalScore.Home+=cb()
    totalScore.Away = totalScore.Away+=cb()
  }
  // console.log(`Final Score: Away ${totalScore.Away} - Home ${totalScore.Home}`);
  return totalScore
}
finalScore(inning, 9)
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(cb, innings){
  const totalScore = {
    Home: 0,
    Away: 0
  }
  let finalScoreBoard = []
  for(let i=1; i<=innings; i++){
    let homeScore = 0
    let awayScore = 0
    if(i === 1){
      homeScore+=cb()
      awayScore+=cb()
      finalScoreBoard.push(`1st inning: Away ${awayScore} - Home ${homeScore}`)
      totalScore.Home+=homeScore
      totalScore.Away+=awayScore
      // console.log(finalScoreBoard[i-1]);
    }
    else if(i === 2){
      homeScore+=cb()
      awayScore+=cb()
      finalScoreBoard.push(`2nd inning: Away ${awayScore} - Home ${homeScore}`)
      totalScore.Home+=homeScore
      totalScore.Away+=awayScore
      // console.log(finalScoreBoard[i-1]);
    }
    else if(i === 3){
      homeScore+=cb()
      awayScore+=cb()
      finalScoreBoard.push(`3rd inning: Away ${awayScore} - Home ${homeScore}`)
      totalScore.Home+=homeScore
      totalScore.Away+=awayScore
      // console.log(finalScoreBoard[i-1]);
    }
    else{
      homeScore+=cb()
      awayScore+=cb()
      finalScoreBoard.push(`${i}th inning: Away ${awayScore} - Home ${homeScore}`)
      totalScore.Home+=homeScore
      totalScore.Away+=awayScore
      // console.log(finalScoreBoard[i-1]);
    }
  }
  finalScoreBoard.push(`Final Score: Away ${totalScore.Away} - Home ${totalScore.Home}`)
  // console.log(`Final Score: Away ${totalScore.Away} - Home ${totalScore.Home}`)
  
  const inningScore = () => {
    for(let x=0; x<=finalScoreBoard.length; x++){
      console.log(finalScoreBoard[x])
    }
  }
  return inningScore()
}
// getInningScore(inning, 9)

function scoreboard(func1, func2, num) {
  return func1(func2, num)
}

scoreboard(getInningScore, inning, 9);
