import './drink.css';
import { Layer } from '../Layer';

export const Drink = ({ name, image }) => (
  <div className="drink">
    <div className="drink__product">
      <div className="drink__cup">
        <img src={image} />
      </div>
      <div className="drink__info">
        <h3>{name}</h3>
        <Layer color="#feeeca" label="mléčná pěna" />
        <Layer color="#433335" label="kakao" />
      </div>
    </div>
    <form className="drink__controls">
      <input type="hidden" className="order-id" value="1" />
      <button className="order-btn">Objednat</button>
    </form>
  </div>
);
