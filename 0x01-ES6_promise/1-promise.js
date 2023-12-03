/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
export default function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(new Error('The fake API is not working currently'));
    }
  });
  return myPromise;
}
