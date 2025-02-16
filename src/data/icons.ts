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
