import React from "react";
import { store } from "./store";

const StoreContext = React.createContext(null);

export const Provider = ({children, store}) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
export default StoreContext;
