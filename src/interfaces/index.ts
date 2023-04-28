export interface UserLogged {
  _id: string;
  email: string;
  username: string;
  fullname: string;
  password: string;
  name: string;
  picture: string;
  __v: number;
}

export interface User {
  name: string;
  picture: string;
}

export interface Comment {
  owner: User;
}

export interface PostProps {
  owner: User;
  contents: ContentPost[];
  likeCount: number;
  description?: string;
  comments?: Comment[];
}

export interface ContentPost {
  url: string;
  type: "img" | "video";
}
