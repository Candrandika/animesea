export const getAnimeData =  async(resource = '', query = '') => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/${resource}?${query}`)
    const data = await response.json()
    return data
}

export const flattenLimitAnimeDataByIndex = (nested_animes = {}, limit = 0) => {
    let flatten_data = nested_animes.data?.flatMap((data) => data.entry)

    const min_index = Math.floor(Math.random() * (flatten_data.length-limit) +1)

    if(limit !== 0) flatten_data = flatten_data.splice(min_index, limit)
    return {data: flatten_data}
}

export const flattenLimitAnimeData = (nested_animes = {}, limit = 0) => {
    let flatten_data = nested_animes.data?.flatMap((data) => data.entry)

    let limited_data = [];
    while(limit !== 0 && limited_data.length < limit) {
        let random_index = Math.floor(Math.random() * (flatten_data.length-1))
        
        if(flatten_data[random_index]) {
            let already_in = limited_data.some((o) => o.mal_id === flatten_data[random_index].mal_id)
            if(!already_in) limited_data.push(flatten_data[random_index])
        }
    }

    if(limit === 0) limited_data = flatten_data
    return {data: limited_data}
}