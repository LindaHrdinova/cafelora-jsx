import '../../pages/order.css';
import { OrderItems } from '../OrderItems';

export const Order = ({ items }) => (
  <>
    {items.map((item) => (
      <OrderItems key={item.id} name={item.name} image={item.image} />
    ))}
  </>
);
