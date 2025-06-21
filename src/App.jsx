import { useState } from "react"
import { Header } from "./components/Header"
import { Animes } from "./components/Animes"
import { List } from "./components/List"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react"


function App() {
  const [viewSearch, setViewSearch] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}

    >
      <Header changeViewSearch={setViewSearch} viewSearch={viewSearch} />

      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        className="main">
        <AnimatePresence mode="wait">
          {viewSearch
            ? (
              <motion.div
                key="animes"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <Animes />
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <List />
              </motion.div>
            )}
        </AnimatePresence>

      </motion.main>

    </motion.div>

  )
}

export default App
