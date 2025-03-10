function download() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Downloading...");
    }, 3000);
  });
}

function verify() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("verify file...");
    }, 2000);
  });
}

function notify() {
  console.log("Download complete");
}

async function main() {
  console.log(await download());
  console.log(await verify());
  notify();
}

main();
