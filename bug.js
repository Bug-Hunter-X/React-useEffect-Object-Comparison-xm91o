```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Directly comparing objects
    if (prevProps.data !== props.data) {
      setCount(prevCount => prevCount + 1);
    }
  }, [props.data]);

  return <div>Render count: {count}</div>;
}
```