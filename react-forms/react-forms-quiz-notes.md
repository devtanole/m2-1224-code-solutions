# react-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do controlled components differ from uncontrolled components?
  A: A component is "uncontrolled" if it manages its own state. An uncontrolled input component's value is managed by the DOM, not by React or by the programmer. The component's value can be retrieved from the HTMLFormElement when the form is submitted. A component is "controlled" if the component that renders the component manages its state, usually in a useState variable.
- What are some advantages of using uncontrolled components?
  A: sometimes easier to integrate React and non-React code when using uncontrolled components. It can also be slightly less code if you want to be quick and dirty.
- What are some advantages of using controlled components?
  A: Changes immediatewly reflect in the ui. Easy implementation of validation logic.
- Which style do you prefer?
  A: Uncontrolled since it is what im used to. I expect this to change though.
- What two props must you pass to an input for it to be "controlled"?

- What are some popular npm packages for creating forms in React?
  A: React Hook Form, Formik, React Final Form

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
