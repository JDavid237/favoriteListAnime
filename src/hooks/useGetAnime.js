import { useCallback, useEffect, useRef, useState } from "react";
import { searchAnime } from "../services/searchAnime";

export const useGetAnime = (params, sorted) => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const totalPage = useRef(1);

  const loadPage = useCallback(
    async (currentPage = 1) => {
      if (loading) return;
      setLoading(true);

      const search = await searchAnime(params, currentPage);
      console.log()
      if (error in search) {
        setError(search.error);
      }

      setAnimeList(search.data);
      console.log(search);
      totalPage.current = search.totalPage;
      setLoading(false);

      
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [params]
  );

  useEffect(() => {
    loadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  

  return {
    animeList: sorted(animeList),
    totalPage: totalPage.current,
    loading,
    loadPage,
    error,
  };
};
