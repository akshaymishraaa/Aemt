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

// <<<<<<< HEAD
// =======
// get all countries

export const getCountries: any = (callback: any) => {
  const url = `${baseurl}/countries`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "GET",
      data: "",
    })
      .then((res: any) => {
        dispatch({ type: Actiontypes.ALL_COUNTRIES, payload: res.data });
        if (res?.data) {
          if (callback) {
            callback(
              res.data.sort((a: any, b: any) => a.name.localeCompare(b.name))
            );
          }
        } else {
          if (callback) {
            callback([]);
          }
        }
        console.log("122....res.data", res?.data);
        sessionStorage.setItem("key","res")
      })
      .catch((err: any) => {
        console.log("error...", err);
      });
  };
};
export const getStates: any = (paylaod: any, callback: any) => {
  const url = `${baseurl}/states`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "POST",
      data: paylaod,
    })
      .then((res: any) => {
        if (callback) {
          callback(
            res.data.sort((a: any, b: any) => a.name.localeCompare(b.name))
          );
        }
      })
      .catch((err: any) => {
        console.log("error...", err);
      });
  };
};
export const getCities: any = (paylaod: any, callback: any) => {
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

export const findUserById: any = (payload: any, callback: any) => {
  const url = `${baseurl}/findUserById/${payload}`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "GET",
      data: "",
    })
      .then((res: any) => {
        console.log("122....", res.data);
        if (callback) {
          callback(res.data);
        }
      })
      .catch((err: any) => {
        console.log("error...", err);
      });
  };
};

//update user by id

export const updateUserById: any = (params: any, payload: any) => {
  const url = `${baseurl}/updateUserById/${params.id}`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "PATCH",
      data: payload,
    }).then((res: any) => {
      console.log("212....", res.data);
    }).catch((err:any)=>{
      console.log('Error....',err)
    })
  };
};

// Add new student

export const Addnewstudent: any = (props: any, callback: any) => {
  console.log(props, "5....");
  const url = `${baseurl}/addStudent`;
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
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
};

// Get all student details 

export const getAllStudentDetails: any = (paylaod: any, callback: any) => {
  const url = `${baseurl}/getAllStudentDetails`;
  return (dispatch: any) => {
    fetch({
      url: url,
      method: "GET",
      data: '',
    })
      .then((res: any) => {
        console.log("122....", res.data);
      })
      .catch((err: any) => {
        console.log("error...", err);
      });
  };
};
