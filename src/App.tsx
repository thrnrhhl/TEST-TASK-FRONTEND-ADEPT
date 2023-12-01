import { useAppSelector } from './shared/config/hooks'
import { Companies } from './widgets/companies'
import { EmployeesCompany } from './widgets/employees-company'

function App() {
  const companyState = useAppSelector(state => state.company);

  return (
    <div className="container m-auto flex h-full">
      <Companies />
      {companyState.activeCompany.id !== null && <EmployeesCompany />}
    </div>
  )
}

export default App
