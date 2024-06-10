'use client';

import { deleteCookie, getCookie, setCookie } from 'cookies-next';

export const SetCooke = (token, name = "") => { 
    let d = new Date();
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + token + ";" + expires + ";path=/";

    // setCookie(name, token, {
    //   maxAge: d.getTime() + 365 * 24 * 60 * 60 * 1000 ,
    //   httpOnly: true,
    //   path:"/"
    // });

  };

  export const RemoveCooke = (name) => {
    //deleteCookie(name)
    //document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };
  
  export const getCookies = (cname = "token") => {
 
    //return getCookie(cname);
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };