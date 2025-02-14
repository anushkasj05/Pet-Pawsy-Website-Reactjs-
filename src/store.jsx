import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "./pages/wishlistSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    mycart: persistedReducer,
    wishlist: wishlistReducer,
  },
});
export const persistor = persistStore(store);
export default store;
