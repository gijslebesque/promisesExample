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
      user.name = "Eric";
      return resolve(user);
    }, 3000);
  });
};

// <------ PROMISE EXECUTION ------>

//here we call the our promises and chain them.
createUser(user)
  .then(returnValueOfResolveCreateUser => {
    console.log("First user", returnValueOfResolveCreateUser);
    return updateUser(user);
  })
  .then(returnValueOfResolveUpdateUser => {
    console.log("Seconds user", returnValueOfResolveUpdateUser);
  });
