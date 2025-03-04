import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Error404Page } from '../../pages/Error404Page'
import { Disciplines, StudentBody } from '../../pages/main'
import { LayoutMain } from '../../processe/Main'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route index element={<Disciplines />} />
          <Route path="disciplines" element={<Disciplines />} />
          <Route path="student-body" element={<StudentBody />} />
        </Route>

        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
