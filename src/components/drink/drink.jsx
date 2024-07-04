import { Layer } from '../layer/layer';
import './drink.css';

export const Drink = ({id, name, ordered, image, layers}) => {

return (<div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src={`http://localhost:4000${image}`} />
                </div>
                <div className="drink__info">
                  <h3>{name}</h3>
                  {layers.map((layer, index) => {
                    return (
                    < Layer key={index} color={layer.color} label={layer.label} />)
                  }
                  )
                  }
                </div>
              </div>
              <form className="drink__controls" data-id={id}>
                <input type="hidden" className="order-id" value={id} />
                 
                 {
                    ordered ? <button className="order-btn--ordered">Zrušit</button> : <button className="order-btn">Objednat</button>
                 }

              </form>
            </div>
            )
        }