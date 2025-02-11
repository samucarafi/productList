import "./ListaProdutos.css";
import PropTypes from "prop-types";

const ListaProdutos = ({ decreaseQtd, increaseQtd, toggleActive, items }) => {
  return (
    <>
      <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4 m-2">
        {items.map((item) => (
          <div key={item.id}>
            <div className="col">
              <div className="card bg-card border-0">
                <picture className={!item.active ? "imgActive" : ""}>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={item.image.desktop}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={item.image.tablet}
                  />
                  <source
                    media="(max-width: 767px)"
                    srcSet={item.image.mobile}
                  />
                  <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="card-img-top"
                  />
                </picture>
                <div className="card-body">
                  {item.active ? (
                    <button
                      className="button buttonInicial"
                      onClick={() => toggleActive(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart-plus"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                      </svg>
                      <span>Add to Cart</span>
                    </button>
                  ) : (
                    <button className="button buttonAcionado">
                      <span
                        onClick={() => {
                          if (item.qtd == 1) {
                            toggleActive(item.id);
                          } else {
                            decreaseQtd(item.id);
                          }
                        }}
                        className="sinal"
                      >
                        -
                      </span>
                      <span>{item.qtd}</span>
                      <span
                        onClick={() => increaseQtd(item.id)}
                        className="sinal"
                      >
                        +
                      </span>
                    </button>
                  )}
                  <p className="card-text">{item.category}</p>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{`$${item.price}`}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

ListaProdutos.propTypes = {
  decreaseQtd: PropTypes.func.isRequired,
  increaseQtd: PropTypes.func.isRequired,
  toggleActive: PropTypes.bool.isRequired,
  items: PropTypes.object.isRequired,
};
export default ListaProdutos;
