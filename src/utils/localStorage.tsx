import { userType } from "../pages/type";

export const authenticated = (user: userType, next: () => void) => {
  localStorage.setItem('user', JSON.stringify(user));
  next();
}

export const isAuthenticate = () => {
  if (!localStorage.getItem('user')) return;
  return JSON.parse(localStorage.getItem('user') as string);
}