// 3. Chaining Promises with setTimeout

// Question:
// Chain promises to log messages sequentially with delays.

const delay = (ms, msg) => new Promise(resolve =>  
  setTimeout(() => { console.log(msg); resolve(); }, ms)  
);  

delay(1000, "Message 1")  
  .then(() => delay(1000, "Message 2"))  
  .then(() => delay(1000, "Message 3"));  