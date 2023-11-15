import SectionHeader from '@/components/SectionHeader'
import AnimeList from '@/components/AnimeList'
import { getAnimeData } from '@/services/api-service'

const Page = async ({ params }) => {
    const {search_key} = params 
    const search_animes = await getAnimeData("anime", `q=${search_key}`)
    return (
        <>
        <section id="search" className="px-5 mt-5">
            <SectionHeader title={`Result for "${decodeURI(search_key)}"`}/>
            <AnimeList animes={search_animes} />
        </section>
        </>
    )
}

export default Page