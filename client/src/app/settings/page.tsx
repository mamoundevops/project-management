'use client'
import Header from "@/components/Header";
import { useGetAuthUserQuery, useGetProjectsQuery } from "@/state/api";
import React from "react";


const Settings = () => {
  const userSettings = {
    username: "johndoe",
    email: "john.doe@example.com",
    teamName: "Development Team",
    roleName: "Developer",
  };


 
  const { data: currentUser } = useGetAuthUserQuery({});
console.log(`currentUserStart : ${currentUser} .CurrentUserDone`)
  const currentUserDetails = currentUser?.userDetails;
  console.log(`currentUserStart : ${currentUserDetails} .CurrentUserDone`)

  const labelStyles = "block text-sm font-medium dark:text-white";
  const textStyles =
    "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white";

  return (
    <div className="p-8">
      <Header name="Settings" />
      <div className="space-y-4">
        <div>
          <label className={labelStyles}>Username</label>
          <div className={textStyles}>{currentUser ? currentUserDetails?.username : userSettings.username}</div>
        </div>
        <div>
          <label className={labelStyles}>Email</label>
          <div className={textStyles}>{currentUser ? currentUserDetails?.email : userSettings.email}</div>
        </div>
        <div>
          <label className={labelStyles}>Team</label>
          <div className={textStyles}>{userSettings.teamName}</div>
        </div>
        <div>
          <label className={labelStyles}>Role</label>
          <div className={textStyles}>{userSettings.roleName}</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
