import { useState } from "react";
import Heart from "react-animated-heart";

function LikeButton() {
const [isLiked, setIsLiked] = useState(false);
const [heartCount, setHeartCount] = useState(0);

const handleLike = () => {
if (isLiked) {
setHeartCount(heartCount - 1);
} else {
setHeartCount(heartCount + 1);
}
setIsLiked(!isLiked);
};

const heartImageSrc = isLiked ? "./public/filledHeart.png" : "./public/emptyHeart.png";

return (
<div className="like-info">
<div className="like-button">
    <Heart isClick={isLiked} onClick={handleLike} heartImageSrc={heartImageSrc} />
</div>
<p>Likes: {heartCount}</p>
</div>
);
}

export default LikeButton

