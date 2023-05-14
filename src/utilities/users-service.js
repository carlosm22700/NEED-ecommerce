import * as userAPI from "./users-api";

export async function signUp(userData) {
  const token = await userAPI.signUp(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export function getToken() {
  // attempt get the tokem from localstorage
  const token = localStorage.getItem("token");
  if (!token) return null;
  // if a token is retrieved
  // decode the payload from the token so we can check if it's still valid
  const payload = JSON.parse(atob(token.split(".")[1]));
  // (check if it's expired or not)
  if (payload.exp < Date.now() / 1000) {
    // remove the token from localstorage
    localStorage.removeItem("token");
    return null;
  }
  // if still valid, we return the retrieved token
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export async function login(userData) {
  const token = await userAPI.login(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem("token");
}

export function checkToken() {
  // Just so that you don't forget how to use.then
  return (
    userAPI
      .checkToken()
      // checkToken returns a string, but let's
      // make it a Date object for more flexibility
      .then((dateStr) => new Date(dateStr))
  );
}

/*
    {
        iat: 1525355525,
        exp: 1525355765,
        user: {
            name: 'jane'
            email: 'jane@email.com',
            createdAt: '2023-05-10',
            updatedAt: '2023-05-10',
            ObjectId: 'ui92tetg2g872giu272',
        }
    }

*/
