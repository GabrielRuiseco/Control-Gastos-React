import BudgetControl from "./BudgetControl"
import NewBudget from "./NewBudget"

const Header = ({
    expenditures,
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget }) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>
            {isValidBudget ? (
                <BudgetControl
                    budget={budget}
                    expenditures={expenditures}
                />
            ) : (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )
            }

        </header>
    )
}

export default Header