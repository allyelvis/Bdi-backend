// src/services/authService.js
const login = (username, password) => {
  return username === 'admin' && password === 'admin';
};

export { login };
