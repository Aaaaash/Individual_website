import { API_BASE } from 'common/constants';
import request from 'utils/request';

const articleApi = {
  fetchArticle(id) {
    return request(`${API_BASE}/article/${id}`)
      .then((data) => data.data)
      .catch((err) => {
        throw new Error(err.message);
      });
  },
};

export default articleApi;
