import { useCallback, useState } from "react";

export const useFilters = () => {
  const [sort, setSort] = useState(true);
  const [filters, setFilters] = useState({
    q: "",
    type: "",
  });

  const updateFilter = useCallback((field, value) => {
    if (field == "sort") {
      setSort(!sort);
      return;
    }

    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, [sort]);

  const sorted = useCallback((animeList) => {
    const copyList = [...animeList]
    return sort
      ? copyList.sort((a, b) => a.title.localeCompare(b.title))
      : copyList.sort((a, b) => b.title.localeCompare(a.title));
  }, [sort]);

  return { filters, updateFilter, sorted, sort };
};
