import { RemoveCooke, getCookies } from "../../utility/Cookie";
import { deleteCookie, getCookie } from 'cookies-next';

import axios from "axios";
import { baseURL } from './../../utility/Config';

const APIBack:any = axios.create({
  baseURL,
 timeout: 0,
 headers: {
   "X-Localization": "fa",
   'Content-Type': 'multipart/form-data'
 },
});

APIBack.defaults.headers.post["Content-Type"] = "application/json";
APIBack.defaults.headers.common = {
  Accept: "application/json",
 // Authorization: `Bearer ${getCookie("0VbQvSw1sB")}`,
};
 
APIBack.interceptors.response.use(
  (res:any) => { 
    if (res.data.success) {
      return res.data.data;
    } else {
     // console.log('res.data.message===================================res');
      return Promise.reject();
    }
  },

  (err:any) => { 
    if (err.code !== "ERR_CANCELED" && !err.response?.status) {
      console.log( "ERR_CANCELED");
    } else {
      switch (err.response.status) {
        // Bad request
        case 400:
          return Promise.reject(err);

        // Unauthorized
        case 401:
         ///deleteCookie("0VbQvSw1sB" );
          //RemoveCooke("0VbQvSw1sB", { path: "/" });
          console.log("expire token");
          APIBack.defaults.headers.common = {
            Accept: "application/json",
            Authorization: "",
          };
      
          break;

        // Unauthenticated
        case 403:
          console.log("permission error");
          
          break;

        // Not found
        case 404:
          console.log("not found");
          break;

        // Unprocessable content
        case 422:
          let errors:any = [];
          for (let error in err.response.data.errors) {
            err.response.data.errors[error].forEach((item:any) =>
              errors.push(item)
            );
          }
          console.log(`${errors.map((item:any, index:number) => index + 1 + " - " + item + "\n")}`);
          break;

        // Too many requests
        case 429:
          console.log("many requests");
          break;

        // Server-side error
        case 500:
          console.log("500");
          break;

        default:
          console.log("default");
      }
    }

    return Promise.reject();
  }
);
export default APIBack;



