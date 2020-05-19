function wakeDog (dogName, dogBreed){
    
    let dogInfo =(`Wake ${dogName} the ${dogBreed}`);
    console.log(dogInfo);
    return dogInfo;
  }
  function leashDog (dogName, dogBreed) {
      let dogInfo = (`Leash ${dogName} the ${dogBreed}`);
      console.log(dogInfo);
      return dogInfo; 
  }
  
  function walkToPark (dogName, dogBreed){
      let dogInfo = (`Walk to the park with ${dogName} the ${dogBreed}`);
     console.log(dogInfo);
     return dogInfo;
  }
  function throwFrisbee (dogName, dogBreed){
      let dogInfo = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
      console.log(dogInfo);
      return dogInfo;
  
      
  }
  function walkHome (dogName, dogBreed){
      let dogInfo = (`Walk home with ${dogName} the ${dogBreed}`);
     console.log(dogInfo);
      return dogInfo;
  }
  function unleashDog (dogName, dogBreed){
      let dogInfo = (`Unleash ${dogName} the ${dogBreed}`);
      console.log(dogInfo);
      return dogInfo;
  }
  let result = [];
  let routine = [wakeDog, leashDog, walkToPark, throwFrisbee,walkHome,unleashDog];
  function exerciseDog (dogName, dogBreed) {
      for (let i = 0; i < routine.length; i++){
           result.push(routine[i](dogName, dogBreed));
          
      }
      return result;
  }