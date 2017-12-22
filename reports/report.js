$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Test.feature");
formatter.feature({
  "line": 1,
  "name": "purchase of a product",
  "description": "This file deals with the product search and  add to cart.\r\nif a product is available in the web page, then it can be added to the cart\r\nif a product is  not available, then  it can posted  on request by a  mail.",
  "id": "purchase-of-a-product",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5971253957,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "product on stock",
  "description": "",
  "id": "purchase-of-a-product;product-on-stock",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am able to access https://www.flipkart.com",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I search for a samsung tv",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I choose the first autofill option",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I add the first product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I shoud be able to checkout the cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.flipkart.com",
      "offset": 20
    }
  ],
  "location": "StepDefn.i_am_able_to_access_http_flipkart_com(String)"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 16204883765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samsung tv",
      "offset": 15
    }
  ],
  "location": "StepDefn.i_search_for_a_apple_phone(String)"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 753546188,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_choose_the_first_autofill_option()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 4053112321,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_add_the_first_product_to_cart()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 8190608532,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_shoud_be_able_to_checkout_the_cart()"
});
formatter.result({
  "duration": 30028,
  "status": "passed"
});
formatter.after({
  "duration": 16199,
  "status": "passed"
});
});