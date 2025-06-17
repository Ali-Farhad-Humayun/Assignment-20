// 5. Event Loop: Promises vs. setTimeout

// Question:
// How does the event loop prioritize Promises over setTimeout?

// Answer:

// Promises (Microtasks):
// Executed immediately after the current synchronous code, before the next event loop tick.

// setTimeout (Macrotasks):
// Executed in the next event loop iteration, after microtasks.

// Example

setTimeout(() => console.log("Timeout"), 0);  
Promise.resolve().then(() => console.log("Promise"));  
console.log("Sync");  