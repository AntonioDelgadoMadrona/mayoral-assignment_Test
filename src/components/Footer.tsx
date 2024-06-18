import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */

function Footer() {
  return (
    <footer>
      <p>
        Prueba Técnica creada por{' '}
        <Link href="https://tonii.dev" target="_blank">
          Antonio Delgado
        </Link>
      </p>
      <div>
        <Link href="https://vitejs.dev" target="_blank">
          <img src="http://localhost:3000/nextjs.svg" className="logo" alt="Next logo" />
        </Link>
        +{' '}
        <Link href="https://react.dev" target="_blank">
          <img src="http://localhost:3000/react.svg" className="logo" alt="React logo" />
        </Link>
        +{' '}
        <Link href="https://www.typescriptlang.org/" target="_blank">
          <img src="http://localhost:3000/ts.svg" className="logo" alt="TypeScript logo" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
