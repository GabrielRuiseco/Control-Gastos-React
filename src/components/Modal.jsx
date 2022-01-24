import { useEffect, useState } from "react";
import CloseBtn from "../img/cerrar.svg";
import Message from "./Message";

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpenditure,
  editExpenditure,
  setEditExpenditure,
}) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [id, setID] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (Object.keys(editExpenditure).length > 0) {
      setName(editExpenditure.name);
      setQuantity(editExpenditure.quantity);
      setCategory(editExpenditure.category);
      setID(editExpenditure.id);
      setDate(editExpenditure.date);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, quantity, category].includes("")) {
      setMessage("Todos los campos son obligatorios");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    saveExpenditure({ name, quantity, category, id, date });
  };

  const hideModal = () => {
    setAnimateModal(false);
    setEditExpenditure({});
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="cerrar modal" onClick={hideModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
      >
        <legend>{editExpenditure.name ? "Editar Gasto" : "Nuevo Gasto"}</legend>

        {message && <Message tipo="error">{message}</Message>}

        <div className="campo">
          <label htmlFor="name">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="quantity">Cantidad</label>
          <input
            id="quantity"
            type="number"
            placeholder="Añade la cantidad del gasto: ej. 300"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="Ahorro">Ahorro</option>
            <option value="Comida">Comida</option>
            <option value="Casa">Casa</option>
            <option value="Salud">Salud</option>
            <option value="Suscripciones">Suscripciones</option>
            <option value="Gastos">Gastos Varios</option>
            <option value="Ocio">Ocio</option>
          </select>
        </div>
        <input
          type="submit"
          value={editExpenditure.name ? "Guardar cambios" : "Añadir gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;
