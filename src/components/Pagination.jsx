/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react"
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { motion } from "motion/react";

export function Pagination({ totalPage, loadPage, isLoading }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [pagesPerGroup, setPagesPerGroup] = useState(() => window.innerWidth <= 568 ? 5 : 10)

    const totalPagesArray = useMemo(() => Array.from({ length: totalPage }, (_, i) => i + 1), [totalPage])

    const currentGroupStart = Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup
    const currentGroup = totalPagesArray.slice(currentGroupStart, currentGroupStart + pagesPerGroup)

    const handleChangePage = (page) => {
        const newPage = page
        setCurrentPage(newPage)
        loadPage(page)
    }

    const handlePrevGroup = () => {
        if (currentGroupStart > 0) {
            const newPage = currentGroupStart
            setCurrentPage(newPage)
            loadPage(newPage)
        }
    }

    const handleNextGroup = () => {
        const nextStart = currentGroupStart + pagesPerGroup
        if (nextStart < totalPage) {
            const newPage = nextStart + 1
            setCurrentPage(newPage)
            loadPage(newPage)
        }
    }

    useEffect(() => {
        const handleRezise = () => {
            setPagesPerGroup(window.innerWidth <= 568 ? 5 : 10)
        }

        window.addEventListener("resize", handleRezise)

        return () => window.removeEventListener('resize', handleRezise)
    }, [])

    if (isLoading || totalPage == 1) return

    return (
        <motion.div
            className="pagination"
            initial={{ opacity: 0, y: 10000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            key="pagination">

            <button onClick={handlePrevGroup} style={{ display: `${currentGroupStart === 0 ? 'none' : 'inline-block'}` }}>
                <GrLinkPrevious />
            </button>

            {currentGroup.map((page) => (
                <div
                    key={page}
                    onClick={() => handleChangePage(page)}
                    className={currentPage === page ? "active" : ""}
                >
                    {page}
                </div>
            ))}

            <button onClick={handleNextGroup} style={{ display: `${currentGroupStart + pagesPerGroup >= totalPage ? 'none' : 'inline-block'}` }}>
                <GrLinkNext />
            </button>
        </motion.div>
    )
}
