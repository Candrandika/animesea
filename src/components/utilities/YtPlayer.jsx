"use client"

import YouTube from "react-youtube"
import {XCircle} from "@phosphor-icons/react"
import {useState} from "react"

const YtPlayer = ({yt_id}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleVideoButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width:300,
        height:250
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button type="button" className="font-bold text-lg text-color-light p-1 float-right" onClick={handleVideoButton}>
                    &times;
                </button>

                <YouTube 
                    videoId={yt_id}
                    onReady={(e) => e.target.pauseVideo()}
                    opts={option}
                />
            </div>
        )
    }

    const ShowButton = () => {
        return (
            <button type="button" onClick={handleVideoButton} className="px-2 py-1 text-sm rounded fixed bottom-3 right-3 bg-gradient-to-br from-color-primary to-color-secondary">show trailer</button>
        )
    }

    return isOpen ? <Player /> : <ShowButton />
}

export default YtPlayer