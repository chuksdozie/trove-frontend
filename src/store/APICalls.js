import axios from "axios";
import {
  LOGIN,
  SIGNUP,
  PORTFOLIOS,
  LOANS,
  LOANHISTORY,
  REQUESTLOAN,
  UPDATEUSER,
  UPDATEPASSWORD,
} from "./APIRoutes";

export const login = async (email, password) => {
  var data = JSON.stringify({
    email,
    password,
  });

  var config = {
    method: "post",
    url: LOGIN,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  var res;
  await axios(config)
    .then(function (response) {
      res = response.data.data.userDetails;
      const token = response.data.data.token;
      // Save bearer token to sessionStorage
      localStorage.setItem("sessionToken", token);
      localStorage.setItem("userInfo", response.data.data.userDetails);
      localStorage.setItem("userId", response.data.data.userDetails.id);
    })
    .catch(function (error) {
      res = error.response.data.error;
    });
  return res;
};

export const signup = async (
  first_name,
  last_name,
  phonenumber,
  email,
  password,
  bank_name,
  bank_username,
  bank_account_number,
  date_of_birth
) => {
  var data = JSON.stringify({
    first_name,
    last_name,
    phonenumber,
    email,
    password,
    bank_name,
    bank_username,
    bank_account_number,
    date_of_birth,
  });

  var config = {
    method: "post",
    url: `${SIGNUP}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  var res;
  await axios(config)
    .then(function (response) {
      res = response.data.data;
    })
    .catch(function (error) {
      res = error.response.data;
    });
  return res;
};

export const portfolios = async () => {
  var config = {
    method: "get",
    url: `${PORTFOLIOS}${localStorage.getItem("userId")}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  };

  var res;
  await axios(config)
    .then(function (response) {
      res = response.data.data;
    })
    .catch(function (error) {
      res = error.response.data;
    });
  return res;
};

export const loans = async () => {
  var config = {
    method: "get",
    url: `${LOANS}${localStorage.getItem("userId")}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  };

  let res;
  await axios(config)
    .then(function (response) {
      res = response.data.data;
    })
    .catch(function (error) {
      res = error.response.data;
    });
  return res;
};

export const loansHistory = async () => {
  var config = {
    method: "get",
    url: `${LOANHISTORY}${localStorage.getItem("userId")}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
    },
  };

  let res;
  await axios(config)
    .then(function (response) {
      res = response.data.data;
    })
    .catch(function (error) {
      res = error.response.data;
    });
  return res;
};

export const requestLoan = async (amount, duration) => {
  var data = {
    amount,
    duration,
  };

  var config = {
    method: "post",
    url: `${REQUESTLOAN}${localStorage.getItem("userId")}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
      "Content-Type": "application/json",
    },
    data: data,
  };
  var res;
  await axios(config)
    .then(function (response) {
      res = response.data.data;
    })
    .catch(function (error) {
      res = error.response.data;
    });
  return res;
};

export const updateUser = async (
  first_name,
  last_name,
  bank_name,
  bank_username,
  bank_account_number
) => {
  var data = {
    first_name,
    last_name,
    bank_name,
    bank_username,
    bank_account_number,
  };

  var config = {
    method: "put",
    url: `${UPDATEUSER}${localStorage.getItem("userId")}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
      "Content-Type": "application/json",
    },
    data: data,
  };
  var res;
  await axios(config)
    .then(function (response) {
      res = response.data.data;
    })
    .catch(function (error) {
      res = error.response.data;
    });
  return res;
};

export const updatePassword = async (
  old_password,
  new_password,
  confirm_new_password
) => {
  var data = JSON.stringify({
    old_password,
    new_password,
    confirm_new_password,
  });

  var config = {
    method: "put",
    url: `${UPDATEPASSWORD}${localStorage.getItem("userId")}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("sessionToken")}`,
      "Content-Type": "application/json",
    },
    data: data,
  };
  var res;
  await axios(config)
    .then(function (response) {
      res = response.data.data;
    })
    .catch(function (error) {
      res = error.response.data;
    });
  return res;
};
