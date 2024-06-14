import * as types from "./actiotypes";

const initialState = {
  isLoading: false,
  Ndaformgetdata:[],
};

export const Reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.NDAFORMGETREQ:
      return {
        ...state,
        isLoading: true,
      };
    case types.NDAFORMGETSUCCESS:
      return {
        ...state,
        isLoading: false,
        Ndaformgetdata: payload,
      };
    default:
      return state;
  }
};
