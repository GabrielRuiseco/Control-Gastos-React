import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({
  budget,
  expenditures,
  setExpenditures,
  setBudget,
  setIsValidBudget,
}) => {
  const [availableBudget, setAvailableBudget] = useState(0);
  const [spentBudget, setSpentBudget] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalSpent = expenditures.reduce(
      (totalSpent, expenditure) => expenditure.quantity + totalSpent,
      0
    );

    const totalAvailable = budget - totalSpent;

    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );

    setTimeout(() => {
      setPercentage(newPercentage);
    }, 1000);
    setAvailableBudget(totalAvailable);
    setSpentBudget(totalSpent);
  }, [expenditures]);

  const formatToMoney = (quantity) => {
    return quantity.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const resultado = confirm("Deseas reiniciar el presupuesto y los gastos?");
    if (resultado) {
      setBudget(0);
      setExpenditures([]);
      setIsValidBudget(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: percentage > 100 ? "#DC2626" : "#3B82F6",
          })}
          value={percentage}
          text={`${percentage}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reinicar App
        </button>

        <p>
          <span>Presupuesto: </span> {formatToMoney(budget)}
        </p>
        <p className={`${availableBudget < 0 ? "negativo" : ""}`}>
          <span>Disponible: </span> {formatToMoney(availableBudget)}
        </p>
        <p>
          <span>Gastado: </span> {formatToMoney(spentBudget)}
        </p>
      </div>
    </div>
  );
};
export default BudgetControl;
