import { RolesData } from "../constants/roleModel";
import { Actiontypes } from "../types/ActionTypes";

const initialState = {
  isAuthenticated: false,
  orgDetails: {},
  organization: [],
  roles: RolesData,
  userData: [],
  tabs: [],
  recentOrganizationName: {},
};

export const application = (state: object = initialState, action: any) => {
  switch (action.type) {
    case Actiontypes.IS_USER_AUTHINTCATED:
      return { ...state, isAuthenticated: action.payload };
    case Actiontypes.organization:
      return { ...state, organization: action.payload };
    case Actiontypes.GET_USER_ROLES:
      return { ...state, roles: action.payload };
    case Actiontypes.GET_VALIDATED_USER_DETAILS:
      console.log("20..", action.payload);
      return { ...state, orgDetails: action.payload };
    case Actiontypes.GET_ALL_USER_DATA:
      return { ...state, userData: action.payload };
    case Actiontypes.GET_ALL_TABS:
      return { ...state, tabs: action.payload };
    case Actiontypes.RECENT_REGISTERED_ORG:
      return { ...state, recentOrganizationName: action.payload };
    default:
      return state;
  }
};
