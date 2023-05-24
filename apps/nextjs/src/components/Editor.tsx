import React, { useEffect, useRef, useState } from "react";
import rehypeSanitize from "rehype-sanitize";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export const Editor: React.FC<{
  value?: string;
  onChange: (value?: string) => void;
}> = ({ value, onChange }) => {
  const [height, setHeight] = useState(200);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver(() => {
      ref.current && setHeight(ref.current.offsetHeight);
    });
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="h-full w-full flex-1" ref={ref}>
      <MDEditor
        value={value}
        onChange={onChange}
        height={height}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
    </div>
  );
};
