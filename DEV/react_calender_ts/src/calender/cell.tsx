import { FC } from 'react'
import "./cell.css"
interface CellProps {
    children?: string | number;
    classname?: string
    onClick?: () => void;
}

const Cell: FC<CellProps> = ({ children, classname, onClick }) => {
    return (
        <div className={`${classname} modifier`} onClick={onClick} > {children}</div >
    )
}

export default Cell