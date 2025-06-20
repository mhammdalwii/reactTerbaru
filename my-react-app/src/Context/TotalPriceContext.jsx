import { createContext, useContext, useReducer } from "react";

const TotalPriceContext = createContext(null);

const TotalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "Update": {
      return {
        total: action.payload.total,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });
  return (
    <TotalPriceContext value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>{children}</TotalPriceDispatchContext.Provider>
    </TotalPriceContext>
  );
}

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext);
}
