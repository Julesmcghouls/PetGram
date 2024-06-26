import FollowButton from "./FollowButton";
import LikeButton from "./LikeButton";
import WaylonPost from "./WaylonPost";
import WaylonHead from "./WaylonHead";

function Post() {
    return (
        <>
        <div className="post">
            <div className="user-info">
                <WaylonHead />
                <p>🤠 Cowboy Waylon</p>
                <FollowButton />
            </div>

        </div><div>
                <WaylonPost />
                <LikeButton />
            </div>
        </>
    )
}

export default Post

