import { format, formatDistanceToNow } from 'date-fns';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

export interface IComment {
    content: string
    author: string
    authorImg: string
    publishedAt: Date
}
interface ICommentProps {
    comment: IComment
    onHandleDeleteComment: (id: string) => void
}

export function Comment({ comment, onHandleDeleteComment }: ICommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    const publishedDateFormated = format(comment.publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBr
    })
    const publishedDateRelativeToNow = formatDistanceToNow(comment.publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={comment.authorImg} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{comment.author}</strong>
                            <time title={publishedDateFormated} dateTime={comment.publishedAt.toISOString()}>
                                {publishedDateRelativeToNow}
                            </time>
                        </div>
                        <button
                            onClick={() => { onHandleDeleteComment(comment.content) }}
                            title="Deletar comnetário"
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{comment.content}</p>
                </div>
                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div >
    )
}