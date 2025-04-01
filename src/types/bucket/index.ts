export interface IBucketForm {
  title: string;
  description: string;
  dday: string;
  rock: boolean;
  thumbnail: string;
  detail_image: string;
  hashtag: string;
  create_user: number;
}

export interface IMyBucketForm {
  complete_at: string;
  create_at: string;
  dday: string;
  description: string;
  detail_image: string;
  hashtag: string;
  id: number;
  like: number;
  like_ids: string;
  rock: boolean;
  thumbnail: string;
  title: string;
  together: number;
  together_ids: string;
}
