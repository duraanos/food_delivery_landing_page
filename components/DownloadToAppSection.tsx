import Link from 'next/link';
import Image from 'next/image';

export default function DownLoadToAppSection() {
  return (
    <section className="mb-32">
      <div className="flex flex-col items-center justify-between gap-[5px]">
        <div>
          <Image
            src="/images/download_to_app.svg"
            alt="download_to_app"
            width={225}
            height={225}
          />
        </div>
        <h3 className="font-bold text-3xl text-customLime-900">
          Download to App
        </h3>
        <p className="text-customLime-900 text-xl">
          Order food faster, track deliveries in real-time, and unlock exclusive
          app-only deals.
        </p>
        <div className="flex gap-5">
          <Link href={'/'}>
            <Image
              src={'/images/app_store.svg'}
              alt="app_store"
              width={200}
              height={100}
            />
          </Link>
          <Link href={'/'}>
            <Image
              src={'/images/google_play.svg'}
              alt="google_play"
              width={200}
              height={100}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
