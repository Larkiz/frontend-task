import { RowDiv } from "@/components/styledComponents";
import { DislikeButton, LikeButton } from "@/components/ThumbNails/ThumbNails";
import { dislikePost, likePost } from "@/redux/slices/postsSlice";
import { PostType } from "@/types/posts";
import { useDispatch } from "react-redux";

export const RatingButtons = ({ data }: { data: PostType }) => {
  const dispatch = useDispatch();
  return (
    <RowDiv gap={24}>
      <LikeButton
        onClick={() => dispatch(likePost(data.id))}
        active={data.ratingStatus === "like"}
        value={data.likes}
      />
      <DislikeButton
        onClick={() => dispatch(dislikePost(data.id))}
        value={data.dislikes}
        active={data.ratingStatus === "dislike"}
      />
    </RowDiv>
  );
};
