import axios from 'axios';

export const getUserData = async (page: number) => {
  const response = await axios.get(
    `https://dummyapi.io/data/v1/user?page=${page}&limit=1`,
    {
      headers: {
        'app-id': '62f91f515e146bcfb5943d2d',
      },
    },
  );
  return response.data.data;
};

export const createPaymentIntent = (data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post('http://localhost:4002/payment-sheet', data)
      .then(function (res) {
        resolve(res);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
