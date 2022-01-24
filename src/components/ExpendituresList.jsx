import Expenditure from "./Expenditure";

const ExpendituresList = ({
  expenditures,
  setEditExpenditure,
  deleteExpenditure,
  filter,
  filteredExpenditures,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>
            {filteredExpenditures.length ? "Gastos" : "No hay gastos aún"}
          </h2>
          {filteredExpenditures.map((expenditure) => (
            <Expenditure
              key={expenditure.id}
              expenditure={expenditure}
              setEditExpenditure={setEditExpenditure}
              deleteExpenditure={deleteExpenditure}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenditures.length ? "Gastos" : "No hay gastos aún"}</h2>
          {expenditures.map((expenditure) => (
            <Expenditure
              key={expenditure.id}
              expenditure={expenditure}
              setEditExpenditure={setEditExpenditure}
              deleteExpenditure={deleteExpenditure}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpendituresList;
