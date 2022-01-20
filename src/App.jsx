import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconNewExpenditure from './img/nuevo-gasto.svg'
import { generateID } from './helpers'
import ExpendituresList from './components/ExpendituresList'

function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenditures, setExpenditures] = useState([])
  const [editExpenditure, setEditExpenditure] = useState({})

  useEffect(() => {
    if (Object.keys(editExpenditure).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimateModal(true)
      }, 200)
    }
  }, [editExpenditure])

  const handleNewExpenditure = () => {
    setModal(true)
    setEditExpenditure({})
    setTimeout(() => {
      setAnimateModal(true)
    }, 200)
  }

  const saveExpenditure = expenditure => {
    if (expenditure.id) {
      const updatedExpenditures = expenditures.map(
        expenditureState => expenditureState.id === expenditure.id ? expenditure : expenditureState
      )
      setExpenditures(updatedExpenditures)
      setEditExpenditure({})
    } else {

      expenditure.id = generateID();
      expenditure.date = Date.now();
      setExpenditures([...expenditures, expenditure])
    }

    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)

  }

  const deleteExpenditure = id => {
    const updatedExpenditures = expenditures.filter(
      expenditure => expenditure.id !== id
    );

    setExpenditures(updatedExpenditures)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        expenditures={expenditures}
      />
      {isValidBudget && (
        <>
          <main>
            <ExpendituresList
              expenditures={expenditures}
              setEditExpenditure={setEditExpenditure}
              deleteExpenditure={deleteExpenditure}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={IconNewExpenditure}
              alt='Icono nuevo gasto'
              onClick={handleNewExpenditure}
            />
          </div>
        </>
      )}
      {modal &&
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpenditure={saveExpenditure}
          editExpenditure={editExpenditure}
          setEditExpenditure={setEditExpenditure}
        />}
    </div>
  )
}

export default App
