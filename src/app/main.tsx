import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppRoutes from './routes/Routes'
import { store, persistor } from '@/app/store/configureStore'
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRoutes />
    </PersistGate>
  </Provider>,
)
