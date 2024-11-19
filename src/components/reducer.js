export const initialState = {
    basket: []
}
const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        // Find the index of the item in the basket
        const existingItemIndex = state.basket.findIndex(
          (item) => item.id === action.item.id
        );
  
        if (existingItemIndex >= 0) {
          // Item exists, update the quantity
          const updatedBasket = [...state.basket];
          updatedBasket[existingItemIndex].quantity += 1;
          return { ...state, basket: updatedBasket };
        } else {
          // Item doesn't exist, add it with a quantity of 1
          const newItem = { ...action.item, quantity: 1 };
          return { ...state, basket: [...state.basket, newItem] };
        }
  
     
        case "INCREMENT_ITEM_QUANTITY":
            return {
              ...state,
              basket: state.basket.map((item) =>
                item.id === action.id
                  ? { ...item, quantity: item.quantity + 1 } // Increment quantity
                  : item
              ),
            };
      
          case "DECREMENT_ITEM_QUANTITY":
            return {
              ...state,
              basket: state.basket.map((item) =>
                item.id === action.id && item.quantity > 1
                  ? { ...item, quantity: item.quantity - 1 } // Decrement quantity (don't let it go below 1)
                  : item
              ),
            };
      
            case "REMOVE_FROM_BASKET":
                return {
                  ...state,
                  basket: state.basket.filter((item) => item.id !== action.id),
                };

      default:
        return state;
    }
  };
  

export default reducer;