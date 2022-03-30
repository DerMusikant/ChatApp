
export type User = {
    _id: string,
    name: string,
    description: string,
    twitter: string
  }

export type PromiseType = {
   error: string;
   body: Array<User>
  }

export enum NavigationItem{
   USERS,
   CHATS
  }