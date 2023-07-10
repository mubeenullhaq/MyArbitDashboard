export const isAuthenticated = (state) => {
  if (state.auth.auth.idToken) return true;
  return false;
};

export const isAdmin = (state) => {
  if (state.auth.auth.user.role === "admin") return true;
  return false;
};
