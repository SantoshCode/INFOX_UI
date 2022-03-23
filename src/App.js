import MainApp from './MainApp'
import LandingPage from './LandingPage'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import SignIn from './SignIn'

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/landing" element={<LandingPage />}></Route>
                <Route path="/" element={<SignIn />}></Route>
                <Route path="/main-app" element={<MainApp />}></Route>
            </Routes>
        </>
    )
}
