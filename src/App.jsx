import "./App.css";
import Cart from "./components/Cart/Cart";
import ListaProdutos from "./components/ListaProdutos/ListaProdutos";
import dessertsData from "../data.json";
import { useState } from "react";

function App() {
  var [items, setItems] = useState(
    dessertsData.map((item, index) => ({
      ...item,
      id: index,
      active: true,
      qtd: 0,
    }))
  );

  var [valorSumQtd, setValorSumQtd] = useState(0);

  var [orderTotal, setOrderTotal] = useState(0);

  const clickX = (id) => {
    setOrderTotal(
      (prevOrderTotal) => prevOrderTotal - items[id].price * items[id].qtd
    );
    setValorSumQtd((prevValorSumQtd) => prevValorSumQtd - items[id].qtd);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, active: !item.active, qtd: 0 } : item
      )
    );
  };
  const toggleActive = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
    if (items[id].active) {
      setOrderTotal((prevOrderTotal) => prevOrderTotal + items[id].price);
      setValorSumQtd((prevValorSumQtd) => prevValorSumQtd + 1);
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, qtd: 1 } : item))
      );
    } else {
      setOrderTotal((prevOrderTotal) => prevOrderTotal - items[id].price);
      setValorSumQtd((prevValorSumQtd) => prevValorSumQtd - 1);
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, qtd: 0 } : item))
      );
    }
  };

  const increaseQtd = (id) => {
    setOrderTotal((prevOrderTotal) => prevOrderTotal + items[id].price);
    setValorSumQtd((prevValorSumQtd) => prevValorSumQtd + 1);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qtd: item.qtd + 1 } : item
      )
    );
  };

  const decreaseQtd = (id) => {
    setOrderTotal((prevOrderTotal) => prevOrderTotal - items[id].price);
    setValorSumQtd((prevValorSumQtd) => prevValorSumQtd - 1);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qtd: item.qtd - 1 } : item
      )
    );
  };

  return (
    <>
      <h1 className="m-3">Desserts</h1>
      <div className="containerPrincipal">
        <ListaProdutos
          className="col"
          decreaseQtd={decreaseQtd}
          increaseQtd={increaseQtd}
          toggleActive={toggleActive}
          items={items}
        />
        <Cart
          className="col"
          valorSumQtd={valorSumQtd}
          items={items}
          orderTotal={orderTotal}
          clickX={clickX}
        />
      </div>
    </>
  );
}

export default App;
