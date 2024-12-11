import style from "./Show.post.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import placeholder from "../../assets/imgs/placeholder.jpg";
import DeleteButton from "../../components/deletebutton/DeleteButton";
export default function ShowPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const BASE_URI = "http://localhost:3000";
    const navigate = useNavigate();
    function fetchData() {
        axios
            .get(`${BASE_URI}/posts/${id}`)
            .then((res) => {
                console.log(res.data)
                setPost(res.data);
            })
            .catch((err) => {
                console.error(err.message);
                setPost(null);
            });
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div>
            {post ? (
                <>
                    <div className="container">
                        <h1>Dettagli del post {post.id}</h1>
                        <h2>{post.title}</h2>

                        <div className={style.row}>
                            <div className={style.col_6}>

                                <img className={style.img_detail} src={post.image ? post.image.includes("https") ? post.image : `${BASE_URI}/${post.image}` : placeholder} alt={post.title} />
                            </div>
                            <div className={style.col_6}>
                                <p>{post.content}</p>

                            </div>
                            <div className={style.col_12}>
                                <button className={style.back} onClick={() => navigate("/blog")}>Torna ai post</button>
                                <DeleteButton />

                            </div>
                        </div>
                    </div>
                    <div className="flex-show">
                        <button className={style.btn_slide} onClick={() => { id > 1 && navigate(`/blog/${+id - 1}`) }}>previous</button>
                        <button className={style.btn_slide} onClick={() => navigate(`/blog/${+id + 1}`)}>next</button>
                    </div>
                </>

            ) : (
                <div>Post non trovato</div>
            )
            }
        </div >
    );
}
