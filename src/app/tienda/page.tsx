// NEXT
import { Metadata } from 'next';
// COMPONENTS
import ProductList from '@/components/ProductList';

export const metadata: Metadata = {
  title: 'Tienda - Mayoral',
  description: 'Bienvenid@ a la Tienda',
};

function TiendaPage() {
  return (
    <section>
      <h1>Tienda - Mayoral</h1>
      <ProductList />
    </section>
  );
}

export default TiendaPage;
