export interface Pet {
  id: string;
  name: string;
  age: string;
  details: string;
  location: string;
  description: string;
  image?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  phone?: string;
  city?: string;
  about?: string;
}

export type UserLogin = Pick<User, 'email' | 'password'>;
export type UserRegister = Omit<User, 'id' | 'phone' | 'city' | 'about'>;