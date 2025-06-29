export type MindMapNode = {
  title: string;
  completed?: boolean;
  children?: MindMapNode[];
};

export const reactOverview: MindMapNode = {
  title: "React Overview",
  children: [
    {
      title: "JSX",
      children: [
        { title: "Functional Components" },
        { title: "Class Components" },
      ],
    },
    { title: "Components" },
    { title: "Props" },
    { title: "State" },
    { title: "useState Hook" },
    { title: "useEffect Hook" },
    { title: "useContext Hook" },
    { title: "useRef" },
    { title: "useMemo" },
    { title: "useCallback" },
    { title: "Custom Hooks" },
    { title: "Component Lifecycle Methods" },
    { title: "Conditional Rendering" },
    { title: "List Rendering and Keys" },
    { title: "Controlled and Uncontrolled Components" },
    { title: "Event Handling" },
    { title: "Forms in React" },
    { title: "React Router" },
    { title: "Context API" },
    { title: "Redux" },
    { title: "useReducer" },
    { title: "React.memo" },
    { title: "Lazy Loading and Code Splitting" },
    { title: "Error Boundaries" },
    { title: "Fetching Data" },
    { title: "useNavigate and Navigation" },
    { title: "Higher-Order Components" },
    { title: "Render Props" },
    { title: "Fragments" },
    { title: "Portals" },
    { title: "Forward Refs" },
    { title: "Testing in React" },
    { title: "React DevTools" },
    { title: "Deployment" },
    { title: "React vs Angular vs Vue" },
    { title: "SSR vs CSR vs SSG" },
    { title: "Next.js" },
    { title: "StrictMode" },
    { title: "React Fiber" },
  ],
};
