export type User = {
    _id: string,
    name: string,
    description: string,
    twitter: string
  }

export interface Post {
  name: string,
  description?: string,
  twitter?: string
}

export type GetPromise = {
   error: string;
   body: Array<User>
  }

export type PostPromise = {
  error: string;
  body: User
 }
 
export enum NavigationItem{
   USERS,
   CHATS
  }