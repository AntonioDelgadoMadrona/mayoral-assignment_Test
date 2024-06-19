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
          <strong>src/app:</strong> Contiene las páginas del proyecto, los Server Components siendo{' '}
          <code>page.tsx</code> la página de inicio. Y <code>tienda / page.tsx</code> la página de
          la tienda.
        </li>
        <li>
          <strong>src/components:</strong> Contiene los componentes reutilizables como{' '}
          <code>ProductCard</code> y <code>ProductList</code>.
        </li>
        <li>
          <strong>src/api:</strong> Contiene la lógica para interactuar con APIs. Y contiene datos
          estáticos simulando la base de datos.
        </li>
        <li>
          <strong>src/types:</strong> Contiene las definiciones de tipos TypeScript utilizados en el
          proyecto.
        </li>
      </ul>
      <h2>¿Por qué Next.js 14 en lugar de Next.js 12 (Configuracion inicial)?</h2>
      <p>
        He decidido configurar el proyecto con Next.js 14 en lugar de Next.js 12 por varias razones:
      </p>
      <ul>
        <li>
          <strong>Repositorio inicial sin guia de estilo:</strong> He intentado en todo momento
          utilizar el repositorio inicial recibido. Pero he tenido muchisimos problemas para
          configurar los tests. Hay cambio sustanciales entre la version 12 y la 14, que es la que
          mejor manejo. Lo que me dificultaba mucho la realización de la prueba en el tiempo
          marcada.
        </li>
        <li>
          <strong>Nuevas Funcionalidades:</strong> Next.js 14 incluye varias funcionalidades nuevas
          que mejoran la experiencia de desarrollo y la performance de la aplicación. Por ejemplo,
          el soporte mejorado para los nuevos features de React como Server Components y la
          integración con el sistema de rutas basado en la carpeta <code>app</code>.
        </li>
        <li>
          <strong>Mejoras en el Desempeño:</strong> Las optimizaciones de rendimiento en Next.js 14
          permiten una carga más rápida de las páginas y una mejor experiencia de usuario, lo cual
          es crítico para una aplicación de ecommerce.
        </li>
        <li>
          <strong>Soporte a Largo Plazo:</strong> Al utilizar la versión más reciente, el proyecto
          se beneficia de un soporte más prolongado y acceso a actualizaciones de seguridad y
          mejoras continuas.
        </li>
        <li>
          <strong>Compatibilidad:</strong> Al utilizar Next.js 14, podemos asegurar que el proyecto
          es compatible con las últimas versiones de dependencias y librerías, asegurando una mayor
          estabilidad y evitando problemas de compatibilidad a futuro.
        </li>
      </ul>
      <h2>Instalación de dependencias y comandos</h2>
      <ul>
        <li>
          Para la instalacion de dependencias hay que situarse en la raíz del proyecto y ejecutar:{' '}
          <code>npm install</code>
        </li>
        <li>
          Para la ejecucion del proyecto en local hay que ejecutar: <code>npm run dev</code>
        </li>
        <li>
          Para la ejecucion de los tests hay que ejecutar: <code>npm run test</code>
        </li>
      </ul>
    </div>
  );
}
