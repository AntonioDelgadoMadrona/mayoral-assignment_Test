// NEXT
import Link from 'next/link';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>Inicio</Link>
          </li>
          <li>
            <Link href={'/tienda'}>Tienda</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
