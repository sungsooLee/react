import React, { useCallback, useState } from "react";
import { Upload } from "./Upload";

export const UploadSamplePage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  // useCallback으로 참조 고정 (없어도 동작은 하지만 불필요한 effect 재실행 방지)
  const handleFilesChange = useCallback((updated: File[]) => {
    setFiles(updated);
  }, []);

  const handleUpload = async () => {
    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    const res = await fetch("/api/upload", { method: "POST", body: formData });
    if (!res.ok) {
      alert("업로드 실패");
      return;
    }
    alert(`${files.length}개 파일 업로드 완료`);
  };

  return (
    <div style={{ maxWidth: 480, margin: "40px auto" }}>
      <h2>파일 업로드</h2>

      {/* key를 파일 개수 등 변하는 값으로 주지 말 것 — 리마운트되면 목록이 초기화됨 */}
      <Upload onFilesChange={handleFilesChange} />

      <button
        type="button"
        onClick={handleUpload}
        disabled={files.length === 0}
      >
        업로드하기 ({files.length})
      </button>
    </div>
  );
};

export default UploadSamplePage;
