import React from "react";

export default function DashboardLayout(props: {
  children: React.ReactNode;
  firstName: React.ReactNode;
  lastName: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      {/* for parallel routing */}
      {props.children}
      {props.firstName}
      {props.lastName}
    </div>
  );
}
