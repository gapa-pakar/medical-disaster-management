import { useEffect, useState } from 'react'

import Route from './components/Route'
import Link from './components/Link'
import Navbar from './components/Navbar/Navbar'
import FullScreen from './components/FullScreen'
import Page1 from './components/Page1/Page1'
import Page2 from './components/Page2/Page2'
import Page3 from './components/Page3/Page3'
import Page4 from './components/Page4/Page4'
import Page5 from './components/Page5/Page5'
import Page6 from './components/Page6/Page6'
import Page7 from './components/Page7/Page7'
import Page8 from './components/Page8/Page8'
import Page8Subtopic from './components/Page8/Page8Subtopic'
import Page9 from './components/Page9/Page9'
import Page9Subtopic from './components/Page9/Page9Subtopic'
import Page10 from './components/Page10/Page10'
import OpeningPage from './components/OpeningPage/OpeningPage'
import SubjectsPage from './components/OpeningPage/SubjectsPage'
import FinishPage from './components/OpeningPage/FinishPage'

import next from './assets/arrow-right.svg'
import previous from './assets/arrow-left.svg'
import rotate from './assets/videos/rotate.mp4'

import management from './assets/navbar-icons/management.svg'
import checkList from './assets/navbar-icons/check-list.svg'
import medicalKit from './assets/navbar-icons/medical-kit.svg'
import agreement from './assets/navbar-icons/agreement.svg'
import connectionSignal from './assets/navbar-icons/connection-signal.svg'
import megaphone from './assets/navbar-icons/megaphone.svg'
import assessment from './assets/navbar-icons/assessment.svg'
import list from './assets/navbar-icons/list.svg'
import injury from './assets/navbar-icons/injury.svg'
import heartPulse from './assets/navbar-icons/heart-pulse.svg'

const Subjects = [
  {
    id: 1,
    title: "מבוא למנהלי אירוע",
    color: "#10214c",
    icon: management,
    link: "/page1",
  },
  {
    id: 2,
    title: 'תדרוך אג"מי בהגעה לאירוע',
    color: "#1a3b70",
    icon: checkList,
    link: "/page2",
  },
  {
    id: 3,
    title: " תפיסת הפעלה רפואית",
    color: "#2c599d",
    icon: medicalKit,
    link: "/page3"
  },
  {
    id: 4,
    title: "ממשקים קיימים בניהול אירוע",
    color: "#5c83c4",
    icon: agreement,
    link: "/page4"
  },
  {
    id: 5,
    title: "ערוצי דיווח ושיטות דיווח",
    color: "#95aed7",
    icon: connectionSignal,
    link: "/page5"
  },
  {
    id: 6,
    title: "דיווחים לרמות הכפופות לאירוע",
    color: "#fd5602",
    icon: megaphone,
    link: "/page6"
  },
  {
    id: 7,
    title: "העברת תמונת מצב לרמה הממונה",
    color: "#fe6e00",
    icon: assessment,
    link: "/page7"
  },
  {
    id: 8,
    title: 'סד"פ ניהול אירוע',
    subtitle: "עקרונות קביעת נקודות ריכוז וחלוקה לגזרות",
    subtitleLink: "/page8/1",
    color: "#ff8303",
    icon: list,
    link: "/page8"
  },
  {
    id: 9,
    title: "מיון וסימון נפגעים ואמצעי פינוי",
    subtitle: "טופס 101",
    subtitleLink: "/page9/1",
    color: "#fc974e",
    icon: injury,
    link: "/page9"
  },
  {
    id: 10,
    title: 'סד"פ בסיום האירוע',
    color: "#ffaf42",
    icon: heartPulse,
    link: "/page10"
  }
]

const pathArray = ['/', '/subjectsPage', '/finishPage'];

function App() {
  // horizontal view on mobile
  const [isPortrait, setIsPortrait] = useState(false);

  // variables
  const [countPages, setCountPages] = useState(0);
  const [firstPage, setFirstPage] = useState(false);
  const [lastPage, setLastPage] = useState(false);
  const [maxPages, setMaxPages] = useState(0);
  const [linkName, setLinkName] = useState("");
  const [finish, setFinish] = useState(true);

  // localStorage variable
  const [selectedPage, setSelectedPage] = useState('')

  // navbar variable
  const [currentSubject, setCurrentSubject] = useState({});


  // arrows functions
  const nextSlide = () => {
    if (countPages < maxPages) {
      setCountPages(c => c + 1);
      setFirstPage(false);
    }
  }

  const previousSlide = () => {
    if (countPages > 0) {
      setCountPages(preCount => preCount - 1);
      setLastPage(false);
      setFinish(true);
    }
  }

  useEffect(() => {
    if (currentSubject.id === 1) {
      setFirstPage(true);
    }

    if (currentSubject.id === 10) {
      setLastPage(true);
    }

    if (localStorage) {
      setSelectedPage(JSON.parse(localStorage.getItem('data')));
    }
  })

  // Detect screen orientation and update state
  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.innerWidth < window.innerHeight) {
        setIsPortrait(true); // Portrait mode
      } else {
        setIsPortrait(false); // Landscape mode
      }
    };

    // Initial check
    handleOrientationChange();

    // Listen for resize events to detect when the device is rotated
    window.addEventListener('resize', handleOrientationChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);


  return (
    <>
      <div >
        {/* rotate phone message */}
        {isPortrait && (
          <div className='portrait'>
            <video src={rotate}  type='video/mp4' autoPlay loop muted></video>
          </div>
        )}

        {/* landscape mode */}
        <Route path="/" >
          <OpeningPage />
        </Route>
        <Route path="/subjectsPage">
          <SubjectsPage Subjects={Subjects} />
        </Route>
        <Route path="/finishPage">
          <FinishPage Subjects={Subjects} />
        </Route>
        <FullScreen /> {/* Render the FullScreen component */}

        {/* pages with navbar */}
        <div>
          <div className='split right' style={{ display: !pathArray.includes(window.location.pathname) ? "block" : "none" }}>
            <Route path="/page1" >
              <Page1 countPages={countPages} setMaxPages={setMaxPages} setLinkName={setLinkName} setFinish={setFinish} />
            </Route>
            <Route path="/page2" >
              <Page2 countPages={countPages} setMaxPages={setMaxPages} setLinkName={setLinkName} setFinish={setFinish} />
            </Route>
            <Route path="/page3" >
              <Page3 countPages={countPages} setMaxPages={setMaxPages} setLinkName={setLinkName} setFinish={setFinish} />
            </Route>
            <Route path="/page4" >
              <Page4 countPages={countPages} setMaxPages={setMaxPages} setLinkName={setLinkName} setFinish={setFinish} />
            </Route>
            <Route path="/page5" >
              <Page5 countPages={countPages} setMaxPages={setMaxPages} setLinkName={setLinkName} setFinish={setFinish} />
            </Route>
            <Route path="/page6" >
              <Page6 countPages={countPages} setMaxPages={setMaxPages} setLinkName={setLinkName} setFinish={setFinish} />
            </Route>
            <Route path="/page7" >
              <Page7 countPages={countPages} setMaxPages={setMaxPages} setLinkName={setLinkName} setFinish={setFinish} />
            </Route>
            <Route path="/page8" >
              <Page8 countPages={countPages} setMaxPages={setMaxPages} setLinkName={setLinkName} setFinish={setFinish} />
            </Route>
            <Route path="/page8/1" >
              <Page8Subtopic countPages={countPages} setMaxPages={setMaxPages} setLinkName={setLinkName} setFinish={setFinish} />
            </Route>
            <Route path="/page9" >
              <Page9 countPages={countPages} setMaxPages={setMaxPages} setLinkName={setLinkName} setFinish={setFinish} />
            </Route>
            <Route path="/page9/1" >
              <Page9Subtopic countPages={countPages} setMaxPages={setMaxPages} setLinkName={setLinkName} setFinish={setFinish} />
            </Route>
            <Route path="/page10" >
              <Page10 countPages={countPages} setMaxPages={setMaxPages} setLinkName={setLinkName} setFinish={setFinish} />
            </Route>

            {/* arrows */}
            <div className='arrows'>
              <button style={{ visibility: finish || selectedPage === 2 ? "visible" : "hidden" }}
                onClick={nextSlide}>
                {countPages === maxPages ?
                  <Link setCountPages={setCountPages} href={!lastPage ? linkName : '/finishPage'}><img src={next} className='next-arrow'></img></Link> :
                  <img src={next} className='next-arrow'></img>}
              </button>

              <button onClick={previousSlide}>
                {countPages === 0 ?
                  <Link setCountPages={setCountPages} href={!firstPage ? `/page${currentSubject.id - 1}` : '/subjectsPage'}><img src={previous} className='previous-arrow'></img></Link> :
                  <img src={previous} className='previous-arrow'></img>}
              </button>
            </div>
          </div>

          {/* navbar */}
          {
            !pathArray.includes(window.location.pathname) ?
              <Navbar className="split left" Subjects={Subjects} currentSubject={currentSubject} setCurrentSubject={setCurrentSubject}></Navbar> : <></>
          }
        </div>
      </div>
    </>
  )
}

export default App
