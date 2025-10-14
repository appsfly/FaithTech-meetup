import  { useState } from 'react';

const PrimeTechAcademy = () => {
  const [currentScreen, setCurrentScreen] = useState('courses');
  const [currentCourse, setCurrentCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

// https://res.cloudinary.com/dtracwymf/video/upload/v1757153551/vid-4_hv2d3s.mp4
  // Data for courses and lessons
  const coursesData = {
    cyber: {
      name: 'קורס סייבר',
      icon: '🛡️',
      description: 'לימוד אבטחת מידע, הגנה ברשת והאקינג אתי',
      lessons: [
        {
          id: 1,
          title: "מבוא לאבטחת מידע",
          instructor: "מרצה: יובל ",
          duration: "2:31",
          description: "יסודות אבטחת מידע והבנת איומים ברשת",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/download-kali-linux-3_wmewpq.mp4",
          thumbnail: "https://via.placeholder.com/300x169/DC2626/white?text=Cyber+Security"
        },
        {
          id: 2,
          title: "רשתות מחשבים ופרוטוקולים",
          instructor: "מרצה: רותי כהן",
          duration: "55:15",
          description: "הבנה מעמיקה של פרוטוקולי רשת ונקודות תורפה",
          videoUrl: "https://www.w3schools.com/html/movie.mp4",
          thumbnail: "https://via.placeholder.com/300x169/B91C1C/white?text=Network+Security"
        },
        {
          id: 3,
          title: "Penetration Testing בסיסי",
          instructor: "מרצה: דני לוי",
          duration: "48:45",
          description: "טכניקות בסיסיות לבדיקות חדירה ומיפוי מערכות",
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          thumbnail: "https://via.placeholder.com/300x169/991B1B/white?text=Pen+Testing"
        },
        {
          id: 4,
          title: "הגנה על מערכות הפעלה",
          instructor: "מרצה: מיכל דוד",
          duration: "52:20",
          description: "הגנה על Windows ו-Linux מפני איומים",
          videoUrl: "https://www.w3schools.com/html/movie.mp4",
          thumbnail: "https://via.placeholder.com/300x169/DC2626/white?text=OS+Security"
        }
      ]
    },
    HTML:{
      name: 'קורס פיתוח HTML',
      icon: '💻',
      description: 'קורס בסיס א - HTML',
      lessons: [
        {
          id: 2,
          title: "מבנה דף HTML בסיסי",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "06:48",
          description: "מטרה: נלמד איך ליצור קובץ HTML ראשון, להבין את המבנה הבסיסי של דף HTML, ולפתוח אותו בדפדפן.",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757153315/vid-2_tr2qoy.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757153315/vid-2_tr2qoy.mp4"
        },
        {
          id: 3,
          title: "כותרות ופסקאות",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "08:02",
          description: "מטרה: להבין את תגיות הכותרות <h1>-<h6> ותגית הפסקה <p>, נלמד איך הן יוצרות היררכיה נכונה בדף.",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757153552/vid-3_ruitko.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757153552/vid-3_ruitko.mp4"
        },
        {
          id: 4,
          title: "טקסט מודגש ומעוצב",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "07:57",
          description: "מטרה: להבין איך להדגיש טקסטים ב-HTML בצורה נכונה, ההבדל בין <strong>/<em> לבין <b>/<i>, והקשר לנגישות.",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757153551/vid-4_hv2d3s.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757153551/vid-4_hv2d3s.mp4"
        },
        {
          id: 5,
          title: "קישורים ב-HTML",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "09:41",
          description: "מטרה: נלמד איך ליצור קישורים חיצוניים, קישורים שנפתחים בלשונית חדשה, וקישורים פנימיים לדפים אחרים.",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757153527/vid-5_puqyck.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757153527/vid-5_puqyck.mp4"
        } ,        {
          id: 6,
          title: "תמונות ב-HTML",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "08:23",
          description: "מטרה: ללמוד איך להוסיף תמונות לדף אינטרנט עם <img>, להבין את תכונות src ו-alt, ולדעת על פורמטים נפוצים.",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757153527/vid-5_puqyck.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757153527/vid-5_puqyck.mp4"
        }, {
          id: 7,
          title: " רשימות ב-HTML",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "04:47",
          description: "מטרה: ללמוד איך לבנות רשימות ממוספרות (<ol>) ורשימות עם נקודות (<ul>), להכיר את <li>, ולהבין שימושים נפוצים.",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757353535/ul-ol-li_hzstwp.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757353535/ul-ol-li_hzstwp.mp4"
        },
      {
          id: 8,
          title: "טבלאות ב-HTML",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "06:04",
          description: "מטרה: להבין איך לבנות טבלאות בעזרת <table>, <tr>, <td>, <th>, ולהכיר שימושים נפוצים.",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757353535/tables_wvfehu.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757353535/tables_wvfehu.mp4"
        },
        {
          id: 9,
          title: "טפסים ב-HTML",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "12:39",
          description: "מטרה: להבין איך ליצור טפסים בסיסיים לקבלת מידע מהמשתמש בעזרת <form>, <input>, <label>, <textarea>, וכפתור <button>.",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757353540/forms_rtzt5g.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757353540/forms_rtzt5g.mp4"
        }       
      ]
    },
    CSS:{
      name: 'קורס פיתוח CSS',
      icon: '💻',
      description: 'קורס בסיס א - CSS',
      lessons: [
        {
          id: 1,
          title: "יסודות פיתוח תוכנה",
          instructor: "מרצה: יוסי כהן",
          duration: "45:30",
          description: "מבוא לתכנות ועקרונות פיתוח נכון",
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          thumbnail: "https://via.placeholder.com/300x169/3B82F6/white?text=Software+Dev"
        }  
      ]
    },
    software: {
      name: 'קורס פיתוח תוכנה - צד לקוח',
      icon: '💻',
      description: 'פיתוח React (facebook) עם טכנולוגיה מתקדמת',
      lessons: [
        {
          id: 1,
          title: "מבוא ל־React",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "03:20",
          description: "מטרה: להבין מה זה React, למה היא פופולרית, ולהתקין סביבת עבודה ראשונה.",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757435553/react-intro_zfzm9w.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757435553/react-intro_zfzm9w.mp4"
        },
        {
          id: 2,
          title: "React: התקנה + הרצה",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "05:25",
          description: "המטרה: יצירה והתקנה של אפליקציית React",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757435553/react-install_qowotl.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757435553/react-install_qowotl.mp4"
        },
        {
          id: 3,
          title: " הרצה של React",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "09:46",
          description: "המטרה: הרצה של אפליקציה React ובנוסף לזה להבין את הקבצים החשובים",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757437015/react-3-part-1_vkubyg.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757437015/react-3-part-1_vkubyg.mp4"
        },
        {
          id: 4,
          title: "Create Counter in React",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "03:51",
          description: "המטרה: לחדד דגשים + יצירת Counter",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757437177/react-3-part-2_akqri4.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757437177/react-3-part-2_akqri4.mp4"
        },
        {
          id: 5,
          title: "Components in React",
          instructor: "מרצה:  גדעון מנסה דאפאאה",
          duration: "07:50",
          description: "מטרה: להבין מה זו קומפוננטה, ליצור קובץ קומפוננטה חדש ולהשתמש בו.",
          videoUrl: "https://res.cloudinary.com/dtracwymf/video/upload/v1757438010/react-4_vwztgk.mp4",
          thumbnail: "https://res.cloudinary.com/dtracwymf/video/upload/v1757438010/react-4_vwztgk.mp4"
        }
      ]
    },
    python: {
      name: 'קורס פייתון',
      icon: '🐍',
      description: 'פייתון מהיסודות ועד לפרויקטים מתקדמים',
      lessons: [
        {
          id: 1,
          title: "יסודות פייתון",
          instructor: "מרצה: איתן גולד",
          duration: "38:30",
          description: "תחביר בסיסי, משתנים ומבני נתונים בפייתון",
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          thumbnail: "https://via.placeholder.com/300x169/059669/white?text=Python+Basics"
        },
        {
          id: 2,
          title: "OOP בפייתון",
          instructor: "מרצה: נועה כהן",
          duration: "52:15",
          description: "תכנות מונחה עצמים - קלאסים ואובייקטים",
          videoUrl: "https://www.w3schools.com/html/movie.mp4",
          thumbnail: "https://via.placeholder.com/300x169/047857/white?text=Python+OOP"
        },
        {
          id: 3,
          title: "ספריות פייתון פופולריות",
          instructor: "מרצה: גיל לוי",
          duration: "48:45",
          description: "NumPy, Pandas ו-Matplotlib לעיבוד נתונים",
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          thumbnail: "https://via.placeholder.com/300x169/065F46/white?text=Python+Libraries"
        },
        {
          id: 4,
          title: "Django ופיתוח Web",
          instructor: "מרצה: תמר דוד",
          duration: "65:20",
          description: "בניית אפליקציות רשת עם Django Framework",
          videoUrl: "https://www.w3schools.com/html/movie.mp4",
          thumbnail: "https://via.placeholder.com/300x169/059669/white?text=Django"
        },
        {
          id: 5,
          title: "Machine Learning עם פייתון",
          instructor: "מרצה: אסף רוזן",
          duration: "73:12",
          description: "למידת מכונה עם Scikit-learn וTensorFlow",
          videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
          thumbnail: "https://via.placeholder.com/300x169/047857/white?text=ML+Python"
        }
      ]
    }
  };

  const styles = {
    body: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #1e3a8a, #7c3aed, #312e81)',
      minHeight: '100vh',
      color: 'white',
      lineHeight: '1.6',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px'
    },
    headerH1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      margin: 0
    },
    headerP: {
      fontSize: '1.2rem',
      color: '#93c5fd',
      marginBottom: '10px'
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'color 0.2s',
      marginBottom: '30px',
      padding: '10px'
    },
    coursesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto'
    },
    courseCard: {
      borderRadius: '25px',
      padding: '40px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    courseCardCyber: {
      background: 'linear-gradient(135deg, #dc2626, #f97316)'
    },
    courseCardSoftware: {
      background: 'linear-gradient(135deg, #2563eb, #7c3aed)'
    },
    courseCardPython: {
      background: 'linear-gradient(135deg, #059669, #0d9488)'
    },
    courseIcon: {
      fontSize: '4rem',
      marginBottom: '20px',
      position: 'relative',
      zIndex: 2
    },
    courseCardH3: {
      fontSize: '2rem',
      marginBottom: '15px',
      position: 'relative',
      zIndex: 2
    },
    courseCardP: {
      fontSize: '1.1rem',
      marginBottom: '25px',
      opacity: 0.9,
      position: 'relative',
      zIndex: 2
    },
    courseStats: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '25px',
      position: 'relative',
      zIndex: 2
    },
    stat: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '1.8rem',
      fontWeight: 'bold'
    },
    statLabel: {
      fontSize: '0.9rem',
      opacity: 0.8
    },
    courseButton: {
      background: 'rgba(255,255,255,0.2)',
      border: 'none',
      borderRadius: '25px',
      padding: '12px 25px',
      color: 'white',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background 0.2s',
      position: 'relative',
      zIndex: 2
    },
    lessonsHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '30px'
    },
    lessonsHeaderH1: {
      fontSize: '2.5rem',
      marginBottom: '10px'
    },
    lessonsHeaderP: {
      color: '#93c5fd',
      fontSize: '1.2rem',
      marginBottom: '5px'
    },
    courseStatsText: {
      color: '#a5b4fc'
    },
    lessonsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px'
    },
    lessonCard: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative'
    },
    lessonThumbnail: {
      position: 'relative',
      width: '100%',
      height: '200px',
      overflow: 'hidden'
    },
    lessonThumbnailImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    playOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s'
    },
    playButton: {
      background: '#2563eb',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      color: 'white'
    },
    lessonContent: {
      padding: '25px'
    },
    lessonTitle: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      marginBottom: '15px',
      lineHeight: '1.4',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    lessonMeta: {
      display: 'flex',
      gap: '20px',
      marginBottom: '15px',
      fontSize: '0.9rem',
      color: '#93c5fd'
    },
    lessonMetaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    lessonDescription: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: '0.95rem',
      marginBottom: '15px',
      lineHeight: '1.5',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    lessonFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    watchText: {
      color: '#93c5fd',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    navHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px'
    },
    navCenter: {
      textAlign: 'center'
    },
    navCenterH1: {
      fontSize: '1.8rem',
      marginBottom: '5px'
    },
    navCenterP: {
      color: '#93c5fd'
    },
    videoContainer: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '30px',
      marginBottom: '30px'
    },
    videoTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '25px'
    },
    videoPlayer: {
      width: '100%',
      aspectRatio: '16/9',
      background: 'black',
      borderRadius: '10px',
      marginBottom: '20px'
    },
    videoPlayerVideo: {
      width: '100%',
      height: '100%',
      borderRadius: '10px'
    },
    videoMeta: {
      display: 'flex',
      gap: '20px',
      marginBottom: '20px',
      color: 'rgba(255,255,255,0.8)'
    },
    videoMetaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    videoDescription: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: '1.1rem',
      lineHeight: '1.6'
    },
    footer: {
      textAlign: 'center',
      marginTop: '60px',
      color: '#93c5fd'
    },
    footerP1: {
      fontSize: '1.1rem',
      marginBottom: '10px'
    },
    footerP2: {
      fontSize: '0.9rem'
    }
  };

  const selectCourse = (courseId) => {
    const allowedCourses = ['HTML', 'software', 'cyber']; // Example allowed courses
    if(!allowedCourses.includes(courseId)) { 
        alert("אינך מורשה לגשת לקורס שנבחר")
        return
    }
    setCurrentCourse(courseId);
    setCurrentScreen('lessons');
  };

  const selectVideo = (video) => {
    setCurrentVideo(video);
    setCurrentScreen('video');
  };

  const backToCourses = () => {
    setCurrentCourse(null);
    setCurrentScreen('courses');
  };

  const backToLessons = () => {
    setCurrentVideo(null);
    setCurrentScreen('lessons');
  };

  const renderCoursesScreen = () => (
    <div>
      <div style={styles.header}>
        <h1 style={styles.headerH1}>🎓 PrimeTech Academy</h1>
        <p style={styles.headerP}>ברוכים הבאים למערכת הלימוד</p>
        <p style={{...styles.headerP, color: '#a5b4fc'}}>בחר את הקורס שלך להתחיל ללמוד</p>
      </div>

      <div style={styles.coursesGrid}>
                <div 
          style={{...styles.courseCard, ...styles.courseCardPython}}
          onClick={() => selectCourse('HTML')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <div style={styles.courseIcon}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" width="60"/>
          </div>
          <h3 style={styles.courseCardH3}>קורס HTML</h3>
          <p style={styles.courseCardP}>לימוד בסיסי - שפת תגיות של הדפדפן</p>
          <div style={styles.courseStats}>
            <div style={styles.stat}>
              <div style={styles.statNumber}>5</div>
              <div style={styles.statLabel}>שיעורים</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNumber}>40 שעות</div>
              <div style={styles.statLabel}>סה״כ</div>
            </div>
          </div>
          <button style={styles.courseButton}>התחל ללמוד →</button>
        </div>
        <div 
          style={{...styles.courseCard, ...styles.courseCardCyber}}
          onClick={() => selectCourse('cyber')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <div style={styles.courseIcon}>🛡️</div>
          <h3 style={styles.courseCardH3}>קורס סייבר</h3>
          <p style={styles.courseCardP}>לימוד אבטחת מידע, הגנה ברשת והאקינג אתי</p>
          <div style={styles.courseStats}>
            <div style={styles.stat}>
              <div style={styles.statNumber}>4</div>
              <div style={styles.statLabel}>שיעורים</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNumber}>40 שעות</div>
              <div style={styles.statLabel}>סה״כ</div>
            </div>
          </div>
          <button style={styles.courseButton}>התחל ללמוד →</button>
        </div>

        <div 
          style={{...styles.courseCard, ...styles.courseCardSoftware}}
          onClick={() => selectCourse('software')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <div style={styles.courseIcon}>💻</div>
          <h3 style={styles.courseCardH3}>קורס פיתוח תוכנה</h3>
          <p style={styles.courseCardP}>פיתוח Full Stack עם טכנולוגיות מתקדמות</p>
          <div style={styles.courseStats}>
            <div style={styles.stat}>
              <div style={styles.statNumber}>5</div>
              <div style={styles.statLabel}>שיעורים</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNumber}>65 שעות</div>
              <div style={styles.statLabel}>סה״כ</div>
            </div>
          </div>
          <button style={styles.courseButton}>התחל ללמוד →</button>
        </div>

        <div 
          style={{...styles.courseCard, ...styles.courseCardPython}}
          onClick={() => selectCourse('python')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <div style={styles.courseIcon}>🐍</div>
          <h3 style={styles.courseCardH3}>קורס פייתון</h3>
          <p style={styles.courseCardP}>פייתון מהיסודות ועד לפרויקטים מתקדמים</p>
          <div style={styles.courseStats}>
            <div style={styles.stat}>
              <div style={styles.statNumber}>5</div>
              <div style={styles.statLabel}>שיעורים</div>
            </div>
            <div style={styles.stat}>
              <div style={styles.statNumber}>50 שעות</div>
              <div style={styles.statLabel}>סה״כ</div>
            </div>
          </div>
          <button style={styles.courseButton}>התחל ללמוד →</button>
        </div>
      </div>

      <div style={styles.footer}>
        <p style={styles.footerP1}>© 2025 PrimeTech Academy - כל הזכויות שמורות</p>
        <p style={styles.footerP2}>הצלחה בלימודים! 🚀</p>
      </div>
    </div>
  );

  const renderLessonsScreen = () => {
    const course = coursesData[currentCourse];
    
    return (
      <div>
        <div style={styles.navHeader}>
          <button 
            style={styles.backButton}
            onClick={backToCourses}
            onMouseEnter={(e) => e.target.style.color = '#93c5fd'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            ← חזרה לרשימת הקורסים
          </button>
          <div></div>
        </div>

        <div style={styles.lessonsHeader}>
          <span style={{fontSize: '3rem'}}>{course.icon}</span>
          <div style={{textAlign: 'center'}}>
            <h1 style={styles.lessonsHeaderH1}>{course.name}</h1>
            <p style={styles.lessonsHeaderP}>{course.description}</p>
            <p style={styles.courseStatsText}>{course.lessons.length} שיעורים • 40 שעות</p>
          </div>
        </div>

        <div style={styles.lessonsGrid}>
          {course.lessons.map((lesson) => (
            <div 
              key={lesson.id}
              style={styles.lessonCard}
              onClick={() => selectVideo(lesson)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                const overlay = e.currentTarget.querySelector('.play-overlay');
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                const overlay = e.currentTarget.querySelector('.play-overlay');
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <div style={styles.lessonThumbnail}>
                <img src={lesson.thumbnail} alt={lesson.title} style={styles.lessonThumbnailImg} />
                <div className="play-overlay" style={styles.playOverlay}>
                  <div style={styles.playButton}>▶</div>
                </div>
              </div>
              <div style={styles.lessonContent}>
                <h3 style={styles.lessonTitle}>{lesson.title}</h3>
                <div style={styles.lessonMeta}>
                  <div style={styles.lessonMetaItem}>
                    <span>👨‍🏫</span>
                    <span>{lesson.instructor.replace('מרצה: ', '')}</span>
                  </div>
                  <div style={styles.lessonMetaItem}>
                    <span>⏱️</span>
                    <span>{lesson.duration}</span>
                  </div>
                </div>
                <p style={styles.lessonDescription}>{lesson.description}</p>
                <div style={styles.lessonFooter}>
                  <span style={styles.watchText}>לחץ לצפייה</span>
                  <span>📚</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderVideoScreen = () => {
    const course = coursesData[currentCourse];
    
    return (
      <div>
        <div style={styles.navHeader}>
          <button 
            style={styles.backButton}
            onClick={backToLessons}
            onMouseEnter={(e) => e.target.style.color = '#93c5fd'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            <span>←</span>
            <span>חזרה לשיעורי {course.name}</span>
          </button>
          <div style={styles.navCenter}>
            <h1 style={styles.navCenterH1}>PrimeTech Academy</h1>
            <p style={styles.navCenterP}>{course.name}</p>
          </div>
          <div></div>
        </div>

        <div style={styles.videoContainer}>
          <h2 style={styles.videoTitle}>{currentVideo.title}</h2>
          
          <div style={styles.videoPlayer}>
            <video 
              controls 
              style={styles.videoPlayerVideo}
              src={currentVideo.videoUrl}
              poster={currentVideo.thumbnail}
            />
          </div>

          <div style={styles.videoMeta}>
            <div style={styles.videoMetaItem}>
              <span>👨‍🏫</span>
              <span>{currentVideo.instructor}</span>
            </div>
            <div style={styles.videoMetaItem}>
              <span>⏱️</span>
              <span>{currentVideo.duration}</span>
            </div>
          </div>

          <p style={styles.videoDescription}>{currentVideo.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.body} dir="rtl">
      <div style={styles.container}>
        {currentScreen === 'courses' && renderCoursesScreen()}
        {currentScreen === 'lessons' && renderLessonsScreen()}
        {currentScreen === 'video' && renderVideoScreen()}
      </div>
    </div>
  );
};

export default PrimeTechAcademy;