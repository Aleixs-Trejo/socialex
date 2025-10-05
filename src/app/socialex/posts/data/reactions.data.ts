import { Reactions } from "../interfaces/posts.interface";

export const reactions: { type: keyof Reactions, icon: string, title: string }[] = [
  { type: 'like', icon: 'assets/icon/like.svg', title: 'Me gusta' },
  { type: 'love', icon: 'assets/icon/love.svg', title: 'Me encanta' },
  { type: 'laugh', icon: 'assets/icon/laugh.svg', title: 'Me divierte' },
  { type: 'wow', icon: 'assets/icon/wow.svg', title: 'Me asombra' },
  { type: 'sad', icon: 'assets/icon/sad.svg', title: 'Me entristece' },
  { type: 'angry', icon: 'assets/icon/angry.svg', title: 'Me enoja' },
];