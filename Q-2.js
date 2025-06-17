// 2. Why JavaScript Is Not Asynchronous by Default

// Question:
// a) Explain why JavaScript is synchronous by default.
// b) Prove it with code.

// Answer:
// a) JavaScript’s core is synchronous and single-threaded to ensure predictable execution order. Asynchronicity is achieved via APIs (e.g., setTimeout, Promises) and the event loop.

console.log("First");  
setTimeout(() => console.log("Second"), 0);  
console.log("Third");  

// The setTimeout callback is deferred, proving synchronous execution by default