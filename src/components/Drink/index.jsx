import './drink.css';
import { Layer } from '../Layer';

export const Drink = ({ id, name, image, layers }) => (
  <div className="drink">
    <div className="drink__product">
      <div className="drink__cup">
        <img src={image} />
      </div>
      <div className="drink__info">
        <h3>{name}</h3>
        {layers.map((layer) => (
          <Layer color={layer.color} label={layer.label} />
        ))}
      </div>
    </div>
    <form className="drink__controls">
      <input type="hidden" className="order-id" value={id} />
      <button className="order-btn">Objednat</button>
    </form>
  </div>
);
