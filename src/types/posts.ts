export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  likes: number;
  dislikes: number;
  ratingStatus: "like" | "dislike" | "nothing";
};

type RatingFunction = (post: PostType) => PostType;

export type RatingActions = {
  like: {
    like: RatingFunction;
    dislike: RatingFunction;
    nothing: RatingFunction;
  };
  dislike: {
    like: RatingFunction;
    dislike: RatingFunction;
    nothing: RatingFunction;
  };
};

export type Posts = PostType[];
