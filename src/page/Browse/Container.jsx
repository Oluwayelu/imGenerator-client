import { useEffect, useState } from "react";

import { getPosts } from "../../service";
import { useNotification } from "../../hook";
import { Landing } from "../../components/layout";

import BrowseView from "./View";

export const BrowseContainer = () => {
  const { notification } = useNotification();

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(false);
  const [loadingMore, setLodingMore] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fetchPosts = () => {
      getPosts(page > 1 ? setLodingMore : setLoading, page)
        .then((res) => {
          setPosts([...posts, ...res.data]);
          // where 10 is limit length
          setLastPage(res.count <= page * 10);
        })
        .catch((err) => notification("error", err.message));
    };

    fetchPosts();
  }, [page]);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);

    if (e.target.value) {
      setSearchTimeout(
        setTimeout(() => {
          setPage(1);
          getPosts(setLoading, page, 20, e.target.value)
            .then((res) => {
              setSearchResult(res.data);
            })
            .catch((err) => notification("error", err.message));
        }, 500)
      );
    } else {
      setLastPage(false);
      setSearchResult(null);
    }
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Landing>
      <BrowseView
        loading={loading}
        loadMore={loadMore}
        lastPage={lastPage}
        loadingMore={loadingMore}
        handleSearchChange={handleSearchChange}
        posts={searchResult ? searchResult : posts}
      />
    </Landing>
  );
};
