import React, { useEffect, useRef, useState } from "react";
import "./Upload.scss";

interface UploadProps {
  onFilesChange?: (files: File[]) => void;
}

export const Upload: React.FC<UploadProps> = ({ onFilesChange }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragActive, setIsDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onFilesChange?.(files);
  }, [files, onFilesChange]);

  const handleFiles = (list: FileList | null) => {
    if (list?.length) setFiles((prev) => [...prev, ...Array.from(list)]);
  };

  const handleDrag = (e: React.DragEvent, active: boolean) => {
    e.preventDefault();
    setIsDragActive(active);
  };

  return (
    <div className="upload_container">
      {files.length === 0 ? (
        <div
          className={`upload_zone ${isDragActive ? "active" : ""}`}
          onDragOver={(e) => handleDrag(e, true)}
          onDragLeave={() => setIsDragActive(false)}
          onDrop={(e) => {
            handleDrag(e, false);
            handleFiles(e.dataTransfer.files);
          }}
        >
          <input
            ref={inputRef}
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={(e) => {
              handleFiles(e.target.files);
              e.target.value = "";
            }}
          />
          <span className="upload_zone_icon">{isDragActive ? "📥" : "📤"}</span>
          <p>
            {isDragActive ? "여기에 놓으세요!" : "파일을 드래그하여 놓으세요"}
          </p>
          <button
            type="button"
            className="upload_zone_select_btn"
            onClick={(e) => {
              e.stopPropagation();
              inputRef.current?.click();
            }}
          >
            파일 선택하기
          </button>
        </div>
      ) : (
        /* 업로드 파일 있는 경우 */
        <div className="upload_file_list">
          <div className="upload_file_list_header">
            총 {files.length}개 파일
          </div>
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="upload_file_list_item"
            >
              <div className="upload_file_list_text_group">
                <span className="upload_file_list_name" title={file.name}>
                  📄 {file.name}
                </span>
                <span className="upload_file_list_size">
                  ({(file.size / 1024).toFixed(1)} KB)
                </span>
              </div>
              {/* 여기서 파일을 하나씩 지우다가 마지막 파일이 지워지면 files는 []가 되어 자동으로 드롭존이 다시 뜹니다. */}
              <button
                type="button"
                className="upload_file_list_remove_btn"
                onClick={() =>
                  setFiles((prev) => prev.filter((_, i) => i !== index))
                }
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
