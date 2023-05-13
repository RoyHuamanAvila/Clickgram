export interface LoginAuthDto {
  email: string;
  password: string;
}

export interface RegisterAuthDto {
  email: string;
  fullname: string;
  username: string;
  password: string;
}

export interface UpdateUserDto {
  presentation: string;
}
