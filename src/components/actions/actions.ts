import { Actiontypes } from "../../types/ActionTypes";
import { baseurl } from "../commonHelpers/envi";
import { fetch } from "../commonHelpers/fetch";

export const registerOrganization: any = (props: any, callback: any) => {
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
        if (callback) {
          callback(res.data);
        }
        // dispatch({ type: Actiontypes.organization, payload: res?.data })
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
};

export const ValidateUser: any = (props: any, callback: any) => {
  console.log("32...res", props);
  const url = `${baseurl}/validateUser`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "POST",
      data: props,
    })
      .then((res: any) => {
        if (callback) {
          callback(res.data);
        }
        
      })
      .catch((error: any) => console.log("Error...", error));
  };
};

// create user

export const createUser: any = (props: any, callback: any) => {
  const url = `${baseurl}/createUser`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "POST",
      data: props,
    })
      .then((res: any) => {
        console.log("54.....", res.data);
        if (callback) {
          callback(res.data);
        }
      })
      .catch((err: any) => {
        console.log("Error", err);
      });
  };
};

// get all user api call

export const getAllUserDetails: any = (callback: any) => {
  const url = `${baseurl}/getAllUserDetails`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "GET",
      data: "",
    })
      .then((res: any) => {
        console.log("54.....", res.data);
        if (callback) {
          callback(res.data);
        }
      })
      .catch((err: any) => {
        console.log("Error", err);
      });
  };
};

//Get all tabs

export const fetchAllTabs: any = (callback: any) => {
  const url = `${baseurl}/getTabs`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "GET",
      data: "",
    })
      .then((res: any) => {
        console.log("54.....", res.data);
        if (callback) {
          callback(res.data);
        }
      })
      .catch((err: any) => {
        console.log("Error", err);
      });
  };
};

// get all countries

export const getCountries: any = () => {
  const url = `${baseurl}/countries`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "GET",
      data: "",
    })
      .then((res: any) => {
        console.log("122....", res.data);
      })
      .catch((err: any) => {
        console.log("error...", err);
      });
  };
};
export const getStates: any = (paylaod: any) => {
  const url = `${baseurl}/states`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "POST",
      data: paylaod,
    })
      .then((res: any) => {
        console.log("122....", res.data);
      })
      .catch((err: any) => {
        console.log("error...", err);
      });
  };
};
export const getCities: any = (paylaod: any) => {
  const url = `${baseurl}/cities`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "POST",
      data: paylaod,
    })
      .then((res: any) => {
        // console.log("122....", res.data);
      })
      .catch((err: any) => {
        console.log("error...", err);
      });
  };
};

// api for find user details as per email id

export const findUserById: any = (payload: any) => {
  const url = `${baseurl}/findUserById/${payload}`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "GET",
      data: "",
    })
      .then((res: any) => {
        console.log("122....", res.data);
      })
      .catch((err: any) => {
        console.log("error...", err);
      });
  };
};
