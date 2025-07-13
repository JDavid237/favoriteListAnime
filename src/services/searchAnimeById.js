import { searchAnimeCharacters } from "./searchAnimeCharacters"

export const searchAnimeById = async ({id}) => {
    const url = `https://api.jikan.moe/v4/anime/${id}/full`
    

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        
        const json = await response.json()
        const characters = await searchAnimeCharacters({id})
        const {data: anime} = json

        return {
            id: anime.mal_id,
            title: anime.title,
            type: anime.type,
            theme: anime.theme,
            source: anime.source,
            studios: anime.studios.map((studio) => studio.name),
            genres: anime.genres.concat(anime.themes),
            popularity: anime.popularity,
            rank: anime.rank || '--',
            members: anime.members,
            synopsis: anime.synopsis.replace(/\[written.*?\]/ig, "").trim(),
            status: anime.status.includes('Finished') ? 'Finalizado' : anime.status.includes('Not')  ? 'Sin emision todavia' : 'En emision',
            image: anime.images?.jpg?.image_url,
            score: anime.score || '----',
            aired: anime.aired?.prop?.from
            ? `${anime.aired.prop.from.day}/${anime.aired.prop.from.month}/${anime.aired.prop.from.year}`
            : "N/A",
            season: anime.season,
            episodes: anime.episodes || '?',
            relations: anime.relations.filter((anime) => anime.relation === 'Prequel' || anime.relation === 'Sequel' || anime.relation === "Adaptation"),
            characters
        }

    } catch (e) {
        return {
            error: e.message
        }
    }
}