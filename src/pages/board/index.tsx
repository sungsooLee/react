import { useEffect, useState } from "react";
import { Post } from "./types/Post";
import cn from "classnames";
import styles from "./index.module.scss";

export default function Board() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("posts");
    if (saved) setPosts(JSON.parse(saved));
  }, []);

  const savePosts = (next: Post[]) => {
    setPosts(next);
    localStorage.setItem("posts", JSON.stringify(next));
  };

  const addPost = () => {
    if (!title || !content) return;
    const newPost: Post = { id: Date.now(), title, content };
    savePosts([...posts, newPost]);
    setTitle("");
    setContent("");
  };

  const deletePost = (id: number) => {
    savePosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <h1>게시판</h1>

      <input
        className={styles.input}
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={styles.textarea}
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className={styles.button} onClick={addPost}>
        등록
      </button>

      <ul className={styles.board_list}>
        {posts.map((post) => (
          <li key={post.id} className={styles.board_item}>
            <a href={`${import.meta.env.BASE_URL}board/detail?id=${post.id}`}>
              {post.title}
            </a>
            <button
              className={cn(styles.button, styles.btn_delete)}
              onClick={() => deletePost(post.id)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
