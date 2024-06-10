export interface Playlist {
  id: string;
  author: string;
  date: {
    seconds: number,
    nanoseconds: number,
  };
  description: string;
  length: number;
  title: string;
  img: string;
}