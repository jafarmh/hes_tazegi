'use client'

import { RemoveCooke, getCookies } from "../../utility/Cookie";
import { deleteCookie, getCookie } from "cookies-next";

import axios from "axios";
import { baseURL } from '../../utility/Config';
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useEffect } from 'react';

//const {type,url,option,callBack}=props
  //const [cookies, setCookie, removeCookie] = useCookies(['0VbQvSw1sB']);
  const API = axios.create({
    baseURL,
    timeout: 0,
    headers: {
      "X-Localization": "fa",
      'Content-Type': 'multipart/form-data'
    },
  });

  API.defaults.headers.post["Content-Type"] = "application/json";
  API.defaults.headers.common = {
    Accept: "application/json",
  
   // Authorization: `Bearer ${cookies}`,
    //Authorization: `Bearer ${getCookies("0VbQvSw1sB")}`,
  };
  API.navigate = null;

  API.interceptors.response.use(
    (res) => {
      if (res.data.success) {
        return res.data.data;
      } else {
        toast.error(res.data.message);
        return Promise.reject();
      }
    },

    (err) => {
      if (err.code !== "ERR_CANCELED" && !err.response?.status) {
        toast.error("ERR Connected");
        // toast.error(
        //   "خطا در ارتباط با سرور! لطفا اتصال اینترنت خود را بررسی کنید."
        // );
      } else {
        switch (err.response.status) {
          // Bad request
          case 400:
            return Promise.reject(err);

          // Unauthorized
          case 401:
            window.localStorage.removeItem("0VbQvSw1sB")
            //RemoveCooke("0VbQvSw1sB" );
            //RemoveCooke("0VbQvSw1sB", { path: "/" });
            toast.error("توکن شما منقضی شده است! لطفا دوباره وارد شوید.");
            window.location.href="/"
            API.defaults.headers.common = {
              Accept: "application/json",
              //Authorization: "",
            };
            API.navigate("/");
            
            break;

          // Unauthenticated
          case 403:
            toast.error("403 error!");
            //toast.error("شما مجوز دسترسی به این صفحه را ندارید.");
            API.navigate(-1);
            break;

          // Not found
          case 404:
            toast.error("404 error!");
            //toast.error("آدرس درخواست شده یافت نشد.");
            break;

          // Unprocessable content
          case 422:
            let errors = [];
            for (let error in err.response.data.errors) {
              err.response.data.errors[error].forEach((item) =>
                errors.push(item)
              );
            }
            toast.error(`
            422 Error !:
            ${errors.map((item, index) => index + 1 + " - " + item + "\n")}
          `);
          //   toast.error(`
          //    خطا! مقادیر زیر ناقص یا اشتباه می‌باشند:
          //    ${errors.map((item, index) => index + 1 + " - " + item + "\n")}
          //  `);
            break;

          // Too many requests
          case 429:
            toast.error("429 error!");
            // toast.error(
            //   "تعداد درخواست‌های شما از حد مجاز عبور کرده است! لطفا بعدا تلاش کنید."
            // );
            break;

          // Server-side error
          case 500:
            toast.error("500 error!");
            //toast.error("خطایی در سمت  سرور پیش آمده! لطفا بعدا تلاش کنید.");
            break;

          default:
            toast.error("خطای نامشخص!");
        }
      }

      return Promise.reject();
    }
  );
 
 


export default API;



