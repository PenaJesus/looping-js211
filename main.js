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
      birthDate: "Sep 16, 1821",
      gender: "male",
    },

  ];

  // 6.Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.
   
     for (const element of arrayOfPersons) {
       console.log(element)
      
     }
    