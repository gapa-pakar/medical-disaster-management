
import React, { useEffect, useState } from 'react'
import './Page6.css'
import ReportsPage from './ReportsPage';

// Import icons
import question from '../../assets/page6-icons/question.svg'
import location from '../../assets/page6-icons/location.svg'
import time from '../../assets/page6-icons/time.svg'
import plaster from '../../assets/page6-icons/plaster.svg'
import mountains from '../../assets/page6-icons/mountains.svg'
import settings from '../../assets/page6-icons/settings.svg'
import check from '../../assets/page6-icons/check.svg'
import list from '../../assets/page6-icons/list.svg'
import Question from '../Quiz/Question';
import wrongBriefing from '../../assets/videos/wrongReport.mp4'
import report1 from '../../assets/audio/report1.mp3'
import report2 from '../../assets/audio/report2.mp3'


// Array containing information for page 6 part 1
const reportsInfo = [
  {
    id: 1,
    titles: [
      {
        title: 'דיווח הגעה לאירוע',
        description: [
          'דיווח קצר ומתומצת.',
          'תכליתו לעדכן את הרמה הממונה על הגעת הצוות הרפואי לאירוע וממצאים ראשונים.'
        ],
        includingInfo: false,
        audio: report1
      },
      {
        title: 'דיווח ראשוני',
        description: [
          'דיווח זה הוא הדיווח הראשון הכולל מידע על האירוע מהשטח.',
          'תכליתו לעדכן את הרמות הממונות והכפופות לאירוע.'
        ],
        includingInfo: true,
        info: [
          'מהות האירוע',
          'מקום האירוע',
          'שעה',
          'נפגעים - אם יש / אין',
          'איזה אתר',
          'מפקד האירוע',
          'פעולות שננקטו'
        ],
        icons: [question, location, time, plaster, mountains, settings, check],
        audio: report2
      },
      {
        title: 'דיווחי ביניים',
        description: [
          'דיווחי הביניים כוללים את כל מערכת הדיווחים על האירוע, בזמן אמת, מהדיווח הראשוני ועד לדיווח האחרון בגמר האירוע.',
          'תכליתו ליצור תמ"צ עדכנית לרמות השונות על הנעשה באירוע ע"מ לתת מענה הולם ע"פ ההתפתחויות.'
        ],
        includingInfo: true,
        info: [
          'מיקום אירוע מדויק',
          'מספר נפגעים ומצבם',
          'סד""כ ואמצעים שהופעלו',
          'פעילויות נוספות שמתוכננות להתבצע',
          'כוחות ואמצעים נדרשים נוספים\u2003\u2003 (כגון צר"פ וסד"כ)',
          'ממצאים מהאירוע\u2003\u2003\u2003\u2003\u2003\u2003 (פלילי, פח"עי, תאונה)'
        ],
        icons: [location, plaster, list, check, settings, mountains]
      },
      {
        title: 'דיווח סופי',
        description: ['הדיווח האחרון בסיום האירוע.', 'מסכם את פרטי האירוע.'],
        includingInfo: true,
        info: [
          'מיקום האירוע',
          'סיווג האירוע',
          "מס' נפגעים ומצבם",
          'סד"כ שטיפל',
          'טיפול שבוצע ואמצעים שהופעלו',
          'פינויים ויעדים'
        ],
        icons: [location, question, plaster, list, settings, check]
      }
    ],
    color: '#2c599d'
  },
  {
    id: 2,
    titles: [
      {
        title: 'דיווח ראשוני',
        description: ['נ"צ + סיווג אירוע (שריפה, חילוץ, הרס, חומ"ס)'],
        includingInfo: false
      },
      {
        title: 'דיווח משני',
        description: [
          'רמת נזק - מושג מבצעי על פיו מחליטים כמות סד"כ ואמצעים נדרשים לאירוע',
          '(כוללת בתוכה רמת השרס, צפי נפגעים ולכודים, מורכבות חילוץ צפויה וסד״כ חילוץ צפוי).'],
        includingInfo: false
      },
      {
        title: 'דיווח מסכם',
        description: ['גריד של האתר'],
        includingInfo: false

      }
    ],
    color: '#ff8303'
  },
]

// Array containing information for video question title reminder
const briefingInfo = [
  {
    id: "01",
    title: "דיווח הגעה לאירוע",
    color: "#2c599d",
  },
  {
    id: "02",
    title: "דיווח ראשוני",
    color: "#2c599d",
  },
  {
    id: "03",
    title: "דיווחי ביניים",
    color: "#2c599d",
  },
  {
    id: "04",
    title: "דיווח סופי",
    color: "#2c599d",
  }
]

// Array containing information for video question
const info = {
  videoTitle: "לפניכם סרטון המציג העברת דיווח ביניים של מנהל אירוע לצוות, לאחר הצפייה תצטרכו לענות האם הדיווח הועבר בצורה מיטבית או לא.",
  question1: "האם הדיווח הועבר בצורה מיטבית?",
  wrongMessage: "הדיווח לא הועבר בצורה מיטבית",
  question2: "מה היה חסר בדיווח?",
  correctAnswer: 'מצב מדויק של הנפגעים כולל טיפול',
  video: wrongBriefing
}

export default function Page6(props) {

  const { countPages, setMaxPages, setLinkName, setFinish } = props

  const [reportDisplay, setReportDisplay] = useState(true);
  const [report, setReport] = useState("")

  // Switch to the appropriate report page
  const reportsPage = (number) => {
    setReportDisplay(false);
    setReport(number);
  }
  
  useEffect(() => {
    setMaxPages(1);
    setLinkName("/page7");
  }, [])

  return (
    <div>
      <div className='page1-container'>
        {
          countPages === 0 ? (
            <div className='reports-button-container'>
              {
                reportDisplay ?
                  (
                    <div>
                      <div className='div-triangle-right-background'>
                        <div className='div-triangle-right' onClick={() => reportsPage(0)}>
                          <div>דיווחים באירוע רפואי</div>
                        </div>
                      </div>

                      <div className='div-triangle-left-background'>
                        <div className='div-triangle-left' onClick={() => reportsPage(1)}>
                          <div>דיווחים מפקד חפ"ק אלפא<br></br>בתיאום מקדים</div>
                          <p>(מועבר בשוע"ל + בקשר)</p>
                        </div>
                      </div>
                    </div>
                  ) : (<ReportsPage setReportDisplay={setReportDisplay} reportsInfo={reportsInfo[report]}></ReportsPage>)
              }
            </div>
          ) : <Question briefingInfo={briefingInfo} info={info} wrongBriefing={wrongBriefing} page={6} setFinish={setFinish} />
        }
      </div>
    </div>
  )
}
