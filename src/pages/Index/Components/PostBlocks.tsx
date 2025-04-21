import { ReadNextBtn } from "@/components/ReadNextBtn/ReadNextBtn";
import { RatingButtons } from "@/components/ThumbNails/RatingButtons";
import {
  Article,
  Img,
  PostWrapper,
  RowDiv,
} from "@/components/styledComponents";
import { PostType } from "@/types/posts";

type Props = {
  data: PostType;
};

export const FirstPost = ({ data }: Props) => {
  return (
    <PostWrapper first>
      <Img src="https://placehold.co/1140x600" />
      <RowDiv>
        <h2>{data.title}</h2>
        <RatingButtons data={data} />
      </RowDiv>
      <Article>{data.body}</Article>
      <ReadNextBtn id={data.id} />
    </PostWrapper>
  );
};

export const Post = ({ data }: Props) => {
  return (
    <PostWrapper>
      <Img src="https://placehold.co/1140x600" />

      <h2>{data.title}</h2>
      <RowDiv>
        <RatingButtons data={data} />
        <ReadNextBtn id={data.id} />
      </RowDiv>
    </PostWrapper>
  );
};
