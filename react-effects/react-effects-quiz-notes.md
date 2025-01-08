# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  A: after a render, mount is first appearance on screen
- What is a React Effect?
  A: effects let you specify side effects that are caused by rendering
- When should you use an Effect and when should you not use an Effect?
  A: Use for sync with external systems but not for transforming data for rendering, not for handling user events
- When do Effects run?
  A: at the end of a commit after the screen updates
- What function is used to declare an Effect?
  A: useEffect()
- What are Effect dependencies and how do you declare them?
  A: effect dependencies control when the effect should run, declare by adding dependencies to array
- Why would you want to clean up from an Effect?
  A: to handle side effects when the compnent unmounts or dependencies change
- How do you clean up from an Effect?
  A: with a cleanup function
- When does the cleanup function run?
  A: when dependency changes and effect needs to run again

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
