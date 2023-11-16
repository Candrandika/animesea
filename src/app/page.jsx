import AnimeList from '@/components/AnimeList'
import SectionHeader from '@/components/SectionHeader'
import { flattenLimitAnimeData, getAnimeData } from '@/services/api-service'
import Link from 'next/link'
import Recomendation from '@/components/Recomendation'

const Page = async () => {
  const top_animes = await getAnimeData("top/anime", "limit=12")
  const now_animes = await getAnimeData('seasons/now')
  const recommendations = await getAnimeData("recommendations/anime")
  const recommended_animes = flattenLimitAnimeData(recommendations, 6)

  return (
    <>
      <section id="popular" className="mt-5">
        <Recomendation now_animes={now_animes}/>
        <SectionHeader title="Most Popular Anime" link_href="/popular" link_title="show all" />
        <AnimeList animes={top_animes} />
        <SectionHeader title="Recommended Animes"/>
        <AnimeList animes={recommended_animes} />
      </section>
    </>
  )
}

export default Page