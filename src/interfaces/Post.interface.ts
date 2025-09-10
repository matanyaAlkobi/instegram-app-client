export interface Post {
  id: number;
  username: string;
  imagemame: string;
  image: string;
  likes: number;
  timeAndHour: string;
  imageDescription: string;
}


export interface newPost {
  username: string | undefined;
  image: string |undefined;
  imageDescription: string |undefined;
}
