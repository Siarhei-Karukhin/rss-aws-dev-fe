const cartAPI =
  "http://siarhei-karukhin-cart-api-1z-develop.us-west-2.elasticbeanstalk.com/";

const API_PATHS = {
  product: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: "https://7r054419yd.execute-api.us-west-2.amazonaws.com/prod",
  bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  cart: `${cartAPI}api`,
};

export default API_PATHS;
