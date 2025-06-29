// src/App.tsx
import React from "react";
import { reactOverview } from "../data";
import { MindMap } from "./components/MindGap";

const App: React.FC = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <MindMap data={reactOverview} />
    </div>
  );
};

export default App;
