"use client"

import SectionHeader from '@/components/SectionHeader'
import AnimeList from '@/components/AnimeList'
import { getAnimeData } from '@/services/api-service'
import { useState, useEffect } from 'react'
import Pagination from '@/components/utilities/Pagination'

const Page = async ({ params }) => {
    const {search_key} = params 
    const [page, setPage] = useState(1)
    const [searchAnimes, setSearchAnimes] = useState([])

    const fetchData = async () => {
        const search_animes = await getAnimeData("anime", `q=${search_key}&page=${page}`)
        setSearchAnimes(search_animes)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <section id="search" className="mt-5">
            <SectionHeader title={`Result for "${decodeURI(search_key)}" page ${page}`}/>
            <AnimeList animes={searchAnimes} />
            <Pagination page={page} last_page={searchAnimes?.pagination?.last_visible_page} setPage={setPage}/>
        </section>
    )
}

export default Page