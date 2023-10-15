import { RolesData } from "../constants/roleModel";
import { Actiontypes } from "../types/ActionTypes";

const initialState = {
  isAuthenticated: false,
  organization: [],
  roles: RolesData,
};

export const application = (state: object = initialState, action: any) => {
  switch (action.type) {
    case Actiontypes.IS_USER_AUTHINTCATED:
      return { ...state, isAuthenticated: action.payload };
    case Actiontypes.organization:
      return { ...state, organization: action.payload };
    case Actiontypes.GET_USER_ROLES:
      return { ...state, roles: action.payload };
    default:
      return state;
  }
};
