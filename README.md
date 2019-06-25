# Mejuri PIN

First of all, thanks for your time and take this challenge, we really appreciate it!
We gonna try to make this challenge and opportunity to see your skills and also interesting for you.

## The concept
You are a front-end rockstar and Mejuri contacted you to create the next product that will change the world: Mejuri PIN.
The main idea is to create a board like pinterest with all the Mejuri products, and allow the user to like it.
Also the user should be able to list only the liked products and filter the content by category.

Of Course this site should look awesome in mobile! Because everybody loves browsing with their phones!
Finally, the performance is important, and you are the expert! Please let us know about the strategies used in behalf of optimization and browser performance.

## Let’s do it
We included a candidate mockup.png as a base guide, but any improvement is well received!.
You can check the complete category page [here](http://dev-api.mejuri.com/shop/t/type).

### All the products in a single endpoint
`http://dev-api.mejuri.com/api/v1/taxon/collections-by-categories/type`

### The products separated by type
`http://dev-api.mejuri.com/api/v1/taxon/collections-by-categories/type/:category-slug`

**Examples**
- Rings: http://dev-api.mejuri.com/api/v1/taxon/collections-by-categories/type/rings
- Necklaces: http://dev-api.mejuri.com/api/v1/taxon/collections-by-categories/type/pendants
- Earrings: http://dev-api.mejuri.com/api/v1/taxon/collections-by-categories/type/earrings
- Bracelets + Anklets: http://dev-api.mejuri.com/api/v1/taxon/collections-by-categories/type/bracelets

### Your app should be able to
- Read the data from the Json
- Render the products by category and show the name of the products when the user puts the cursor over the product image.
- Save your favorite products and list it
- Filter by category.


## Libraries
- Please do not use other JS frameworks, such as JQuery, Angular, etc. Full development in React/Redux is mandatory for this challenge.
- We would love to see you implement [Styled Components](https://www.styled-components.com/).
- Feel free to use other UI components and libraries, like [Material UI](https://github.com/mui-org/material-ui).

**Objectives for this coding challenge**
- We would like to see how you organize and think your solutions in React/Redux.
- We would like to see if you are able to work with json data, create your own responsive design.
- Most importantly, we would like you to have fun doing it!
