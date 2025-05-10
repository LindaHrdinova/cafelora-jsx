export const Layer = ({ color, label }) => (
  <div className="layer">
    <div className="layer__color" style={{ backgroundColor: color }} />
    <div className="layer__label">{label}</div>
  </div>
);
