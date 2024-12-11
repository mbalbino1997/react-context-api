import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import style from "./DeleteButton.module.css"
import { useContext } from 'react';
import PostsListContext from '../../contexts/PostsListContext';
import axios from 'axios';
export default function DeleteButton({ onClick, postID, URI }) {
    const { setPostsArray, postsArray } = useContext(PostsListContext);
    function deletePost() {
        axios.delete(`${URI}/posts/${postID}`)
            .then((res) => {
                const updatedPosts = postsArray.filter((post) => post.id !== postID);
                setPostsArray(updatedPosts);

            })
    }



    return (
        <button className={style.btn_form} onClick={deletePost}><FontAwesomeIcon icon={faTrash} /></button>
    )
}