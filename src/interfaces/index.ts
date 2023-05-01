export interface UserLogged {
  _id: string;
  email: string;
  username: string;
  fullname: string;
  password: string;
  picture: string;
  follows: string[];
  followers: string[];
  __v: number;
}

export interface User {
  _id?: string;
  fullname: string;
  username: string;
  picture: string;
}

export interface Comment {
  owner: User;
}

export interface PostProps {
  _id?: string;
  owner: User;
  content: string[];
  likeCount: number;
  description?: string;
  comments?: Comment[];
}

export interface ContentPost {
  url: string;
  type: "img" | "video";
}
