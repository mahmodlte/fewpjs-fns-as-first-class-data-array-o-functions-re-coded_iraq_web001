function wakeDog (dogName, dogBreed){
    
  let dogInfo = console.log(`wake ${dogName} The ${dogBreed}`);
  
  return dogInfo;
}
function leashDog (dogName, dogBreed) {
    let dogInfo = console.log(`Leash ${dogName} the ${dogBreed}`);
    
    return dogInfo; 
}

function walkToPark (dogName, dogBreed){
    let dogInfo = console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
   
return dogInfo;
}
function throwFrisbee (dogName, dogBreed){
    let dogInfo = console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    
    return dogInfo;

    
}
function walkHome (dogName, dogBreed){
    let dogInfo = console.log(`Walk home with ${dogName} the ${dogBreed}`);
   
    return dogInfo;
}
function unleashDog (dogName, dogBreed){
    let dogInfo = console.log(`Unleah ${dogName} the ${dogBreed}`);
    
    return dogInfo;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee,walkHome,unleashDog];
function exerciseDog (dogName, dogBreed) {
    for (let i = 0; i < routine.length; i++){
        
    }
}