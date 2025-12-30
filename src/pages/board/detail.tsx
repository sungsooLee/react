import { useEffect, useState } from "react";
import { Post } from "./types/Post";
import cn from "classnames";
import styles from "./detail.module.scss";

export default function BoardDetail() {
  const [post, setPost] = useState<Post | null>(null);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (!id) return;

    const saved = localStorage.getItem("posts");
    if (!saved) return;

    const posts: Post[] = JSON.parse(saved);
    const found = posts.find((p) => String(p.id) === id);
    if (found) {
      setPost(found);
      setTitle(found.title);
      setContent(found.content);
    }
  }, []);

  const savePost = () => {
    if (!post) return;
    const saved = localStorage.getItem("posts");
    if (!saved) return;

    const posts: Post[] = JSON.parse(saved);
    const updated = posts.map((p) =>
      p.id === post.id ? { ...p, title, content } : p
    );
    localStorage.setItem("posts", JSON.stringify(updated));
    setPost({ ...post, title, content });
    setEditing(false);
  };

  if (!post) return <div className={styles.wrapper}>게시글 없음</div>;

  return (
    <div className={styles.wrapper}>
      {editing ? (
        <>
          <input
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", marginBottom: 8 }}
          />
          <textarea
            className={styles.textarea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: "100%", height: 100, marginBottom: 8 }}
          />
          <button
            className={cn(styles.button, styles.btn_save)}
            onClick={savePost}
          >
            저장
          </button>
          <button
            className={cn(styles.button, styles.btn_cancel)}
            onClick={() => setEditing(false)}
          >
            취소
          </button>
        </>
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <button
            className={cn(styles.button, styles.btn_edit)}
            onClick={() => setEditing(true)}
          >
            수정
          </button>
        </>
      )}
      <div>
        <a
          className={styles.history_back}
          href={`${import.meta.env.BASE_URL}board`}
        >
          ← 목록으로
        </a>
      </div>
    </div>
  );
}
