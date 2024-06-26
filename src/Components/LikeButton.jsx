import { useState } from "react";

const emptyHeartImage = "https://img.icons8.com/emoji/48/000000/heart-emoji.png"
const filledHeartImage = "https://img.icons8.com/emoji/48/000000/heart-emoji.png"

function LikeButton() {
    const [likes, setLikes] = useState(0);

    return (
        <div className="like-info">
            <div className="like-button" onClick={() => setLikes(likes + 1)}>
                {likes > 0 ? (
                    <img src={filledHeartImage} alt="filled heart" />
                ) : (
                    <img src={emptyHeartImage} alt="empty heart" />
                )}
            </div>
        </div>
    )
}

export default LikeButton