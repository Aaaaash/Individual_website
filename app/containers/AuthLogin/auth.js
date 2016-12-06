import { API_BASE } from 'common/constants';
import request from 'utils/request';
import sha1 from 'sha1';

const auth = {
  login(username, password) {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: username,
        password: sha1(password),
        // name: "misaka",
        // gender: "m",
        // bio: "I'm your father!",
        // avatar: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1657183323,2974200416&fm=116&gp=0.jpg"
      }),
    };
    return request(`${API_BASE}/login`, options)
      .then((data) => data)
      .catch((err) => {
        throw new Error('登录失败！');
      });
  },
};

export default auth;
