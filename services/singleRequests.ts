import axios from 'axios';

export const getChatHistory = () => {
  axios
    .get('http://localhost:3123/rest')
    .then((res) => {
      console.log('Axios success. Server message:', res.data);
    })
    .catch((err) => {
      console.log('Axios error: ', err.message);
    });
};
