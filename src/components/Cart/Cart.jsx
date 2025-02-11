import PropTypes from "prop-types";
import "./Cart.css";
const Cart = ({ valorSumQtd, items, orderTotal, clickX }) => {
  return (
    <div className="row row-cols-1 g-4 m-2  ">
      <div className="col ">
        <div className="card p-2 border-0">
          <h2 className="color">Your Cart ({valorSumQtd})</h2>
          {valorSumQtd != 0 ? (
            <>
              <div className="card-body">
                {items.map((item) =>
                  !item.active ? (
                    <div className="row" key={item.id}>
                      <div className="col">
                        <p className="m-0">{item.name}</p>
                        <span>{` ${item.qtd}x `}</span>
                        <span>{`$${item.price} `}</span>
                        <span>{`$${item.qtd * item.price}`}</span>
                        <hr className="m-0" />
                      </div>

                      <button
                        className="col-1 buttonX"
                        onClick={() => clickX(item.id)}
                      >
                        X
                      </button>
                    </div>
                  ) : (
                    <></>
                  )
                )}
                <div className="orderTotal">
                  <span>Order total </span>
                  <h2>{`$${orderTotal}`}</h2>
                </div>
                <p className="carbon-neutral">
                  <img src="./images/icon-carbon-neutral.svg" alt="" />
                  This is a carbon-neutral delivery
                </p>
                <div className=" text-center">
                  <button
                    className="px-5 py-2 rounded-pill buttonConfirm "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    {" "}
                    Confirm order
                  </button>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content card-body">
                      <div className="">
                        <img src="./images/icon-order-confirmed.svg" alt="" />
                        <h1 className="">Order Confirmed</h1>
                        <p>We hope you enjoy your food! </p>
                      </div>
                      <div className="list-cart mx-1">
                        {items.map((item) =>
                          !item.active ? (
                            <div className="row mx-auto" key={item.id}>
                              <img
                                className="col-3 p-0"
                                src={item.image.thumbnail}
                                alt=""
                              />
                              <div className="col-7 px-1">
                                <p className="m-0">{item.name}</p>
                                <span className="color">{` ${item.qtd}x `}</span>
                                <span>{`$${item.price} `}</span>
                              </div>
                              <span className="col-2 p-0 text-end">{`$${
                                item.qtd * item.price
                              }`}</span>
                            </div>
                          ) : (
                            <></>
                          )
                        )}
                        <div className="orderTotal">
                          <span>Order total </span>
                          <h2 className="">{`$${orderTotal}`}</h2>
                        </div>
                      </div>
                      <div className="mx-auto my-3">
                        <button className="px-5 py-2 rounded-pill buttonConfirm">
                          Start New Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <img src="./images/illustration-empty-cart.svg" alt="" />
              <div className="card-body">
                <p className="card-text text-center">
                  Your added items will appear here
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  valorSumQtd: PropTypes.number.isRequired,
  items: PropTypes.object.isRequired,
  orderTotal: PropTypes.number.isRequired,
  clickX: PropTypes.func.isRequired,
};
export default Cart;
