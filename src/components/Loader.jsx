// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { Commet } from "react-loading-indicators"

export function Loader() {
    return (
        <motion.div className="loading"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            key="loading">
            <Commet color="#792972" size="medium" text="Cargando" textColor="#ffffff" />
        </motion.div>
    )
}