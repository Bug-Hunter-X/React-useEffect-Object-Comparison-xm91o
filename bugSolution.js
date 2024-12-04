```javascript
function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Deep comparison using JSON.stringify
    if (JSON.stringify(props.data) !== JSON.stringify(prevProps.data)) {
      setCount(prevCount => prevCount + 1);
    }
  }, [props.data]);

  return <div>Render count: {count}</div>;
}
```