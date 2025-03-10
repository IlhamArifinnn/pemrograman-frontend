// import data users dari file data.mjs
import users from "./data.mjs";

const index = () => {
  console.log("Index - get all user");
  users.forEach(function (user) {
    console.log(user);
  });
};

const store = (user) => {
  users.push(user);
};

export { index, store };
