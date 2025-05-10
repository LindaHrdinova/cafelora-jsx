import { Drink } from '../Drink';
import './menu.css';

export const Menu = () => (
  <section className="menu" id="menu">
    <div className="container">
      <h2>Naše nabídka</h2>
      <p className="menu-intro">
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>
      <div className="drinks-list">
        <Drink
          id={0}
          name="Kakao"
          ordered={false}
          image="/cups/espresso.png"
          layers={[
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
          ]}
        />
      </div>

      <div className="order-detail">
        <a href="/order.html">Detail objednávky</a>
      </div>
    </div>
  </section>
);
