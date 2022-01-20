import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({ budget, expenditures }) => {

    const [availableBudget, setAvailableBudget] = useState(0)
    const [spentBudget, setSpentBudget] = useState(0)
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        const totalSpent = expenditures.reduce(
            (totalSpent, expenditure) => expenditure.quantity + totalSpent, 0)

        const totalAvailable = budget - totalSpent;

        const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2);
        
        setTimeout(()=>{
            setPercentage(newPercentage)
        },1000)
        setAvailableBudget(totalAvailable);
        setSpentBudget(totalSpent);
    }, [expenditures])

    const formatToMoney = (quantity) => {
        return quantity.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: '#3B82F6',
                        trailColor: '#F5F5F5'
                    })}
                    value={percentage}
                    text={`${percentage}% Gastado`}
                />
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span> {formatToMoney(budget)}
                </p>
                <p>
                    <span>Disponible: </span> {formatToMoney(availableBudget)}
                </p>
                <p>
                    <span>Gastado: </span> {formatToMoney(spentBudget)}
                </p>
            </div>
        </div>
    )
}
export default BudgetControl
