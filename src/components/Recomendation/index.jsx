"use client"

import Link from "next/link"
import Image from "next/image"
import { getAnimeData } from "@/services/api-service"
import Carousel from "better-react-carousel"

const Recomendation = async ({ now_animes }) => {
    return (
        <div>
            <Carousel
                cols={5}
                rows={1}
                gap={10}
                loop
                showDots
                autoplay={3000}
                mobileBreakpoint={360}
                responsiveLayout={[
                    {
                        breakpoint: 1024,
                        cols: 4,
                        rows: 1,
                        gap: 10,
                        loop: true,
                    },
                    {
                        breakpoint: 768,
                        cols: 3,
                        rows: 1,
                        gap: 10,
                        loop: true,
                    },
                    {
                        breakpoint: 640,
                        cols: 2,
                        rows: 1,
                        gap: 10,
                        loop: true,
                    }
                ]}
            >
                {
                    now_animes?.data?.map((anime, index) => {
                        return(
                            <Carousel.Item key={index}>
                                    <Link href={`/anime/${anime.mal_id}`} className="">
                                        <Image src={anime.images.webp.large_image_url} alt={anime.images.jpg.large_image_url} width={200} height={300} className="anime-card-img2 xl:h-96 lg:h-80 md:h-72 sm:h-60 h-52"/>
                                    </Link>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Recomendation