/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

//Create a variable for Jon and Jaime's attqack strength
let jonSnowAttack = 25;
let jaimeLannisterAttack = 35;

//BEfore the battle begins, the men comppare strengths

// if(jonSnowAttack > jaimeLannisterAttack){
//     console.log(`Jon's attack is hreater than Jaime's`)
// } else {
//     console.log(`Jaime's attack is greater`)
// }

//What is there is a tie? Our code would gove it to Jaime

if(jonSnowAttack > jaimeLannisterAttack){
    console.log(`Jon's attack is hreater than Jaime's`)
}else if(jaimeLannisterAttack > jonSnowAttack){
    console.log(`Jaime's attack is greater`)
} else {
    console.log(`It's a tie`)
}

//Jaime fights Jon, update Jon Snows Health and Defense

let jonSnowHealth = 100;
let jonSnowDefense = 0;

//Jaime attacks first

if(jonSnowHealth <= jaimeLannisterAttack) {
    console.log('Jon has been slain')
} else {
    jonSnowHealth = jonSnowHealth - jaimeLannisterAttack
    console.log(`Jon Snow's remaining health is ${jonSnowHealth}`)
}

//Jon ups his defense by getting a shield

jonSnowDefense += 25;

//Jaime attacks again

if(jonSnowHealth <= jaimeLannisterAttack - jonSnowDefense) {
    console.log("Jon has been slain")
} else{
    jonSnowHealth = jonSnowHealth - (jaimeLannisterAttack - jonSnowDefense)
}

//Towns people give Jon Snow a health potion, it gives him 50 health but it cannot go over 100

if(jonSnowHealth <= 50 ) {
    jonSnowHealth +=50
} else {
    jonSnowHealth = 100
}
console.log(jonSnowHealth)


//Jaime flips a coin

let coinLandsHeads = false;
if(coinLandsHeads === false) {
    console.log(`Jon runs away`)
} else {
    console.log(`the fight continues`)
}


//Jaime attacks 5 times
// for(let i = 0; i <=5; i++) {
//     jonSnowHealth -= (jaimeLannisterAttack - jonSnowDefense)
//     console.log(`Jon Snow's health is now ${jonSnowHealth}`)
// }

//lets comine for and if loops to see if Jon will survive
// for(let i = 0; i <= 6; i++){
//     if(jonSnowHealth <= 0) {
//         console.log(`Jon has been slain`)
//     } else {
//         jonSnowHealth -= (jaimeLannisterAttack - jonSnowDefense)
//         console.log(`Jon has SLAYED, his health is ${jonSnowHealth}`)
//     }
// }

//Use a while loop instead
while(jonSnowHealth > 0){
    jonSnowHealth -= (jaimeLannisterAttack=jonSnowDefense)
    console.log(`Jon Snow's health is now ${jonSnowHealth}`)
    if(jonSnowHealth <=0){
        console.log(`he has been slain, send the red lady`)
    }
}