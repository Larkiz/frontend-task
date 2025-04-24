import { SearchInput } from "@/components/SearchInput/SearchInput";
import { FirstPost, Post } from "@/pages/Index/Components/PostBlocks";
import { RootState } from "@/redux/initStore";
import { changeSearchFilter } from "@/redux/slices/postsSlice";
import { PostType } from "@/types/posts";

import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

const Title = styled.h1`
  font-size: 60px;
  text-align: center;
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  vertical-align: bottom;
`;

const PostsWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Index = () => {
  const { posts, searchFilter } = useSelector(
    (store: RootState) => store.posts
  );
  const dispatch = useDispatch();

  return (
    <div className="index">
      <Title>Блог</Title>
      <Description>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи.
      </Description>
      <SearchInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(changeSearchFilter(e.target.value))
        }
        value={searchFilter}
        placeholder="Поиск по названию строки"
      />
      <PostsWrapper>
        {posts.map((post: PostType, index) => {
          if (index === 0) {
            return <FirstPost data={post} />;
          }

          return <Post data={post} />;
        })}
      </PostsWrapper>
    </div>
  );
};
