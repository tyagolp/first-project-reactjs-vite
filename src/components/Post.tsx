import { Avatar } from './Avatar';
import { Comment, IComment } from './Comment';
import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, useState, InvalidEvent } from 'react';

interface IPostAuthor {
    avatarUrl: string;
    name: string;
    role: string;
}

type IPostContentTypes = "paragraph" | "link";

interface IPostContent {
    content: string;
    type: IPostContentTypes;
}

export interface IPost {
    id: number;
    author: IPostAuthor;
    publishedAt: Date;
    content: IPostContent[];
}
interface IPostProps {
    post: IPost;
}


export function Post({ post }: IPostProps) {
    const [comments, setComments] = useState<IComment[]>([])
    const [newCommentText, setNewCommentText] = useState('')


    const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBr
    })
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBr,
        addSuffix: true
    })


    function handleCreateNewComment(event: FormEvent): void {
        event.preventDefault();

        setComments([...comments, {
            author: 'sdasdasd',
            authorImg: 'https://github.com/tyagolp.png',
            content: newCommentText,
            publishedAt: new Date()
        }])

        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)

    }
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(content: string) {
        const result = comments.filter(x => x.content !== content);
        setComments(result)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(x => {
                    switch (x.type) {
                        case 'link':
                            return <p key={x.content}><a href=''>{x.content}</a></p>;
                        case 'paragraph':
                            return <p key={x.content}>{x.content}</p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    placeholder='Deixe um comentário'
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>
                    <Comment
                        key={comment.content}
                        comment={comment}
                        onHandleDeleteComment={deleteComment}
                    />
                )}
            </div>

        </article >
    )
}