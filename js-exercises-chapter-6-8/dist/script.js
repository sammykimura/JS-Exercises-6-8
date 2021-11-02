console.log("*****PROBLEM 1 (OBJECTS)")
const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp:0,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points and ${this
      .strength} as strength and ${this.xp} XP points`;
  }
};

aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

console.log ("*****PROBLEM 2***** (OBJECTS)");

const dog = {
  name: "Fang",
  species: "boarhound",
  size: 75,
  
};

dog.bark=function(){
  return "Grrr Grrr";
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


console.log("*****PROBLEM 3 (ARRAYS)******");

const values = [3, 11, 7, 2, 9, 10];

let sum=0;
for (let i=0; i<values.length; i++){
  sum+=values[i];
}
console.log(sum);


console.log("*****PROBLEM 4 (ARRAYS)******");

const words=[];
let word;

  while(word!=stop){
    let word=prompt("Enter a word. Type stop to end");
    if(word!='stop'){
    words.push(word);
    }
    
    if(word=='stop'){
      break;
    }
    console.log(words);
  }


console.log("*****PROBLEM 5 & 6 (ARRAYS)******");

let str=prompt("Enter a word");
let length= str.length;
let lower=str.toLowerCase();
let upper=str.toUpperCase();

let counter=0;

function getVowels(){
for(let i=0; i<str.length; i++){
  
  if(str[i]=="a"|| str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
     counter+=1;
     }
}
  console.log(counter);
}


console.log(length);
console.log(upper);
console.log(lower);
getVowels();

console.log("*****IN CLASS EXERCISE******");

const account={
  name:"alex",
  balance:0,
  credit(newBalance){
   account.balance+=newBalance;
 },
  describe(){
    return `owner: ${this.name} , balance ${this.balance}`;
  }
  
};

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());