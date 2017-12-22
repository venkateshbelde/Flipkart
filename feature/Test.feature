Feature: purchase of a product
This file deals with the product search and  add to cart.
if a product is available in the web page, then it can be added to the cart
if a product is  not available, then  it can posted  on request by a  mail.


Background:
Given I am able to access https://www.flipkart.com
Scenario: product on stockr

Given I am able to access https://www.flipkart.com
When I search for a samsung tv
And I choose the first autofill option
And I add the first product to cart
Then I shoud be able to checkout the cart
