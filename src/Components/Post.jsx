import FollowButton from "./FollowButton";
import LikeButton from "./LikeButton";

const postImage = "./public/WaylonPost.png";
const userImage = "./public/WaylonHead.png";

function Post() {
    return (
        <>
        <div className="post">
            <div className="user-info">
                <img id="profile-img" src={userImage} alt="profile image" />
                <p>🤠 Cowboy Waylon</p>
                <FollowButton />
            </div>

        </div>
        <div>
            <img id="post-img" src={postImage} alt="post image" />
            <LikeButton />
        </div>
        </>
    )
}

export default Post

