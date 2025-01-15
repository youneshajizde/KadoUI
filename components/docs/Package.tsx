import React from "react";

export const Package = ({ packageName }: { packageName: string }) => {
  return (
    <section className="mb-6 w-[400px]">
      <p className="mb-4 text-gray-700">You can also use {packageName}:</p>
      <div className="bg-black text-white rounded-lg p-4 relative">
        <button
          className="absolute top-3 right-3 bg-gray-700 text-white text-xs px-3 py-1 rounded hover:bg-gray-600"
          onClick={() => navigator.clipboard.writeText("npm install kadoui")}
        >
          Copy
        </button>
        <pre className="font-mono text-sm">
          <code>$ {packageName} install kadoui</code>
        </pre>
      </div>
    </section>
  );
};
