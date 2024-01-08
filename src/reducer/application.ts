import { UserProfileModal } from "../components/profile/UseProfileValues";
import { RolesData } from "../constants/roleModel";
import { Actiontypes } from "../types/ActionTypes";

const initialState = {
  isAuthenticated: false,
  userDetails: {},
  organization: [],
  roles: RolesData,
  userData: UserProfileModal,
  tabs: [],
  recentOrganizationName: {},
  Countries_List:[],
  color:'',
  /*
   ALERT MODal
  summary:titleof alert box
  severity:success/error/warn/info
  details:message to show
  */
  modal: { summary: '', detail: '', severity :'',show:false}
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
      return { ...state, userDetails: action.payload };
    case Actiontypes.GET_ALL_USER_DATA:
      return { ...state, userData: action.payload };
    case Actiontypes.GET_ALL_TABS:
      return { ...state, tabs: action.payload };
    case Actiontypes.RECENT_REGISTERED_ORG:
      return { ...state, recentOrganizationName: action.payload };
    case Actiontypes.ALL_COUNTRIES:
      return { ...state, Countries_List :action.payload}
    case Actiontypes.TOAST_ENALBLED:
      return { ...state, modal:action.payload}
    default:
      return state;
  }
};
