import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { formateDate } from "../helpers";

import IconSaving from "../img/icono_ahorro.svg";
import IconHome from "../img/icono_casa.svg";
import IconFood from "../img/icono_comida.svg";
import IconMiscellaneous from "../img/icono_gastos.svg";
import IconEntretainment from "../img/icono_ocio.svg";
import IconHealt from "../img/icono_salud.svg";
import IconSubscriptions from "../img/icono_suscripciones.svg";

const Expenditure = ({
  expenditure,
  setEditExpenditure,
  deleteExpenditure,
}) => {
  const dictionaryIcons = {
    Ahorro: IconSaving,
    Comida: IconFood,
    Casa: IconHome,
    Salud: IconHealt,
    Gastos: IconMiscellaneous,
    Ocio: IconEntretainment,
    Suscripciones: IconSubscriptions,
  };

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpenditure(expenditure)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteExpenditure(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  const { id, name, quantity, category, date } = expenditure;

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={dictionaryIcons[category]} alt="Icono de Gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="fecha-gasto">
                Agregado el: {""}
                <span>{formateDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">$ {quantity}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expenditure;
