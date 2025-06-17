// 1. Demonstrate JavaScript’s Single-Threaded Nature

// Question:
// Write an example showing JavaScript’s single-threaded behavior with a blocking task and an async function.

console.log("Start");  

// Blocking task (synchronous)  
for (let i = 0; i < 1e9; i++) {} // Blocks the thread  
console.log("Blocking task done");  

// Async task (non-blocking)  
setTimeout(() => console.log("Async task done"), 0);  

console.log("End");  

// The setTimeout callback waits even with a 0ms delay because the event loop is blocked by the synchronous loop.