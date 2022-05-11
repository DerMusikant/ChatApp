export type User = {
    _id: string,
    name: string,
    description: string,
    twitter: string,
    profilePic: string,
    fileDestination?: string
  }

export interface Post {
  name: string,
  description: string,
  twitter: string,
  file: File
}

export type GetPromise = {
   error: string;
   body: Array<User>
  }

export type PostPromise = {
  error: string;
  body: User
 }

 export type Activate = {
   (user: User): void
 }

export enum NavigationItem{
   USERS,
   CHATS
  }