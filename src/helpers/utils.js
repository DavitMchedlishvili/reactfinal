export const getUsersInitials = (firstName, lastName) => {
  if (!firstName || !lastName) return "";
  const initials = `${firstName.charAt(0).toUpperCase()}${lastName
    .charAt(0)
    .toUpperCase()}`;
  return initials;
};

export const isUserAdmin = (user) =>
  user ? user.role.includes("admin") : false;
