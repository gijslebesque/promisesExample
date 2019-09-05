// In this example, imagine that every setTimeout is actually connecting to a database.

//We first want to create a user and store it in our database this will take some time.
//After we have created the user, we have realised that the user's first name is wrong.
//Therefore, we want to update it (which also happens asynchronously).
//So we want to be sure our user is stored first. And after that we want to update our user.

//Run the script with node. And have a look at the console.log() in your terminal.

//A simple user object
const user = {
  name: "Gijs",
  age: 27,
  like: ["Cats"]
};

// < ------ PROMISE DECLARATION! ------ >

//a promise based function that that takes in a user as parameter.
const createUser = user => {
  // the function returs a promise.
  return new Promise((resolve, reject) => {
    //a sync operation
    setTimeout(() => {
      //return whatever the result is of the async operation
      resolve(user);
    }, 3000);
  });
};

// similar to previous funcition. Here we will, however, update our user.
const updateUser = user => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //modify user and return it's updated value to resovle.
      user.name = "Eric";
      return resolve(user);
    }, 3000);
  });
};

// <------ PROMISE EXECUTION ------>

//here we call the our promises and chain them.
createUser(user)
  .then(returnValueOfResolveCreateUserFunc => {
    console.log("First user", returnValueOfResolveCreateUserFunc);
    //IMPORTANT! .then needs to a return value which will be passed on to the next .then()
    return updateUser(user);
  })
  .then(returnValueOfResolveUpdateUserFunc => {
    console.log("Seconds user", returnValueOfResolveUpdateUserFunc);
  });
