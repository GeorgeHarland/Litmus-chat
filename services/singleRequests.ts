import axios from 'axios';

export const getChatHistory = () => {
  axios
    .get('http://localhost:3123/rest')
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
