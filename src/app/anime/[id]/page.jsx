import { getAnimeData } from "@/services/api-service"
import Image from "next/image"
import DetailAnime from "@/components/DetailAnime"
import YtPlayer from "@/components/utilities/YtPlayer"

const Page = async({ params }) => {
    const anime = await getAnimeData(`anime/${params.id}`)

    return (
        <div className="">
            <div className="flex flex-col gap-5">
                <div className="flex md:flex-row flex-col gap-5">

                    <div className="detail-image">
                        <Image src={anime.data.images.webp.large_image_url} alt={anime.data.images.jpg.large_image_url} width={200} height={200} className="w-full rounded-lg"/>
                    </div>

                    <div className="grow shrink flex gap-5 flex-col">
                        <div className="flex-1 rounded-xl bg-gradient-to-br from-color-primary from-35% to-color-secondary to-65% grid place-content-center font-extrabold lg:text-4xl md:text-2xl text-lg py-3 text-color-dark text-center">
                            {anime.data.title}
                        </div>
                        <div className="bg-color-body rounded-lg flex flex-nowrap overflow-x-auto p-2 gap-2">
                            <DetailAnime title="Score" value={`${anime.data.score}`} />
                            <DetailAnime title="Rank" value={`#${anime.data.rank}`} />
                            <DetailAnime title="popularity" value={`#${anime.data.popularity}`} />
                            <DetailAnime title="members" value={`${anime.data.members}`} />
                            <DetailAnime title="episodes" value={`${anime.data.episodes}`} />
                            <DetailAnime title="type" value={`${anime.data.type}`} />
                        </div>
                    </div>
                </div>
                <div className="col-span-6 bg-color-body rounded-lg p-3">
                    <h3 className="font-bold text-lg inline text-transparent bg-clip-text bg-gradient-to-br from-color-primary to-color-secondary ">Synopsis :</h3>
                    <p className="w-full text-color-light">
                        {anime.data.synopsis}
                    </p>
                </div>
            </div>
            <div>
                <YtPlayer yt_id={anime.data.trailer.youtube_id} />
            </div>
        </div>
    )
}

export default Page