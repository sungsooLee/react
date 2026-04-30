// IconGuide.tsx
import React from "react";
import { iconMap, IconName } from "@/components/icons"; // 아이콘 컴포넌트 경로에 맞게 수정

const IconGuide = () => {
  const copyToClipboard = (name: string) => {
    const text = `<Icon name="${name}" />`;
    navigator.clipboard.writeText(text);
    alert(`복사 완료: ${text}`);
  };

  const code = `import { Icon } from "@/components/icons/Icon";

<Icon name={iconName} size={"xl"} />
`;

  return (
    <div className="guide-detail">
      <h2>Icons</h2>
      <p>아이콘 컴포넌트입니다.</p>
      {/* Preview */}
      <div className="section">
        <div className="icon-guide-grid">
          {Object.keys(iconMap).map((name) => {
            const Icon = iconMap[name as IconName];
            return (
              <div
                key={name}
                className="icon-item"
                onClick={() => copyToClipboard(name)}
                title="클릭 시 컴포넌트 코드 복사"
              >
                <div className="icon-visual">
                  <Icon width={32} height={32} />
                </div>
                <span className="icon-name">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Code */}
      <div className="section">
        <div className="code-header">
          <h3>Code</h3>
        </div>

        <pre className="code-block">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default IconGuide;
