import { ReactElement, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../states/hooks";
import { postSlices, postSelectors } from "../states/post";

import LayoutDefault from "../layouts/default";

export default function Home() {
  const dispatch = useAppDispatch();

  const { pending, posts, error } = useAppSelector((state) => state.posts);
  // const { pending, posts, error } = useAppSelector((state) => postSelectors.selectors.selectAll(state.posts));

  const getPosts = () => dispatch(postSlices.actions.listRequest());

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <div>
        {pending ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          posts?.map((post, index) => (
            <div key={post.id}>
              {++index}. {post.title}
            </div>
          ))
        )}
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};
