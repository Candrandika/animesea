
const DetailAnime = ({title, value}) => {
    return (
        <div className="bg-color-dark rounded flex flex-col justify-between items-center p-2">
            <div className="text-xs bg-color-primary px-2 rounded w-full text-center">{ title.toUpperCase() }</div>
            <div className="font-bold text-lg text-color-light whitespace-nowrap">{ value }</div>
        </div>
    )
}

export default DetailAnime