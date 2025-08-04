import Link from 'next/link';
import Image from 'next/image';

export default function DownLoadToAppSection() {
  return (
    <section className="downloadtoapp">
      <div className="downloadtoapp-item">
        <div>
          <Image
            src="/images/download_to_app.svg"
            alt="download_to_app"
            width={225}
            height={225}
          />
        </div>
        <h3 className="downloadtoapp-title">
          Download to App
        </h3>
        <p className="downloadtoapp-description">
          Order food faster, track deliveries in real-time, and unlock exclusive
          app-only deals.
        </p>
        <div className="downloadtoapp-platforms">
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
