import axios from 'axios';

export const getUserData = async (page: number) => {
  const response = await axios.get(
    `https://dummyapi.io/data/v1/user?page=${page}&limit=10`,
    {
      headers: {
        'app-id': '62f91f515e146bcfb5943d2d',
      },
    },
  );
  return response.data.data;
};
