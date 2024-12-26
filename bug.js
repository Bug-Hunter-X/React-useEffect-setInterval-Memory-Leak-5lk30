```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The callback function
    // does not include a way to stop the interval
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 

    // Missing cleanup function to clear the interval
    // This causes a memory leak and unexpected behavior
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```