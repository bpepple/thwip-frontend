export function authHeader() {
  /* Return authorization header with jwt token */
  let token = localStorage.getItem('token');

  if (token) {
    return { Authorization: 'JWT ' + token };
  } else {
    return {};
  }
}
