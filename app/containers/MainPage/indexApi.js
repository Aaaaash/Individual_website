import { API_BASE } from 'common/constants';
import request from 'utils/request';

const indexApi = {
  fetchAuth() {
    return request(`${API_BASE}/userInfo`)
      .then((data) => data.data)
      .catch((err) => {
        throw new Error(err.message);
      });
  },
  fetchArticle(title = '') {
    return request(`${API_BASE}/article?title=${title}`)
      .then((data) => data.data)
      .catch((err) => {
        throw new Error(err.message);
      });
  },
};

export default indexApi;
