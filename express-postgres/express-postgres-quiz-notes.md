# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  A: Non-blocking PostgreSQL client for Node.js
- How do you tell `pg` which database to connect to?
  A: connectionString
- How do you send SQL to PostgreSQL from your Express server?
  A: db.query()
- How do you access the rows that get returned from the SQL query?
  A: destructuring
- What must you always remember to put around your asynchronous route handlers? Why?
  A: try catch for error handling
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  A: a type of an injection attack that makes it possible to execute malicious SQL statements.The only sure way to prevent SQL Injection attacks is input validation and parametrized queries including prepared statements.

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
