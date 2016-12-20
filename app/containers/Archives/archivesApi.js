import { API_BASE } from 'common/constants';
import request from 'utils/request';

const archivesApi = {
  fetchArchives() {
    return request(`${API_BASE}/article/archives`)
      .then((data) => data.data)
      .catch((err) => {
        throw new Error(err.message);
      });
  },
};

export default archivesApi;
