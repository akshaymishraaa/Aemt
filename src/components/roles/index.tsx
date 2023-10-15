import React from "react";
import UserDashboard from "./UserDashboard";
import CreateUser from "./CreateUser";
import CommonCard from "../../common/CommonCard";

export default function Roles() {
  return (
    <CommonCard title={'User management'}>
      <CreateUser />
      <UserDashboard />
    </CommonCard>
  );
}
