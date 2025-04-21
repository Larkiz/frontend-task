import { Index } from "@/pages/Index/Index";
import { PostPage } from "@/pages/Post/Post";
import { setPosts } from "@/redux/slices/postsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
type Route = { path: string; element: React.ReactElement };
const routes: Route[] = [
  { path: "/", element: <Index /> },
  { path: "/post/:id", element: <PostPage /> },
];
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => dispatch(setPosts(data)));
  }, []);

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
