"use client";
import { useProfile } from "@/components/UseProfile";
import UserTabs from "@/components/layout/UserTabs";
import { useEffect, useState } from "react";
import Link from "next/link";
import LoadingStatus from "@/components/layout/LoadingStatus";

export default function UsersPage() {
  const { loading, data } = useProfile();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users").then((response) => {
      response.json().then((users) => setUsers(users));
    });
  }, []);

  if (loading) {
    return <LoadingStatus text={"Loading users"} />;
  }

  if (!data.admin) {
    return (
      <div className="mt-32 text-center font-josefin">
        <h1 className="text-xl">Not an admin</h1>
        <Link href={"/"} className="text-gray-500 hover:underline">
          Press here for redirect
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        {users?.length > 0 &&
          users.map((user) => (
            <div
              key={user._id}
              className="bg-gray-100 rounded-lg mb-2 p-1 px-4 flex items-center gap-4"
            >
              <div className="grow grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-gray-900">
                  {!!user.name && <span>{user.name}</span>}
                  {!user.name && <span className="italic">No name</span>}
                </div>
                <span className="text-gray-500">{user.email}</span>
              </div>
              <div>
                <Link className="button" href={"/users/" + user._id}>
                  Edit
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
