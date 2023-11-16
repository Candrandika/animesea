import AnimeList from '@/components/AnimeList'
import SectionHeader from '@/components/SectionHeader'
import { getAnimeData } from '@/services/api-service'
import Link from 'next/link'
import Recomendation from '@/components/Recomendation'

const Page = async () => {
  const top_animes = await getAnimeData("top/anime", "limit=12")

  return (
    <>
      <section id="popular" className="px-5 mt-5">
        <Recomendation />
        <SectionHeader title="Most Popular Anime" link_href="/popular" link_title="show all" />
        <AnimeList animes={top_animes} />
      </section>
    </>
  )
}

export default Page