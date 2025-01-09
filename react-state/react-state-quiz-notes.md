# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  A: Hooks are special functions that allow components to have access to state and other React features.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  A: function must start with use and an uppercase letter, hooks can only be called by React components, must always be top level and in same order
- What is the purpose of state in React?
  A: State in React is a component's "memory", or data that a component saves so it can modify its output.
- Why can't we just maintain state in a local variable?
  A: the values contained do not persist between function calls
- What two actions happen when you call a `state setter` function?
  A: the new value of count will be cached and stored by React so the value is not lost
  React will schedule a re-render of the App component because its state value was changed using a setter function
- When does the local `state variable` get updated with the new value?
  A: you must log before and after the setter function is called, available after re-rendering component

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
