import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
  reducer: {
    //   connect store to api
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
