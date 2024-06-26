import { useState } from "react";

const emptyHeartImage = "♡";

const filledHeartImage = "♥";

function LikeButton() {
const [heartCount, setHeartCount] = useState(0);

const handleLike = () => setHeartCount(heartCount + 1);

const heartImageSrc = heartCount > 0 ? filledHeartImage : emptyHeartImage;

return (
<div className="like-info">
    <div className="like-button" onClick={handleLike}>
    <img src={heartImageSrc} alt="heart" />
    </div>
    <p>{heartCount} likes</p>
</div>
);
}

export default LikeButton