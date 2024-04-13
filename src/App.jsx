import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './components/home';
export default function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>
  )
}
