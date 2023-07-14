function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  } 
  
  run();
  
  async function run() {
    await delay(1000);
    console.log('starting ticket server');
    await delay(2000);
    console.log('.');
    await delay(500);
    console.log('..');
    await delay(500);
    console.log('...');
    await delay(1000);
    console.log("reloading ticket scanner profiles");
    await delay(4000);
    console.log("connection established...really trust me");
  }



