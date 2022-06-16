import styles from './Post.module.css';

interface IPostProps {
    author: string;
    content: string
}

export function Post(props: IPostProps) {
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div >
    )
}