import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header = ({
  expenditures,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  setExpenditures,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidBudget ? (
        <BudgetControl
          setBudget={setBudget}
          setExpenditures={setExpenditures}
          budget={budget}
          expenditures={expenditures}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
