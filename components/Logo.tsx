import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'}>
      <Image
        src="/images/logo.svg"
        alt="Company Logo"
        width={172}
        height={52}
      />
    </Link>
  );
}
