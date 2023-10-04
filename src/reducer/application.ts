import { Actiontypes } from "../types/ActionTypes";

const initialState={
isAuthenticated:true,
organization:[]
}

export const application = (state:object = initialState, action:any) => {
  switch (action.type) {
    case "IS_USER_AUTHINTCATED":
      return !state;
    case Actiontypes.organization:
      return { ...state, organization :action.payload}
    default:
      return state;
  }
};
