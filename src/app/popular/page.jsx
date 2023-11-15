"use client"

import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import SectionHeader from "@/components/SectionHeader";
import React, { useState, useEffect } from "react";
import { getAnimeData } from "@/services/api-service";

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnimes, setTopAnimes] = useState([])

    const fetchData = async () => {
        const top_animes = await getAnimeData("top/anime", `page=${page}`)
        setTopAnimes(top_animes)
    }

    useEffect(() => {
        fetchData()
    }, [page])


    return (
        <div>
            <HeaderMenu  title={`Most Popular Animes#${page}`}/>
            <section id="popular" className="px-5 mt-5">
                <AnimeList animes={topAnimes} />
            </section>
            <Pagination page={page} last_page={topAnimes?.pagination?.last_visible_page} setPage={setPage}/>
        </div>
    )
}

export default Page