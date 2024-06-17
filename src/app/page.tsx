export default function Home() {
  return (
    <div>
      <h1>Mayoral Assignment Test</h1>
      <p>
        Este es un proyecto de ecommerce desarrollado con Next.js, React y TypeScript. La estructura
        del proyecto es la siguiente:
      </p>
      <ul>
        <li>
          <strong>src/components:</strong> Contiene los componentes reutilizables como{' '}
          <code>ProductCard</code> y <code>ProductList</code>.
        </li>
        <li>
          <strong>src/pages:</strong> Contiene las páginas del proyecto, siendo{' '}
          <code>index.tsx</code> la página de inicio.
        </li>
        <li>
          <strong>src/services:</strong> Contiene la lógica para interactuar con APIs y otros
          servicios externos.
        </li>
        <li>
          <strong>src/types:</strong> Contiene las definiciones de tipos TypeScript utilizados en el
          proyecto.
        </li>
        <li>
          <strong>src/data:</strong> Contiene datos estáticos como <code>products.json</code>.
        </li>
      </ul>
    </div>
  );
}
