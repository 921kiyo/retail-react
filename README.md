# Clothing Retailer

A responsive website for a clothing retailer.

![Alt text](client/build/public/img/website-image.png?raw=true "Website Image")

## Project Description
The retailer sells six different categories of clothes: women’s footwear, men’s footwear, women’s casualwear, men’s casualwear, women’s formalwear and man’s formalwear.

The page that you develop should display all of the available products, as well as a shopping cart to which they can be added.

## Installation
In order to run the application, you need to install [Node.js](http://nodejs.org) in your computer so that you can run npm command in your terminal.

Once Node.js is installed, run the following command to get all  the necessary npm packages.
```
cd clothing-retailer
npm install
cd client
npm install
```
Run the express to start a server.
In the /clothing-retailer directory, run the following command.
```
node server.js
```
Open a brower and go to "http://localhost:3000/". You should be able to see the running website.

## User Story

The list of user stories is as follows:

1. As a User I can add a product to my shopping cart.
2. As a User I can remove a product from my shopping cart.
3. As a User I can view the total price for the products in my shopping
cart.
4. As a User I can apply a voucher to my shopping cart.
5. As a User I can view the total price for the products in my shopping cart
with discounts applied.
6. As a User I am alerted when I apply an invalid voucher to my shopping
cart.
7. As a User I am unable to Out of Stock products to the shopping cart.

## Code Layout & Supplement Usage Instructions

### Code Layout
- All the logics/functions can be found in the client/src/models directory as well as unit tests (in client/src/models/specs).

- I used React to render the views. All the view-related components can be found in client/src/components.
  - MasterBox.jsx takes all the functions from the models.
  - The illustration of the components structure is as follows:
```
|-- MasterBox.jsx
    |
    |-- HeaderBox.jsx
    |
    |-- ItemList.jsx
    |   |
    |   |-- Item.jsx
    |
    |-- CartBox.jsx
        |
        |-- ShoppingCart.jsx
            |
            |-- CartItem.jsx
```

- All the responsible design can be found in the client/build/public/css directory.

### Supplement Usage Instructions

- To view/hide the list of items in the shopping cart, click the cart icon at the top.

- You are not able to click add button if the stock available is 0.

- Voucher code works as follows:
  - There are 3 types of voucher codes.
    - "SMALL" for £5.00 off your order
    - "MEDIUM" for £10.00 off when you spend over £50.00
    - "LARGE" for £15.00 off when you have bought at least one footwear item and spent over £75.00
  - You cannot apply any voucher code more than once.
  - If you remove any items from the shopping cart, the voucher is no longer in effect. However, you can apply any discount voucher again.

## Approach and Thinking
I planned how to structure models and views.
I started planning the models first, which were divided into 3 models: items, shopping cart and API, as well as their respective unit testing.

Once the main functions in the models were finished, I also created views with React. I decided to use React because this was introduced to me in class and I am currently learning it.

For responsive design, I used media query and flex box, and created 3 main break points with 1 minor one (client/build/public/css/over650below770.css). I started with the smallest view and made sure each view had enough space for displaying items.
React

I really enjoyed this project, and it reinforced my understanding of front-end technology, especially using React as well as responsible design.

## Unit Testing
In order to run the unit tests, run the following command in terminal.

```
cd client
npm test
```
You should be able to see the results of unit tests in your terminal.

## Technologies Used
- HTML5
- CSS3
- JavaScript(ES5)
- [React.js](https://facebook.github.io/react/)
- [Node.js](http://nodejs.org)
- [Express](http://expressjs.com)
- [Webpack](https://webpack.github.io/)
- [Mocha](https://mochajs.org/)
