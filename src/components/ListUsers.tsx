'use client';

import React from 'react';
import Image from 'next/image';
import { trpc } from '@/utils/trpc/client';

export default function ListUsers() {
  let { data: users, isLoading, isFetching } = trpc.getUsers.useQuery();

  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      {users?.map((user) => (
        <div key={user.id} className="border border-[#ccc] text-center">
          <Image
            src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
            alt={user.name}
            height={180}
            width={180}
            priority
          />
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  );
}
