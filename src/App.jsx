import { Header } from "./components/Header"
import { lazy, Suspense } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react"
import { Route, Routes, useLocation } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const Animes = lazy(() => import('./pages/Animes'))
const Details = lazy(() => import('./pages/Details'))
const List = lazy(() => import('./pages/List'))

function App() {
  const location = useLocation()
  const queryClient = new QueryClient()

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <Header />

      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        className="main">
        <QueryClientProvider client={queryClient}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <Suspense fallback={null}>
                    <motion.div
                      initial={{ x: -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 40, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Animes />
                    </motion.div>
                  </Suspense>
                }
              />
              <Route
                path="/favoritos"
                element={
                  <Suspense fallback={null}>
                    <motion.div
                      initial={{ x: -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -40, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <List />
                    </motion.div>
                  </Suspense>
                }
              />
              <Route
                path="/details/:title"
                element={
                  <Suspense fallback={null}>
                    <motion.div
                      initial={{ y: -40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Details />
                    </motion.div>
                  </Suspense>
                }
              />
            </Routes>
          </AnimatePresence>


        </QueryClientProvider>

      </motion.main>

    </motion.div>

  )
}

export default App
