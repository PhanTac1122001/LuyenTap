import { Spin } from "antd";
import React, { Suspense } from "react";

const UserLayout = React.lazy(() => import("@/layouts/user/UserLayout"));
const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
const LazyLoad = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Spin tip="Loading" size="large">
          {content}
        </Spin>
      }
    >
      {children}
    </Suspense>
  );
};

const userRouters = [
  {
    path: "/exam",
    element: <UserLayout />,
  },
];

export default userRouters;
