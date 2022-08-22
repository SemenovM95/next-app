import {IPost} from "../../lib/types/IPost";
import styles from './post.module.scss';

export default function Post(props: any) {
    const post: IPost =  props.post;

    return (
        <li className={styles.post} data-id={post.id}>
            <h1 className={styles.post__title}>{post.title}</h1>
            <p className={styles.post__description}>{post.description}</p>
        </li>
    )
}