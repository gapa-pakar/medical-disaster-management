
import React, { useEffect, useState } from 'react'
import './Page9.css'
import '../Page2/Page2.css'
import Page2Part1 from '../Page2/Page2Part1'
import Page9Subjects from './Page9Subjects'

// Importing assets
import arrowsRight from '../../assets/page9-icons/arrows-right.svg'
import arrowsLeft from '../../assets/page9-icons/arrows-left.svg'
import white from '../../assets/page9-icons/white.jpg'
import yellow from '../../assets/page9-icons/yellow.jpg'
import helicopter from '../../assets/page9-icons/helicopter.jpg'

// Array containing information for page 2 part 1 component
const briefingInfo = [
    {
        id: "01",
        description: " קדימות הטיפול תקבע בהתאם לשלב בסכמה בו לפצוע יש בעיה.",
        color: "#084081",
    },
    {
        id: "02",
        description: "במידה ויש לנו פצוע שאותו לא ניתן לייצב בשטח, ואין באפשרותנו לטפל בו, קדימות הפינוי שלו עולה.",
        color: "#084081",
    },
    {
        id: "03",
        description: 'המקום הכי טוב לפצועים שלנו הוא ביה"ח, ולכן נרצה לפנות את כולם בהקדם האפשרי.',
        color: "#084081",
    },
    {
        id: "04",
        description: 'גם בקביעת סדר הפינוי נעבוד לפי אותה הנחת העבודה.',
        color: "#2171b5",
    },
    {
        id: "05",
        description: " יש לשים לב, את חלק מהפצועים ניתן לייצב בשטח, אותם נרצה קודם כל לייצב במידת האפשר ורק לאחר מכן לפנות.",
        color: "#2171b5",
    },
    {
        id: "06",
        description: " במידה ופצוע יציב וכרגע אין סכנה מידית לחייו, קדימות הפינוי שלו יורדת.",
        color: "#2171b5",
    }
]

// Array containing information for page 2 part 1 component title
const titleInfo = {
    pTitle: 'חשיבות התיעוד והרישום:',
    p1: 'שרשרת הטיפול החילוץ והפינוי כוללת תחנות רבות עד ההגעה לבית החולים.',
    p2: 'לכן, קיים צורך לתעד בצורה מסודרת את כלל המידע (מדדים, ממצאים, טיפולים) בין הדרגים השונים.',
    title: "מה שהורג קודם יטופל קודם"
}

// Array containing information for this component (part 2)
const evacuationInfo = [
    {
        title: "אמצעי פינוי אזרחיים",
        description: [
            {
                id: 1,
                title: "אמבולנס לבן",
                link: "",
                color: "#1a3b70"
            },
            {
                id: 2,
                title: "אמבולנס צהוב",
                link: "",
                color: "#2c599d"
            },
            {
                id: 3,
                title: "מסוק פינוי אזרחי",
                link: "",
                color: "#6d90ca"
            }
        ]
    },
    {
        title: "אמצעי פינוי צבאיים",
        description: [
            {
                id: 4,
                title: "ממוגנים",
                subtitle: 'נגמ"ש פינוי, אכזרית, זאב-בולנס',
                link: "",
                color: "#1a3b70"
            },
            {
                id: 5,
                title: "לא ממוגנים",
                subtitle: 'סבל חי"ר, האמר-בולנס, דודג׳בולנס / פורדבולנס',
                link: "",
                color: "#2c599d"
            },
            {
                id: 6,
                title: "מסוקים",
                subtitle: 'יסעור, ינשוף ואופציות חבירה',
                link: "",
                color: "#6d90ca"
            }
        ]
    }
]

// Array containing information for page 9 subjects component
const info = [
    {
        id: 1,
        title: "אמבולנס לבן",
        color: "#1a3b70",
        tr: [1, 2, 3, 4],
        tcol: [1, 2],
        th: ["מקומות שכיבה ומקומות ישיבה", "כוח אדם", "מתאר", "הערות"],
        td: [
            [
                ["2 מטופלים בשכיבה# *או*# 1 שוכב ו-3 מטופלים בישיבה"],
                ["נהג אמבולנס בדרגת חובש / חובש בכיר / פראמדיק# +# 3 מתנדבים"],
                ["סעד חיים בסיסי וחצי מתקדם הכולל ביצוע פעולות מצילות חיים ושימוש בדפיברילטור"],
                ['לאמבולנס הלבן "שדרוג" הנקרא אמבולנס 4X4 בעל אותן יכולות רפואיות אך יכול לנוע בשטחי עפר וחולות.']
            ]
        ],
        image: white,
        color1: "#4e6ca0",
        color2: "#cfd5ea",
    },
    {
        id: 2,
        title: 'אמבולנס צהוב - אט"ן',
        color: "#2c599d",
        tr: [1, 2, 3, 4],
        tcol: [1, 2],
        th: ["מקומות שכיבה ומקומות ישיבה", "כוח אדם", "מתאר", "הערות"],
        td: [
            [
                ["מטפל בשכיבה# *או*# מטופל בשכיבה"],
                ["נהג אמבולנס בדרגת חובש / חובש בכיר / פראמדיק# +# *פראמדיק*# +# 2 מתנדבים"],
                ["סעד חיים *מתקדם* הכולל שימוש בתרופות ואמצעי טיפול מתקדמים."],
                ['בעבר היה קיים נט"ן במד"א שכלל אמבולנס עם רופא.# כיום קיימים אופנועים וכלי רכב עימם מגיעים כוננים אשר מעניקים טיפול ראשוני בלבד ואין ביכולתם לפנות לבתי החולים']
            ]
        ],
        image: yellow,
        table2: {
            title: "אמצעים באמבולנס טיפול נמרץ",
            td: [
                ["A", 'אינטובציה וקוניוטומיה'],
                ["B", 'אינהלציה, מנשם אוטומטי, VIGON, נקז חזה, מד סטורציה, קפנומטר'],
                ["C", 'BIG, מוניטור, אק"ג'],
                ["D", 'תרופות, גלוקומטר וציוד לטיפול בילדים'],
                ["E", 'אמצעי פיקוד ושליטה באר"ן ואירוע חומ"ס']
            ],
            colSpan: "2",
            width: "fit-content"
        },
        color1: "#5f7cb1",
        color2: "#cfd5ea",
        color3: "#e9ebf5"
    },
    {
        id: 3,
        title: "מסוק פינוי אזרחי",
        color: "#6d90ca",
        tr: [1, 2, 3, 4],
        tcol: [1, 2],
        th: ["מקומות שכיבה ומקומות ישיבה", "כוח אדם", "מתאר", "הערות"],
        td: [
            [
                ["2 מטופלים בשכיבה"],
                ["2 טייסים# +# 2 פראמדיקים"],
                ['· לצוות יכולות טיפול סטנדרטיות בדומה לאט"ן# · מאז המלחמה ישנה יכולת למתן דם# ללא יכולת לבצע נקז חזה'],
                ['· קיימים במד"א 2 מסוקים, בצפון במנחת בית החולים פוריה ובדרום שדה תימן.# · שני המסוקים בכוננות רציפה של 24/7.# · המסוקים הם אמצעי פינוי מהיר עבור פצועים דחופים במתארים בהם מרחק ומשך הפינוי הצפוי ארוך יחסית.']
            ]
        ],
        image: helicopter,
        color1: "#839ac3",
        color2: "#cfd5ea"
    },
    {
        id: 4,
        title: "אמצעי פינוי ממוגנים",
        color: "#1a3b70",
        tr: [1, 2, 3, 4, 5, 6],
        tcol: [1, 2, 3, 4],
        th: ["", "תיאור הרכב", "מיקום", "מקומות שכיבה", "מקומות ישיבה", "כוח אדם"],
        td: [
            [
                ['נגמ"ש פינוי'],
                ['הנגמ"ש (נושא גייסות משוריין) הוא כלי רכב שמטרתו העיקרית היא *ניוד ממוגן* של כוחות לשדה הקרב *ופינוי פצועים* משדה קרב לאחור.# *הכלי ממוגן.*'],
                ['פריסות תאג"ד ופלה"ק, פינוי באר"ן מלחמתי.'],
                ['4 פצועים בינוניים# *או*# 2 פצועים קשה'],
                ["6 פצועים"],
                ['משתנה בהתאם למפקד הנגמ"ש']
            ],
            [
                ['אכזרית'],
                ['רכב *ממוגן מנ.ט ומכל נשק קל*.# נוצר על מנת לעזור לכוחות החי"ר בכניסתם לתוך שטחים ברמת הגולן ולחיל השיריון כדי לקדם כוחות מסייעים תוך כדי תנועה של טנקים.# *הטיפול בתוך כלי הפינוי הינו בלתי אפשרי, העמסת הפצועים קשה ואין מקום לצר"פ כלל*.'],
                ['פינוי לאר"ן מלחמה ()'],
                ['פצוע 1 שכוב'],
                [""],
                ['משתנה']
            ],
            [
                ['זאב - בולדנס'],
                ['הזאב הוא *כלי פינוי ממוגן כנגד ירי נשק קל*, יידוי אבנים ובקבוקי תבערה.# הכלי הינו 4X4 מה שהופך אותו גם ליותר נייד בחולות והרים. ישנו *קושי לטפל* בו בזמן הנסיעה בגלל רעידות מרובות של הרכב.# *יכולת פינוי נמוכה* עקב מהירות נסיעה נמוכה.'],
                ['אזח"ע, איו"ש, פצ"ן'],
                ['2 פצועים'],
                ['6 פצועים'],
                ['נהג +# מט"ב +# מנהל אירוע +# 2 חובשים']
            ],
        ],
        color1: "#4e6ca0",
        color2: "#cfd5ea",
        color3: "#e9ebf5"
    },
    {
        id: 5,
        title: 'אמצעי פינוי לא ממוגנים',
        color: "#2c599d",
        tr: [1, 2, 3, 4, 5, 6],
        tcol: [1, 2, 3, 4],
        th: ["", "תיאור הרכב", "מיקום", "מקומות שכיבה", "מקומות ישיבה", "כוח אדם"],
        td: [
            [
                ['סבל חי"ר'],
                ['תפקידו העיקרי לתת סיוע קרוב לכוחות הקרקע, הן בנשיאת משקלים והן בפינוי פצועים.# הכלי *אינו ממוגן* ולכן יכנס לשטח אויב רק לאחר שנכבש.# משמש *ככלי פינוי אך ללא יכולת טיפול*.'],
                ['פינוי לאר"ן מלחמתי באיזור כבוש'],
                ['2-3 פצועים בינוני'],
                [""],
                ['משתנה']
            ],
            [
                ['האמר - בולנס'],
                ['כלי *הנועד לתוואי שטח קשה*.# הרכב *אינו ממוגן*.# בעקבות החלל הקטן, *אין כלל טיפול תוך כדי נסיעה*.'],
                ['גדודים ומפח"טים'],
                ['4 פצועים'],
                [""],
                ['נהג +# מט"ב +# מנהל אירוע +# 2 חובשים']
            ],
            [
                ["דודג'בולנס / פורדבולנס"],
                ['כלי רכב גדול ונוח המשמש צוותי אר"ן ותאג"דים של חטיבות מרחביות לפנות פצועים בצורה יעילה ומהירה תוך כדי טיפול יעיל *בתוך שטחי ישראל*.# הכלי מוקפץ לרוב לאירועים בודדים בגזרה מעל 2 פצועים. *רכב שאינו ממוגן*'],
                ['מפקדות ובסיסי הדרכה'],
                ['4 פצועים'],
                ['8 פצועים'],
                ['נהג +# מט"ב +# מנהל אירוע +# 2 חובשים']
            ],
        ],
        color1: "#5f7cb1",
        color2: "#cfd5ea",
        color3: "#e9ebf5"
    },
    {
        id: 6,
        title: "אמצעי פינוי ממוגנים",
        color: "#6d90ca",
        tr: [1, 2, 3, 4, 5, 6],
        tcol: [1, 2, 3],
        th: ["", "מקומות שכיבה", "מקומות ישיבה", "יכולת טיפול מיטבית", "כוח אדם", "הערות"],
        td: [
            [
                ['יסעור'],
                ['7 פצועים'],
                ['12 פצועים'],
                ['4 פצועים דחופים בשכיבה'],
                ['חוליה רפואית המורכבת מ-6 לוחמים# חובשים +# מט"ב – רופא +# מטפל זוטר – פראמדיק / רופא'],
                ['העמסת פצועים למסוק תהיה משעה "5" של המסוק.'],
            ],
            [
                ['ינשוף'],
                ['עד 2 פצועים'],
                ['עד 6 פצועים'],
                [''],
                ['חוליה רפואית המורכבת מ-3 לוחמים# חובשים +# מט"ב - רופא +# מטפל זוטר – פראמדיק / רופא'],
                ['העמסת פצועים למסוק תהיה משעה "3" ומשעה "9" של המסוק'],
            ],
        ],
        table2: {
            title: "3 אופציות חבירה",
            td: [
                ["אופציה א'", "אופציה ב'", "אופציה ג'"],
                [
                    "האופציה המועדפת בחבירה בשטח מאוים. בשאיפה ללא פריקה של כוח (),במידת הצורך פריקה עד טווח דיסקה של מפקד ורופא בלבד.",
                    "פריקה של כוח () מהמסוק לצורך העמסת פצועים / טיפול רפואי.",
                    "פריקת צוות () ויציאת המסוק."]
            ],
            colSpan: "3",
            width: "90rem"
        },
        color1: "#839ac3",
        color2: "#cfd5ea",
        color3: "#e9ebf5"
    }
]

export default function Page9(props) {

    const { countPages, setMaxPages, setLinkName, nextSlide } = props

    // State to control the visibility of the subject information and which subject to show
    const [showSubject, setShowSubject] = useState(false);
    const [subjectNumber, setSubjectNumber] = useState(null);

    // Handle click on a specific evacuation element to display detailed information
    const handleClick = (id) => {
        nextSlide();
        setSubjectNumber(id - 1)
        setShowSubject(true);
        setMaxPages(2);
    }

    // useEffect hook to set the page's max pages, link name, and reset subject visibility when countPages changes
    useEffect(() => {
        setLinkName("/page9/1");

        if (countPages === 1) {
            setShowSubject(false);
            setMaxPages(1);
        }
    }, [countPages])

    return (
        <div>
            <div className='page2-container'>
                {
                    countPages === 0 ? (
                        <Page2Part1 briefingInfo={briefingInfo} titleInfo={titleInfo} arrowsRight={arrowsRight} arrowsLeft={arrowsLeft} page={9} setShowSubject={setShowSubject} />
                    ) : countPages === 1 ? (
                        <div>
                            {/* // If showSubject is false, render the main page content */}
                            <div className='page9-container'>
                                <div className='page2-p'>אמצעי הפינוי יבחר על ידי המפקד הרפואי והאגמ״י על פי זמינות האמצעים, אופי הפציעה, מצבו של הנפגע,<br></br>הצורך בליווי הנפגע על ידי מט״ב, בית החולים הרלוונטי ושיקולים נוספים.</div>
                                <div className='line' id='line-page9-1'></div>
                                <div className='more-circle'>לחצו על <br></br>הכפתורים<br></br> למידע נוסף</div>

                                {/* Container for evacuation info */}
                                <div className='evacuation-container'>
                                    {
                                        // Map through evacuationInfo array to display evacuation elements
                                        evacuationInfo.map((element, index) => (
                                            <div key={`element_${index}`} className='evacuation-container1' >
                                                <div className='evacuation-title'>{element.title}</div>
                                                <div>
                                                    {
                                                        // For each element in the description array, display the title and subtitle if available
                                                        element.description.map((element1, index1) => (
                                                            <div key={`element1_${index1}`} className='evacuation-text-container'>
                                                                <div className='evacuation-text' style={{ backgroundColor: element1.color }} onClick={() => handleClick(element1.id)}>{element1.title}
                                                                    {
                                                                        // If a subtitle exists, display it
                                                                        element1.subtitle && (
                                                                            <div>{element1.subtitle}</div>
                                                                        )
                                                                    }
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ) : showSubject &&
                    // If showSubject is true, render the Page9Subjects component
                    (<Page9Subjects info={info[subjectNumber]} setShowSubject={setShowSubject} />)
                }
            </div>
        </div>
    )
}
