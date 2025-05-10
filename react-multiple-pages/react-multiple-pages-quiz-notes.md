# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?
  A: Does not change in SPA. User would expect to be able to go back to specific pages.
- What NPM package can be used to make navigating a React app behave as users expect?
  A: React Router
- Which React Router component(s) can be used to set up your app's navigation?
  A: Link
- How does React Router match the browser URL to one of your app's React components?
  A: React Router provides conventional data loading hooks to initiate data loading during a navigation
- What is the purpose of React Router's `Outlet` component?
  A: An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route
- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?
  A: useParams
- What React Router hook is used to navigate programmatically?
  A: useNavigate

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
