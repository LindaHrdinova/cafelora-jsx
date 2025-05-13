import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Order } from '../components/Order';

const responce = await fetch(
  'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image',
);
const result = await responce.json();
const orderedDrink = result.data;
console.log(orderedDrink);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={true} />
      <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>
          {orderedDrink.length > 0 ? (
            <div className="order__items">
              <Order items={orderedDrink} />
            </div>
          ) : (
            <p className="empty-order">Zatím nemáte nic objednáno</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  </div>,
);
