export interface UserLogged {
  _id: string;
  email: string;
  username: string;
  fullname: string;
  presentation: string;
  password: string;
  picture: string;
  follows: string[];
  followers: string[];
  posts: PostProps[];
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
  owner: PostOwner;
  content: string[];
  likeCount: number;
  description?: string;
  comments?: Comment[];
}

export interface PostOwner {
  username: string;
  picture: string;
}

export interface ContentPost {
  url: string;
  type: "img" | "video";
}
