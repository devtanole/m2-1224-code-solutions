# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  A: fetch
- What two things need to be done to properly handle HTTP request errors? Why?
  A: Check the HTTP status code to ID the error type and error message to see error details.
- How can `useEffect` be used to load data for a component?
  A: Effects let you specify side effects that are caused by rendering itself, rather than by a particular event. Effects are typically used to “step out” of your React code and synchronize with some external system.
- How do you use `useEffect` to load component data just once when the component mounts?
  A: leave dependency array empty
- How do you use `useEffect` to load component data every time the data key changes?
  A: put the specified data key in the dependency array
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  A: GraphQL clients like Apollo or Relay, SWR or React Query

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
