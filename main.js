  //1.Use a do...while loop to console.log the numbers from 1 to 1000.
  let result = '';
  let num = 0;

  do {
    num = num + 1;
    result = result + ',' + num ;
  } while (num < 1000);

  console.log(result);

  // 2.Create an object (with keys and values) called person with the following data:
  // firstName: "Jane",
  // lastName: "Doe",
  // birthDate: "Jan 5, 1925",
  // gender: "female"

  const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

  // 3.Create a function that logs out the keys of the object using Object.keys().

  let personKeys = Object.keys(person)
  console.log('Person keys', personKeys);

  // 4.Create a function that logs out the keys and values of the object using Object.entries().
  for (const [key, value] of Object.entries(person)) {
    console.log('keys and values:',`${key}: ${value}`);
  }

  // 5.Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
  const arrayOfPersons = [
    
     {
      firstName: "Jane",
      lastName: "Doe",
      birthDate: "Jan 5, 1925",
      gender: "female",
    },

    {
      firstName: "John",
      lastName: "Smith",
      birthDate: "Aug 13, 1998",
      gender: "male",
    },

   {
      firstName: "Jim",
      lastName: "Bean",
      birthDate: "sep 16, 1821",
      gender: "male",
    },

  ];

  // 6.Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.
   
     for ( const person of arrayOfPersons) {
     const birthDateLength = (person.birthDate.length)
     console.log(birthDateLength);
     const lastDigit = (person.birthDate.charAt(birthDateLength -1))
     if (parseInt(lastDigit) % 2 === 0) {
       console.log('The number is even')
     }
     else {
       console.log('The number is odd',person.birthDate);
     }
     
     
    }

  //7. Use .map() to map over the arrayOfPersons and console.log() their information.

  const map = arrayOfPersons.map (getInfo)

  function getInfo(item) {
    console.log('person info', [item.firstName,item.lastName,item.birthDate,item.gender])
  }
  
  //8. Use .filter() to filter the persons array and console.log 0only males in the array.

  arrayOfPersons.filter(checkMale)
  function checkMale(person) {
    console.log (person.gender)
    if(person.gender === 'male') {
      console.log(person.gender === 'male')
      console.log(person)
      return person
    }
  }

  //9. Create a function that returns true if the value of birthDate is before Jan 1, 1990.

  for (const person of arrayOfPersons) {
    const birthYear = person.birthDate.substring(person.birthDate.length -4)
    console.log(birthYear)
      if (parseInt(birthYear) < 1990) {
        return true
    }
  }

  //10. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
