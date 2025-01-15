# react-app-drawer-notes

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

.navbar {
background-color: navy;
height: 75px;
display: flex;
justify-content: start;
align-items: center;
position: relative;
padding: 0 10px;
}

.menu-bars {
font-size: 2rem;
background: none;
color: gray;
cursor: pointer;
position: absolute;
left: 20px;
top: 50%;
transform: translateY(-50%);
z-index: 10;
}

.nav-menu {
background-color: white;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: -250px;
transition: left 300ms ease;
z-index: 5;
}

.nav-menu.active {
left: 0;
}

.nav-menu-items {
width: 90%;
padding: 20px;
}

.nav-menu-items li {
display: flex;
align-items: center;
padding: 10px 0;
transition: margin-top 300ms ease, background-color 300ms ease;
}

.icon-style {
width: 30px;
height: 30px;
object-fit: contain;
margin-right: 10px;

}

.item-name {
font-size: 16px;
color: #1a1a1a;
text-decoration: none;
transition: margin-top 300ms ease, padding 300ms ease;
}

.item-name:hover {
background-color: #747bff;
color: #fff;
border-radius: 5px;
padding-left: 5px;
}

.nav-menu-items li:hover {
background-color: #f0f0f0;
}

.nav-menu-items li {
margin-top: 20px;
}

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
