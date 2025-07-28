import Logo from './Logo';
import NavbarButtonGroup from './NavbarButtonGroup';

export default function Navbar() {
  return (
    <nav className='flex justify-between'>
      <Logo />
      <NavbarButtonGroup />
    </nav>
  );
}
