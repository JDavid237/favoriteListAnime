export const searchAnime = async (params = {}, page = 1) => {
  let url = `https://api.jikan.moe/v4/anime?page=${page}`;

  for (let param in params) {
    if (params[param]) {
      url += `&${param}=${params[param]}`;
    }
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();

    const data = json?.data.map((anime) => ({
      id: anime.mal_id,
      title: anime.title,
      title_english: anime?.title_english,
      type: anime.type,
      image: anime.images?.jpg?.image_url,
      score: anime.score,
      aired: anime.aired?.prop?.from
        ? `${anime.aired.prop.from.day}/${anime.aired.prop.from.month}/${anime.aired.prop.from.year}`
        : "N/A",
      season: anime.season,
      episodes: anime.episodes || '?',
    }));

    return {
      data,
      totalPage: json?.pagination?.last_visible_page,
    };
  } catch(e){
    return {
      error: e,
      data: [],
      totalPage: 0,
    };
  }
};
