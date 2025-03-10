// import controller
import { index, store } from "./controller.mjs";

const main = () => {
  const user = { name: "maulana", age: 23 };

  index();
  console.log("\n");

  store(user);
  index();
};

main();
