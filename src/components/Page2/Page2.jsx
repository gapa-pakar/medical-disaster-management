import React, { useEffect } from 'react'
import Page2Part1 from './Page2Part1'
import Question from '../Quiz/Question'
import './Page2.css'

import arrowsRight from '../../assets/page2-icons/arrows-right.svg'
import arrowsLeft from '../../assets/page2-icons/arrows-left.svg'
import wrongBriefing from '../../assets/videos/wrongBriefing.mp4'
import correctBriefing from '../../assets/videos/correctBriefing.mp4'

const briefingInfo = [
  {
    id: "01",
    title: "מתאר האירוע והכנה מנטלית",
    description: "האם המתאר מאוים / לא מאוים ומתן דגשים בהתאם + הכנת חברי הצוות לקראת המתרחש, תיאום ציפיות לצורך הגברת מוכנות.",
    color: "#02aecc",
  },
  {
    id: "02",
    title: "בטיחות",
    description: "חידוד נהלים לצורך שמירת ביטחון המטפל והמטופל. נטרול זירת האירוע, במידה וקיים - נצירת ולקיחת נשק הפצוע, באירועי חילוץ – אין עלייה לאתר טרם קבלת אישור ממהנדס ומקפד הכוח, כפפות לפני טיפול וכדומה.",
    color: "#029fbb",
  },
  {
    id: "03",
    title: "כוחות חבירים",
    description: "בדיקה לגבי זמינות הכוחות החברים, צפי הגעתם והצגתם לצוות.",
    color: "#1d8ea1",
  },
  {
    id: "04",
    title: 'באר"ן - מעבר מהיר על התו"ל,\u2003\u2003 בחילוץ - יש להוסיף על משולש הזה"ב',
    description: 'מעבר על סד"פ ההתרחשויות, חידוד הנקודות העיקריות החשובות לתפקוד שוטף ונכון.',
    color: "#357b8f",
  },
  {
    id: "05",
    title: "מי לוקח מה",
    description: "חלוקת תחומי אחראיות ברורה לצורך בקרה וסדר באירוע.",
    color: "#0a5684",
  },
  {
    id: "06",
    title: "סגירת מעגל",
    description: "בדיקת הבנה כוללת.",
    color: "#1a3b70",
  },
  {
    id: "07",
    title: "תדרוך הנהג",
    description: "דגשים נוספים לפי הצורך.",
    color: "#10214c",
  }
]

const titleInfo = {
  p1: 'תדרוך אג"מי הינו תדריך המועבר על ידי מנהל האירוע / חוג"ד של הצוות הרפואה בדרך לאירוע, מטרת התדריך הינה',
  p2: 'הכנה לאירוע מבחינה מנטלית ואג"מית.',
  title: "מה נכלל בתדרוך?"
}

const info = {
  videoTitle: "לפניכם סרטון המציג העברת תדרוך של מנהל אירוע לצוות, לאחר הצפייה תצטרכו לענות האם התדרוך הועבר בצורה מיטבית או לא.",
  question1: "האם התדרוך הועבר בצורה מיטבית?",
  wrongMessage: "התדרוך לא הועבר בצורה מיטבית",
  question2: "מה היה חסר בתדרוך?",
  correctAnswer: 'בטיחות (מתאר מאוים, עליה על כפפות, אישור עליה לאתר), חלוקה לגזרות, משולש זה"ב, וידוא הבנה.',
  video: wrongBriefing
}

export default function Page2(props) {

  const { countPages, setMaxPages, setLinkName, setFinish } = props

  useEffect(() => {
    setMaxPages(2);
    setLinkName("/page3");
  }, [])

  return (
    <div className='page2-container'>
      {countPages === 0 ?
        <Page2Part1 briefingInfo={briefingInfo} titleInfo={titleInfo} arrowsRight={arrowsRight} arrowsLeft={arrowsLeft} page={2} /> :
        countPages === 1 ?
          <Question briefingInfo={briefingInfo} info={info} page={2} setFinish={setFinish}></Question> :
          <div className='correct-briefing-container'>
            <div className='correct-briefing'>תדרוך נכון:</div>
            <video className='video-placing' src={correctBriefing} controls></video>
          </div>
      }
    </div>
  )
}
