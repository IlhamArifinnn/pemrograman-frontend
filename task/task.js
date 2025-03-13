/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
  {
    name: "Aufa",
    age: 22,
    major: "Informatics",
  },
  {
    name: "Isfa",
    age: 22,
    major: "Informatics",
  },
  {
    name: "Nurul",
    age: 21,
    major: "Information System",
  },
  {
    name: "Ilham",
    age: 27,
    major: "Math",
  },
  {
    name: "Ipin",
    age: 20,
    major: "Informatics",
  },
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  if (users.length === 0) {
    console.log("users is empty");
  } else {
    for (const user of users) {
      console.log(user);
    }
  }
};

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user) => {
  if (!user) {
    console.log("user is empty or null");
  } else {
    users.push(user);
  }

  // const validation = !user
  //   ? console.log("user is empty or null")
  //   : users.push(user);

  // return validation;
};
/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, user) => {
  if (!user || index > users.length) {
    console.log("user is empty or index is longer than array length");
  } else {
    // users.splice(index, 1, user);
    users[index] = user;
  }

  // const validation =
  //   !user || index > users.length
  //     ? console.log("user is empty or index is longer than array length")
  //     : (users[index] = user);

  // return validation;
};

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
  if (index > users.length) {
    console.log("index is longer than array length");
  } else {
    users.splice(index, 1);
  }

  // const validation =
  //   index > users.length
  //     ? console.log("index is longer than array length")
  //     : users.splice(index, 1);

  // return validation;
};

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("\n");
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);
  all();

  /**
   * Test function update
   */
  console.log("\n");

  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);
  all();

  /**
   * Test function destroy
   */
  console.log("\n");
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
  all();
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
