// src/components/MindMap.tsx
import React from "react";
import type { MindMapNode } from "../../data";

type MindMapNodeProps = {
  node: MindMapNode;
};

const MindMapItem: React.FC<MindMapNodeProps> = ({ node }) => {
  return (
    <li>
      <strong>{node.title}</strong>
      {node.children && (
        <ul>
          {node.children.map((child, index) => (
            <MindMapItem key={index} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

type MindMapProps = {
  data: MindMapNode;
};

export const MindMap: React.FC<MindMapProps> = ({ data }) => (
  <div>
    <h2>{data.title}</h2>
    <ul>
      {data.children?.map((node, index) => (
        <MindMapItem key={index} node={node} />
      ))}
    </ul>
  </div>
);
