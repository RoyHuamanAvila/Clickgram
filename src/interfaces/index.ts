export interface User {
  name: string;
  picture: string;
}

export interface Comment {
  owner: User;
}

export interface PostProps {
  owner: User;
  content: string;
  likeCount: number;
  description?: string;
  comments?: Comment[];
}
