'use client';

import { navigation } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-customLime-900">
      <div className="grid grid-cols-2 gap-10 h-96 p-10 w-full">
        <div className="flex flex-col gap-5">
          <div>
            <Link href={'/'}>
              <Image
                src="/images/footer_logo.svg"
                alt="BellyGo Logo"
                width={155}
                height={50}
              />
            </Link>
          </div>
          <div>
            <p className="text-customLime-100 text-base">
              Join us in revolutionizing the food delivery industry with lower
              fees, greater rewards, and a transparent ecosystem that benefits
              all.
            </p>
          </div>
          <div className="flex gap-5">
            <Link href={'#'}>
              <Image
                src="/icons/facebook_icon.svg"
                alt="facebook_icon"
                width={25}
                height={25}
              />
            </Link>
            <Link href={'#'}>
              <Image
                src="/icons/instagram_icon.svg"
                alt="instagram_icon"
                width={25}
                height={25}
              />
            </Link>
            <Link href={'#'}>
              <Image
                src="/icons/x_icon.svg"
                alt="x_icon"
                width={25}
                height={25}
              />
            </Link>
            <Link href={'#'}>
              <Image
                src="/icons/linkedIn_icon.svg"
                alt="linkedIn_icon"
                width={25}
                height={25}
              />
            </Link>
            <Link href={'#'}>
              <Image
                src="/icons/youtube_icon.svg"
                alt="youtube_icon"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <div>
            <div>
              <h3 className="font-bold text-lg text-customLime-100 mb-[10px]">
                Features
              </h3>
              <ul role="list">
                {navigation.feature.map(item => (
                  <li key={item.name} className="mb-2">
                    <Link
                      href={item.href}
                      className="text-customLime-100 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className="font-bold text-lg text-customLime-100 mb-[10px]">
                Company
              </h3>
              <ul role="list">
                {navigation.company.map(item => (
                  <li key={item.name} className="mb-2">
                    <Link
                      href={item.name}
                      className="text-customLime-100 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className="font-bold text-lg text-customLime-100 mb-[10px]">
                Support
              </h3>
              <ul role="list">
                {navigation.help.map(item => (
                  <li key={item.name} className="mb-2">
                    <Link
                      href={item.name}
                      className="text-customLime-100 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
