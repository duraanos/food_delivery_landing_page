import { navigation } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-item">
        <div className="footer-info">
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
          <p className="footer-copyright">
            © BellyGo 2030 - All Rights Reserved
          </p>
        </div>
        <div className="footer-navigation">
          <div>
            <div>
              <h3 className="footer-navigationTitle">Features</h3>
              <ul role="list">
                {navigation.feature.map(item => (
                  <li key={item.name} className="footer-navigationListItem">
                    <Link href={item.href} className="footer-navigationItem">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className="footer-navigationTitle">Company</h3>
              <ul role="list">
                {navigation.company.map(item => (
                  <li key={item.name} className="footer-navigationListItem">
                    <Link href={item.name} className="footer-navigationItem">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className="footer-navigationTitle">Support</h3>
              <ul role="list">
                {navigation.help.map(item => (
                  <li key={item.name} className="footer-navigationListItem">
                    <Link href={item.name} className="footer-navigationItem">
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
