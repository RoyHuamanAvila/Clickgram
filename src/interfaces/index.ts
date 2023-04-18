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
