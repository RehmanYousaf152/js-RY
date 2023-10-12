const name="Rehman"
const repoCount = 50
console.log(name + repoCount + "value");// outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rehman-Yousaf')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('Y'));
console.log(gameName.indexOf('Y'));

const newString=gameName.substring(0,6)
console.log(newString);

const anotherString= gameName.slice(-10,6)
console.log(anotherString);

const newString1="  RehmanYousaf   "
console.log(newString1);
console.log(newString1.trim());

const url="https://rehman.com/rehman%20Yousaf"
console.log(url.replace('%20','-'));

console.log(url.includes('man'));
console.log(gameName.split('-'));
