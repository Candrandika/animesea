const Pagination = ({ page, last_page, setPage }) => {

    const scrollToTop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }

    const handleNextPage = () => {
        if(page < last_page) {
            setPage((prevState) => prevState + 1)
            scrollToTop()
        }
    }
    const handlePrevPage = () => {
        if(page > 1) {
            setPage((prevState) => prevState - 1)
            scrollToTop()
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center mt-5 gap-5">
                {
                    page <= 1 ? null : <button type="button" className="text-xl  text-color-light bg-gradient-to-br from-color-primary to-color-secondary hover:from-color-secondary hover:to-color-primary px-2 py-1 rounded" onClick={handlePrevPage}>Prev</button>
                }
                <p className="text-xl text-color-light">page {page} of {last_page}</p>
                {
                    page >= last_page ? null : <button type="button" className="text-xl  text-color-light bg-gradient-to-br from-color-primary to-color-secondary hover:from-color-secondary hover:to-color-primary px-2 py-1 rounded" onClick={handleNextPage}>Next</button>
                }
            </div>
        </div>
    )
}

export default Pagination