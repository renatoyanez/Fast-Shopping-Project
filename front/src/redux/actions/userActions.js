import {
  FETCH_USER,
  USER_LOGOUT
} from '../utils/constants'
import axios from 'axios'

export const userAction = user => ({
  type: FETCH_USER,
  user
})

export const userLogout = () => ({
  type: USER_LOGOUT
});

export const createUser = (name, ID, address, phoneNumber, email) => {
  return function (dispatch) {
    axios
      .post("/api/users/register", {
        name: name,
        ID: ID,
        address: address,
        phoneNumber: phoneNumber,
        email: email
      })
      .then(res => {
        dispatch(userAction(res.data));
      }).catch(err => {
        throw new Error(err)
      })
  };
};

export const fetchUser = user => {
  return dispatch => {
    axios.post("/api/users/login", user).then(user => {
      dispatch(userAction(user.data));
      return user.data
    });
  };
};

// export const logOutCreator = () => {
//   return function(dispatch) {
//     return axios.get("/api/users/logout").then(() => {
//       dispatch(userLogout())
//     });
//   };
// };

// export const fetchUser = email => dispatch => {
//   console.log('Email en el action: ', email)
//   return axios.get('/api/users/login', email)
//   .then(res => {
//     dispatch(userAction(res.data));
//     return res.data
//   })
// }