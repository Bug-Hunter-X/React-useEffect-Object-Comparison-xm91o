# Incorrect Object Comparison in useEffect

This example demonstrates a common error in React's `useEffect` hook: incorrectly comparing objects for changes.  Directly comparing objects using the strict equality operator (`!==`) does not work as expected because it compares object references, not their content.  If the object reference changes (even if the content is the same), the `useEffect` hook will trigger unnecessarily, potentially causing an infinite loop.

## Bug
The `bug.js` file contains the buggy code.  The component attempts to update the count whenever the `props.data` object changes. However, it incorrectly compares objects directly, leading to re-renders even if the data is functionally identical.

## Solution
The `bugSolution.js` file demonstrates the corrected code. It uses a custom comparison function or `JSON.stringify` to correctly check if the object content has changed before triggering an update, preventing the infinite loop.