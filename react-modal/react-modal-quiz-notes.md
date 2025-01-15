# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  A: dialog is used to display modal and non-modal dialog boxes.
- How do you show and hide a modal dialog?
  A: .showModal() and .close() methods can also close with esc key
- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
  A: By passing props or with refs, does not work on dialog because it is not good practice to manipulate the DOM.
- How do you call the dialog element's functions in React?
  A: with useRef
- How can you render nested components or JSX elements in React?
  A: Call the component within a parent component or pass as props.

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
