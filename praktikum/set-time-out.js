function download() {
  setTimeout(() => {
    console.log("Downloading...");
  }, 3000);
}

function verify() {
  setTimeout(() => {
    console.log("verify file...");
  }, 2000);
}

function notify() {
  console.log("Download complete");
}

function main() {
  download();
  verify();
  notify();
}

main();
