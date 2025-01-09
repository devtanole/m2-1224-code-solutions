# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  A: when a function reference is created
- What allows JavaScript functions to "remember" variables from their surroundings?
  A: closures
- What values does a closure contain?
  A: all the variables in scope at the time of the creation of a function
- When is a closure created?
  A: when you declare a new function and assign it to a variable
- How can you tell if a function will be created with a closure?
  A: if the function has a function inside of itself and its return value is assigned to a global variable. When a function gets created and passed around or returned from another function, it carries a backpack with it. And in the backpack are all the variables that were in scope when the function was declared.
- In React, what is one important case where you need to know if a closure was created?
  A: useEffect

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
