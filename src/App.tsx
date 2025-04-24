import { Index } from "@/pages/Index/Index";
import { PostPage } from "@/pages/Post/Post";
import { RootState } from "@/redux/initStore";
import { setPosts } from "@/redux/slices/postsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router";
type Route = { path: string; element: React.ReactElement };
const routes: Route[] = [
  { path: "/", element: <Index /> },
  { path: "/post/:id", element: <PostPage /> },
];
export const App = () => {
  const { searchFilter } = useSelector((store: RootState) => store.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    let url: string = "https://jsonplaceholder.typicode.com/posts";
    if (searchFilter !== "") {
      url += `?title=${searchFilter}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(setPosts(data)));
  }, [searchFilter]);
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((props) => {
          return <Route {...props} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
