import { API_BASE } from 'common/constants';
import request from 'utils/request';
import sha1 from 'sha1';

let localStorage;

if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage'); // eslint-disable-line global-require
} else {
  localStorage = global.window.localStorage;
}

const auth = {
  login(username, password) {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: username,
        password: sha1(password),
      }),
    };
    return request(`${API_BASE}/login`, options)
      .then((data) => {
        localStorage.token = data.token;
        localStorage.expiresIn = data.expiresIn;
        return true;
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  },
  register(email, password, repsd, name, gender, bio, avatar) {
    const options = {
      method: 'PUT',
      body: JSON.stringify({
        name,
        password: sha1(password),
        email,
        avatar,
        gender,
        bio,
      }),
    };
    return request(`${API_BASE}/register`, options)
      .then((data) => data)
      .catch((err) => {
        throw new Error(err.message);
      });
  },
};

export default auth;
