# React useEffect setInterval Memory Leak

This example demonstrates a common error in React applications involving the `useEffect` hook and `setInterval`.  Failure to clear the interval using `clearInterval` in the cleanup function results in a memory leak. 

The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.