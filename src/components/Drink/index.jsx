import './drink.css';
import { Layer } from '../Layer';

export const Drink = ({ id, name, ordered, layers, image }) => (
  <div className="drink">
    <div className="drink__product">
      <div className="drink__cup">
        <img src={image} />
      </div>
      <div className="drink__info">
        <h3>{name}</h3>
        {layers.map((layer, index) => (
          <Layer key={index} color={layer.color} label={layer.label} />
        ))}
      </div>
    </div>
    <form
      className="drink__controls"
      data-name={name}
      data-id={id}
      data-ordered={ordered}
    >
      <input type="hidden" className="order-id" value={id} />
      <button
        className={ordered ? 'order-btn order-btn--ordered' : 'order-btn'}
      >
        {ordered ? 'Zrušit' : 'objednat'}
      </button>
    </form>
  </div>
);
