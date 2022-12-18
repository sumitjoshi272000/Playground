import axios from 'axios';

export const getUserData = async () => {
  const response = await axios.get('https://dummyapi.io/data/v1/user', {
    headers: {
      'app-id': '62f91f515e146bcfb5943d2d',
    },
  });
  return response.data.data;
};
