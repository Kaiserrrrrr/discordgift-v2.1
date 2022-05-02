let userName=(prompt('What is your name?'));
document.getElementById("js").innerHTML=(`Hello, ${userName}.`);
userQuestion=(prompt('What is your question?'));
console.log(`Question: ${userQuestion}`);
document.getElementById("js2").innerHTML=(`Question: ${userQuestion}`);
let randomNumber=(Math.floor(Math.random() *7));
let eightBall = (randomNumber)
switch(eightBall) {
case 0:
  console.log('It is certain.');
  document.getElementById("r").innerHTML=(`It is certain.`);
  break;
case 1:
  console.log('Don\'t count on it.');
  document.getElementById("r2").innerHTML=(`Don\'t count on it.`);
  break;
case 2:
  console.log('Without a doubt.');
  document.getElementById("r3").innerHTML=(`Without a doubt.`);
  break;
case 3:
  console.log('Not likely.');
  document.getElementById("r4").innerHTML=(`Not likely.`);
  break;
case 4:
  console.log('Sources say no.');
  document.getElementById("r5").innerHTML=(`Sources say no.`);
  break;
case 5:
  console.log('Outlook not so good.');
  document.getElementById("r6").innerHTML=(`Outlook not so good.`);
  break;
case 6:
  console.log('Cannot predict now, try again.');
  document.getElementById("r7").innerHTML=(`Cannot predict now, try again.`)
  break;
default:
  console.log('Signs point to yes.');
  document.getElementById("r8").innerHTML=(`Signs point to yes.`);
  break;
}
