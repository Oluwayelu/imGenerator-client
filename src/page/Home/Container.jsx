import { useEffect, useState } from "react";
import { Landing } from "../../components/layout";

import { getPosts } from "../../service";
import { useNotification } from "../../hook";

import HomeView from "./View";

export const HomeContainer = () => {
  const { notification } = useNotification();

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts(setLoading)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => notification("error", err.message));
  }, []);

  return (
    <Landing>
      <HomeView posts={posts} loading={loading} />
    </Landing>
  );
};
