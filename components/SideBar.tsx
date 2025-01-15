import { components, getStarted } from "@/lib/constant";
import { useRouter } from "next/navigation";
import React from "react";

export const SideBar = ({
  setRenderedContent,
}: {
  setRenderedContent: (content: string) => void;
}) => {
  const router = useRouter();

  const handleSideBar = <T,>(item: T) => {
    if (typeof item === "string") {
      setRenderedContent(item);
      router.push(`/docs/${item.toLowerCase()}`);
    }
  };
  return (
    <aside className="w-64 border-r-[1px] border-gray-200">
      <section className="py-7">
        <div>
          <h2 className="text-base font-semibold mb-4">Get Started</h2>
          <ul className="space-y-4 text-sm">
            {getStarted.map((item, index) => (
              <li
                className="text-gray-700 hover:text-black font-medium cursor-pointer"
                key={index}
                onClick={() => handleSideBar(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          {/* Components Section */}
          <h2 className="text-base font-semibold mb-4">Components</h2>
          <ul className="space-y-4 text-sm">
            {components.map((component, index) => (
              <li
                onClick={() => handleSideBar(component)}
                className="text-gray-700 hover:text-black font-medium cursor-pointer"
                key={index}
              >
                {component}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </aside>
  );
};
