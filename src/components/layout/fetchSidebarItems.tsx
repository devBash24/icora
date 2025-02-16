import { Suspense } from "react";
import { RenderSidebar } from "./sidebar";
import { SidebarSkeleton } from "./sidebar-skeleton";
const Sidebar = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/icons/all/libraries`
  );
  const data = response.json();
  return (
    <Suspense fallback={<SidebarSkeleton />}>
      <RenderSidebar data={data}/>
    </Suspense>
  )
};

export default Sidebar;
