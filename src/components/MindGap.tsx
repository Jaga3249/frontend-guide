import React, { useEffect, useState } from "react";
import type { MindMapNode } from "../../data";

type MindMapProps = {
  data: MindMapNode;
};

type MindMapItemProps = {
  node: MindMapNode;
  onToggle: (path: number[]) => void;
  path: number[];
};

// Helper function to generate a unique key for localStorage
const STORAGE_KEY = "react_mind_map_progress";

// Helper to safely deep clone
const deepClone = (obj: any) => JSON.parse(JSON.stringify(obj));

// Renders each node
const MindMapItem: React.FC<MindMapItemProps> = ({ node, onToggle, path }) => {
  return (
    <li className="mb-2">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={node.completed ?? false}
          onChange={() => onToggle(path)}
          className="accent-blue-600"
        />
        <span
          className={`font-medium ${
            node.completed ? "text-green-700 line-through" : "text-gray-800"
          }`}
        >
          {node.title}
        </span>
        <span
          className={`text-xs font-semibold rounded-full px-2 py-0.5 ${
            node.completed
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {node.completed ? "Completed" : "Not Completed"}
        </span>
      </div>
      {node.children && (
        <ul className="ml-6 border-l border-gray-200 pl-4 mt-2">
          {node.children.map((child, index) => (
            <MindMapItem
              key={index}
              node={child}
              onToggle={onToggle}
              path={[...path, index]}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export const MindMap: React.FC<MindMapProps> = ({ data }) => {
  const [mapData, setMapData] = useState<MindMapNode>(() => {
    // Try to load from localStorage, else use initial data
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : deepClone(data);
  });

  const toggleNodeCompletion = (path: number[]) => {
    const updatedData = deepClone(mapData);

    let node = updatedData as MindMapNode;
    for (const index of path) {
      if (!node.children) return;
      node = node.children[index];
    }

    node.completed = !node.completed;
    setMapData(updatedData);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mapData));
  }, [mapData]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">{mapData.title}</h2>
      <ul className="space-y-2">
        {mapData.children?.map((node, index) => (
          <MindMapItem
            key={index}
            node={node}
            onToggle={toggleNodeCompletion}
            path={[index]}
          />
        ))}
      </ul>
    </div>
  );
};
