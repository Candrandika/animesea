import AnimeCard from '@/components/AnimeCard'

const AnimeList = ({animes}) => {
    return (
        <div className="grid 2xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
            {
            animes.data?.map(anime => {
                return (
                <div key={anime.mal_id} className="shadow-xl bg-color-body rounded-md">
                    <AnimeCard anime={anime} title={anime?.title} image={anime?.images?.webp?.image_url} mal_id={anime.mal_id}/>
                </div>
                )
            })
            }
        </div>
    )
}

export default AnimeList