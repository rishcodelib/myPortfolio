import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;

const API_KEY = process.env.REACT_APP_API_KEY;

const client = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
    ...(API_KEY ? { 'x-api-key': API_KEY } : {}) // or Authorization: `Bearer ${API_KEY}`
  },
  timeout: 10000,
});

const resumeService = {
  get: (path, config = {}) => client.get(path || '/resume', config).then(res => res.data),
  post: (path, data, config) => client.post(path, data, config).then(res => res.data),
  put: (path, data, config) => client.put(path, data, config).then(res => res.data),
  del: (path, config = {}) => client.delete(path || '/', config).then(res => res.data),
  client,
};

export default resumeService;


