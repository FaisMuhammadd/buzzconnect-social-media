import { Route, Routes } from "react-router-dom"
import SigninForm from "./_auth/forms/SigninForm"
import SignupForm from "./_auth/forms/SignupForm"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"
import Home from "./_root/pages/Home"
import { Toaster } from "./components/ui/toaster"

import "./globals.css"

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          {/* public router */}
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        <Route element={<RootLayout />}>
          {/* private routes */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  )
}

export default App
