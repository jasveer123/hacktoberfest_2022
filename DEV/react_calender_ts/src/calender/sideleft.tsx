
import { FC } from 'react'
import { format } from 'date-fns'
import './sideleft.css'
import './sidewal.jpg'

interface Props {
    value: Date;
}

export const Sideleft: FC<Props> = ({ value }) => {
    return (
        <div className='sidecontaier' style={{ backgroundImage: "url(sidewal.jpg)" }}>
            <div className='date'>{format(value, "LLLL")} </div>
            <div className='date2'>{format(value, "yyyy")} </div>
        </div >
    )
}
