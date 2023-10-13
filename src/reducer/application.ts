import { Actiontypes } from "../types/ActionTypes";

const initialState = {
  isAuthenticated: false,
  organization: [],
};

export const application = (state: object = initialState, action: any) => {
  switch (action.type) {
    case Actiontypes.IS_USER_AUTHINTCATED:
      return { ...state, isAuthenticated: action.payload };
    case Actiontypes.organization:
      return { ...state, organization: action.payload };
    default:
      return state;
  }
};
