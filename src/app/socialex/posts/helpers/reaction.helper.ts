// Interfaces
import { Reactions } from "../interfaces/posts.interface";

export const btnsReactions: { type: keyof Reactions, icon: string }[] = [
  { type: 'like', icon: '/assets/icon/like.svg' },
  { type: 'love', icon: '/assets/icon/love.svg' },
  { type: 'laugh', icon: '/assets/icon/laugh.svg' },
  { type: 'wow', icon: '/assets/icon/wow.svg' },
  { type: 'sad', icon: '/assets/icon/sad.svg' },
  { type: 'angry', icon: '/assets/icon/angry.svg' },
];

export const getReactionIcon = (reactionType: keyof Reactions): string => {
  return btnsReactions.find(r => r.type === reactionType)?.icon || '';
}