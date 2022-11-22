import React from "react";
import { useReducer } from "react";
import CartContext from "./CartContext";

// default state for the cart
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Cart reducer logic
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // updating the total amount
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // checking if an item already exists in the cart
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // assigning the existing item to the existing item in the cart
    const existingItem = state.items[existingItemIndex];

    let updateItems;

    if (existingItem) {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    //Checking if an item already exists in the Cart, if yes findng it's index , if no , giving it a value of null
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    //END

    //Assigning the existing item variable to the existingItem variable
    const existingItem = state.items[existingItemIndex];
    //END

    //Finding the accurate Total Amount
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    //END
    let updatedItems;

    //Checking if the amount is equals to 1
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    //END
    else {
      //Get all the items in the cart, decrements the item amount and assigns them to the updatedItem
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      //END

      //Get all the items in the cart and assigns the updatedItem varibale to the Existing item
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
      //END
    }
    return {
      //Returning the items data and totalAmount
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      //END
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  // using the useReducer hook
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removerItemHandler = (id) => {
    dispatchCartAction({type: "REMOVE", id: id,})
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removerItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
