
import React from 'react'
import Link from '../Link'

export default function FinishPage() {
    return (
        <div className='home-page'>
            <div className='finish-text'>
                <div>
                    מפקדים, מנהלי אירוע, מטפלים בכירים וחובשים יקרים,<br />
                    בעזרת הלומדה שלפניכם הכרתם את העקרונות המרכזיים <br />
                    בעת ניהול אירוע רפואי במתאר הרס.<br />
                    הלומדה זמינה לרשותכם ושימושכם בכל עת.<br />
                    בהצלחה רבה!
                </div>
                <Link href='/'><button className='finish-button'>לחזרה על הלומדה</button></Link>
            </div>
        </div>
    )
}
