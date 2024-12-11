import Card from "../../components/card/Card.jsx"
import style from "./Index.post.module.css"
import { useEffect, useContext } from "react";
import PostsListContext from "../../contexts/PostsListContext.jsx";
export default function IndexPost() {
    const { postsArray, fetchData } = useContext(PostsListContext);
    const BASE_URI = "http://localhost:3000";

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="container">
            <div className={style.row}>
                {postsArray.map((post) => (
                    post.published && (
                        <div className={style.col} key={post.id}>
                            <Card
                                URI={BASE_URI}
                                title={post.title}
                                image={post.image}
                                content={post.content}
                                tags={post.tags}
                                postId={post.id}
                                onClick={fetchData}
                            />
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}
