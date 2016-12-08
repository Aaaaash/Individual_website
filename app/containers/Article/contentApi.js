import { API_BASE } from 'common/constants';
import request from 'utils/request';

const contentApi = {
  fetchArticle() {
    return request(`${API_BASE}/article`)
      .then((data) => data.data)
      .catch((err) => {
        throw new Error(err.message);
      });
  },
};

export default contentApi;
