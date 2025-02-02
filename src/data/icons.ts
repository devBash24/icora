import React from "react";

export type IconCategory = {
  name: string;
  prefix: string;
  icons: IconItem[];
};

export type IconItem = {
  name: string;
  component: React.ComponentType;
  importStatement: string;
  category: string;
};

// This is example data - replace with your actual icons
export const iconCategories: IconCategory[] = [
  {
    name: "Font Awesome",
    prefix: "fa",
    icons: [/* your icons */],
  },
  {
    name: "Ant Design Icons",
    prefix: "ai",
    icons: [
      {
        name: "AiFillAccountBook",
        component: () => React.createElement("div", { className: "w-5 h-5 bg-foreground/20" }),
        importStatement: "npx iconium add ai-AiFillAccountBook",
        category: "ant-design",
      },
    ],
  },
  {
    name: "Bootstrap Icons",
    prefix: "bs",
    icons: [/* your icons */],
  },
  // Add other categories following the same pattern...
]; 