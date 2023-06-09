import * as types from "./ActionTypes";

const initailState = {
  isLoading: false,
  isError: false,
  Projectdata: [],
};

export const Reducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GETPROJECTREQ:
      return {
        ...state,
        isLoading: true,
      };

    case types.GETPROJECTSUCESS:
      return {
        ...state,
        isLoading: false,
        Projectdata: payload,
      };

    case types.GETPROJECTFAILURE:
      return {
        ...state,
        isLoading: true,
        Projectdata: [],
      };

    default:
      return state;
  }
};
