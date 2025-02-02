# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  A: One column that links two tables togther.
- How do you join two SQL tables? (Provide at least two syntaxes.)
  A: select -> from -> join -> using, an alternate form of the join clause can be used: join "suppliers" on "products"."supplierId" = "suppliers"."supplierId"
- How do you temporarily rename columns or tables in a SQL statement?
  A: with an alias, use as
- How do you create a one-to-many relationship between two tables?
  A: with a foreign key in one table pointing to a primary key in another table
- How do you create a many-to-many relationship between two tables?
  A: use a third table that contains a foreign key from each table

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
