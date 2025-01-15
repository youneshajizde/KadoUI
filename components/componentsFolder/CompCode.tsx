import { code } from '@/lib/constant';
import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const CompCode = () => {
  return (
    <div className="w-full min-h-[400px] border-[1px] border-gray-200 rounded-xl mt-5 bg-gray-900">
    {/* Header for the IDE */}
    <div className="bg-gray-800 text-white px-4 py-2 rounded-t-xl flex justify-between items-center">
      <span className="font-medium">index.tsx</span>
      <button className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600">
        Copy
      </button>
    </div>

    {/* Code Section */}
    <div className="p-4 overflow-auto h-full">
      <SyntaxHighlighter
        language="tsx"
        style={oneDark}
        customStyle={{
          background: "transparent",
          fontSize: "0.875rem",
          lineHeight: "1.5",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  </div>
  )
}
