import React from 'react';
import { Outlet } from 'react-router';
export default function Dashboard() {
  return (
    <div>
      Dashbaord <Outlet />
    </div>
  );
}
