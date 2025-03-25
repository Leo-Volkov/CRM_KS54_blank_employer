import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Error404Page } from '../../pages/Error404Page'
import { PagesListGrup } from '@/pages/PagesListGrup'
import { Blank } from '@/pages/Blank'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagesListGrup />}>
          <Route index element={<PagesListGrup />} />
          <Route path="blank" element={<Blank />} />
          <Route path="list-grup" element={<PagesListGrup />} />
        </Route>

        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  )
}
export default AppRoutes
