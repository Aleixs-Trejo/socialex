export interface Post {
  id: string;
  authorId: number; // id del usuario
  content: string;
  categories: string[];
  createdAt: string;
  reactions: Reactions;
  comments: Comment[];
}

export interface Reactions {
  like: Reaction[];
  love: Reaction[];
  laugh: Reaction[];
  wow: Reaction[];
  sad: Reaction[];
  angry: Reaction[];
}

export interface Reaction {
  authorId: number; // id del usuario
}

export interface Comment {
  id: string;
  authorId: number; // id del usuario
  content: string;
  createdAt: string;
}

export interface ReactionType {
  type: keyof Reactions;
  icon: string;
  title: string;
}