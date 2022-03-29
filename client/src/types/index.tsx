
export type User = {
    _id: string;
    name: string;
    avatar: string;
    description: string;
    location: string;
    twitter: string;
  }

  export enum NavigationItem{
    USERS,
    CHATS
  }