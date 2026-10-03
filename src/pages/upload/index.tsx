import React, { useCallback, useRef, useState } from "react"; // ✅ useRef 추가
import { Upload, UploadHandle } from "./Upload"; // ✅ UploadHandle 추가

export const UploadSamplePage: React.FC = () => {
  const uploadRef = useRef<UploadHandle>(null); // ✅ Upload 제어용 ref
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
    uploadRef.current?.clear(); // ✅ 업로드 성공 후 목록 초기화
  };

  return (
    <div style={{ maxWidth: 480, margin: "40px auto" }}>
      <h2>파일 업로드</h2>
      {/* key를 파일 개수 등 변하는 값으로 주지 말 것 — 리마운트되면 목록이 초기화됨 */}
      <Upload ref={uploadRef} onFilesChange={handleFilesChange} hideAttachBtn />
      {/* ✅ ref 연결 */}
      {/* ✅ 부모에서 만든 버튼들 */}
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button type="button" onClick={() => uploadRef.current?.open()}>
          파일 추가하기
        </button>
        <button
          type="button"
          onClick={() => uploadRef.current?.clear()}
          disabled={files.length === 0}
        >
          전체 삭제
        </button>
        <button
          type="button"
          onClick={handleUpload}
          disabled={files.length === 0}
        >
          업로드하기 ({files.length})
        </button>
      </div>
    </div>
  );
};

export default UploadSamplePage;
