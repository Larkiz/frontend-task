import { Article, Img, Loader, RowDiv } from "@/components/styledComponents";
import { RatingButtons } from "@/components/ThumbNails/RatingButtons";
import { RootState } from "@/redux/initStore";
import { clearPost, setPost } from "@/redux/slices/postsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router";
import styled from "styled-components";

const NavLinkStyled = styled(NavLink)`
  color: #000;
  text-decoration: none;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: bottom;
`;

export const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store: RootState) => store.posts.post);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => res.json())
      .then((data) => dispatch(setPost(data)));
  }, []);

  return (
    <div className="post-page">
      <RowDiv>
        <NavLinkStyled onClick={() => dispatch(clearPost())} to={"/"}>
          <RowDiv gap={5}>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z"
                fill="#0A0A0A"
              />
            </svg>

            <Article>Вернуться к статьям</Article>
          </RowDiv>
        </NavLinkStyled>
        {data.id !== 0 ? <RatingButtons data={data} /> : null}
      </RowDiv>
      {data.id !== 0 ? (
        <>
          <Title>{data.title}</Title>
          <Img src="https://placehold.co/1140x600" />
          <Article>{data.body}</Article>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
