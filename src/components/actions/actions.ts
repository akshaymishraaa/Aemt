import { Actiontypes } from "../../types/ActionTypes";
import { baseurl } from "../commonHelpers/envi";
import { fetch } from "../commonHelpers/fetch";

export const registerOrganization: any = (props: any) => {
  console.log(props, "5....");
  const url = `${baseurl}/registerUser`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "POST",
      data: props,
    })
      .then((res: any) => {
        console.log("res...99", res);
        // dispatch({ type: Actiontypes.organization, payload: res?.data })
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
};

export const ValidateOrganization: any = (props: any) => {
    console.log("32...res", props);
  const url = `${baseurl}/validateOrg`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "POST",
      data: props,
    })
      .then((res: any) => {
        dispatch({
          type: Actiontypes.GET_VALIDATED_USER_DETAILS,
          payload: res.data,
        });
      })
      .catch((error: any) => console.log("Error...", error));
  };
};
// export const action={}
