// ***I'm not sure if this works, or if it would have been better to do
// it this way, but I'm keeping it here just in case this way would be preferred ****
// import products from "../../products.json";
// const initialState = products;

// Actual Code
// I don't think I even really need the switch statement but
// might help if it ever needed to scale up.
const rootReducer = (state = [], action) => {
  switch (action.type) {
    case "LOG_PART_INFO":
      // This is the thing that's actually logging in the console.
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default rootReducer;
