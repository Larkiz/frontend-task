import styled from "styled-components";

export const PostWrapper = styled.div<{ first?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: ${(props) => (props.first ? "100%" : "calc(50% - 12px)")};
`;

export const Img = styled.img`
  width: 100%;
`;

export const RowDiv = styled.div<{ gap?: number }>`
  gap: ${(props) => (props.gap ? props.gap + "px" : "0px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Article = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const Loader = styled.span.attrs(() => ({
  className: "loader",
}))`
  align-self: center;
`;
