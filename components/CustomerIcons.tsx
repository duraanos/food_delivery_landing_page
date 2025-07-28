import Image from 'next/image';

export default function CustomerIcons() {
  return (
    <div className="flex">
      <Image
        src="/images/customer-1.jpg"
        alt="customer-1"
        width={35}
        height={35}
        className="rounded-full"
      />
      <Image
        src="/images/customer-2.jpg"
        alt="customer-2"
        width={35}
        height={35}
      />
      <Image
        src="/images/customer-3.jpg"
        alt="customer-3"
        width={35}
        height={35}
      />
      <Image
        src="/images/customer-4.jpg"
        alt="customer-4"
        width={35}
        height={35}
      />
    </div>
  );
}
