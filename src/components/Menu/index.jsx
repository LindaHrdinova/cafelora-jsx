import { Drink } from '../Drink';
import './menu.css';

export const Menu = ({ drinks }) => (
  <section className="menu" id="menu">
    {console.log(drinks)}
    <div className="container">
      <h2>Naše nabídka</h2>
      <p className="menu-intro">
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>
      <div className="drinks-list">
        {drinks.map((drink) => (
          <Drink
            key={drink.id}
            id={drink.id}
            name={drink.name}
            ordered={false}
            image={`http://localhost:4000${drink.image}`}
            layers={drink.layers}
            /*layers={[
              {
                color: '#fbdf5b',
                label: 'citrón',
              },
              {
                color: '#feeeca',
                label: 'mléčná pěna',
              },
              {
                color: '#433335',
                label: 'kakao',
              },
            ]}*/
          />
        ))}
      </div>

      <div className="order-detail">
        <a href="/order.html">Detail objednávky</a>
      </div>
    </div>
  </section>
);
