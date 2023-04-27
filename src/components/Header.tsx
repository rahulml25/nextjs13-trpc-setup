import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex items-center justify-between p-4">
      <Image
        src="https://music.youtube.com/img/on_platform_logo_dark.svg"
        alt="YT music logo"
        width={80}
        height={24}
        priority
      />

      <nav className="flex items-center justify-between space-x-14 text-xl font-medium text-white/50">
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/library">Library</Link>
        <Link href="/music_premium/musicfeed">Upgrade</Link>
        <div>Search</div>
      </nav>

      <div>
        <Image
          src="https://music.youtube.com/img/on_platform_logo_dark.svg"
          alt="YT music logo"
          width={40}
          height={40}
          priority
        />
      </div>
    </header>
  );
}
