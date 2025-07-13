export const searchAnimeCharacters = async ({ id }) => {
  const url = `https://api.jikan.moe/v4/anime/${id}/characters`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();
    const mainCharacters = json?.data
      .sort((a, b) => {
        if (a.role === 'Main') return -1
        if (b.role === 'Main') return 1

        return b.favorites - a.favorites
      } )
      .slice(0, 10)
      .map((char) => {
        return {
          id: char.character.mal_id,
          image: char.character.images.jpg.image_url,
          name: char.character.name,
        };
      });

    return mainCharacters;
  } catch (e) {
    return {
      error: e.message,
    };
  }
};
