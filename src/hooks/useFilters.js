import { useCallback, useEffect, useState } from "react";
import { updateLocaleStorage } from "../utils/updateLocaleStorage";

const initialState = (storage) => {
  const storageFilters = JSON.parse(localStorage.getItem(storage))
  if (storageFilters) return storageFilters

  return {
    q: "",
    type: ""
  }
}

export const useFilters = (storage) => {
  const [sort, setSort] = useState(true);
  const [filters, setFilters] = useState(() => initialState(storage));

  const updateFilter = useCallback(
    (field, value) => {
      if (field == "sort") {
        setSort(!sort);
        return;
      }

      setFilters((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    [sort]
  );

  useEffect(()=> {
    updateLocaleStorage(filters, storage)
  }, [filters, storage])

  const sorted = useCallback(
    (animeList) => {
      const query = filters.q.toLowerCase();
      const copyList = [...animeList];

      return sort
        ? copyList.sort((a, b) => {
            const aStarts = a.title.toLowerCase().startsWith(query) || a.title_english?.toLowerCase().startsWith(query) ;
            const bStarts = b.title.toLowerCase().startsWith(query) || b.title_english?.toLowerCase().startsWith(query)

            if (aStarts && !bStarts) return -1;
            if (!aStarts && bStarts) return 1;

            return a.title.localeCompare(b.title);
          })
        : copyList.sort((a, b) => {
            const aStarts = a.title.toLowerCase().startsWith(query) || a.title_english?.toLowerCase().startsWith(query);
            const bStarts = b.title.toLowerCase().startsWith(query) || b.title_english?.toLowerCase().startsWith(query);

            if (bStarts && !aStarts) return -1;
            if (!bStarts && aStarts) return 1;

            return b.title.localeCompare(a.title);
          });
    },
    [sort, filters]
  );

  return { filters, updateFilter, sorted, sort };
};
