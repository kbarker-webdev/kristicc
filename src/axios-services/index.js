import axios from 'axios';

export async function getAPIHealth() {
  try {
    const { data } = await axios.get('/api/health');
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}

export async function login(username, password) {
	try {
		const { data } = await axios.post('/api/users/login', {
			username,
			password,
		});
		return data;
	} catch (error) {
		throw error;
	}
}

export async function getAllProducts() {
	try {
		const { data } = await axios.get(`/api/products`);
		return data;
	} catch (error) {
    throw error;
  }
}

export async function getProductById(id) {
	try {
		const { data } = await axios.get(`/api/products/${id}`);
		return data;
	} catch (error) {}
}

export async function createCustomRequest(color, pid, usertext, font, comments, name, phone, email) {
  try {
    const { data } = await axios.post(`/api/custom`, {color, pid, usertext, font, comments, name, phone, email});
    return data;
  } catch (error) {}
}

export async function getCustomRequests() {
  try {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
    const { data } = await axios.get(`/api/custom`);
    return data;
  } catch (error) {}
}

export async function getCustomRequestById(id) {
  try {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
    const { data } = await axios.get(`/api/custom/${id}`);
    return data;
  } catch (error) {}
}

export async function markRequestAsComplete(id, value) {
  try {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
    const { data } = await axios.post(`/api/custom/complete`, {id, value});
    return data;
  } catch (error) {
    throw error;
  }
}

export async function clearClosedRequests() {
  try {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
    const { data } = await axios.delete(`/api/custom/complete`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getPortfolio() {
  try {
    const { data } = await axios.get(`/api/products/portfolio`);
    return data;
  } catch (error) {
    throw error;
  }
}