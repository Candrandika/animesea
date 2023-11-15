import Image from 'next/image'
import Link from 'next/link'

const AnimeCard = ({anime}) => {
    return (
        <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer">
            <Image src={anime.images.webp.image_url} alt={anime.images.jpg.image_url} width={350} height={350} className="anime-card-img xl:h-96 lg:h-80 md:h-72 h-64"/>
            <h3 className="text-color-light font-bold md:text-lg text-md p-4">{anime.title}</h3>
        </Link>
    )
}

export default AnimeCard