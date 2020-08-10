import axios from 'axios';


export const API_PATH_BASE = process.env.REACT_APP_BASE_URL || 'https://api.github.com';


export const getGitsUser = (user: string) => axios.get(`${API_PATH_BASE}/users/${user}/gists`);

export const getUserInfo = (user: string) => axios.get(`${API_PATH_BASE}/users/${user}`);

export const getGitDetail = (id: string) => axios.get(`${API_PATH_BASE}/gists/${id}`);

