import React from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';

function OverallResumeScoreComponent() {
    const score = 32;
  return (
    <div className="relevancy-score-content">
            <div className='cpb'>
          <CircularProgressbar
            value={score}
            text={`${score}%`}
            styles={buildStyles({
              // Customize colors
              pathColor: `#E8AC11`, // Progress bar color
              textColor: '#111d63',  // Text color
              trailColor: '#E8781133', // Background path color
              textSize: '30px',   
              fontFamily:'bold-sharp',  // Text size
            })}
          />
        </div>

    <div className="txt" style={{
        display:'flex',
        flexDirection:'column',
        gap:'10px'
    }}>
        <h3>Decent</h3>
        <p>This is a decent start, but then there is clear room for improvement on your resume. It still scores low on some key criteria hiring managers and screening softwares are looking for, but they can be easily improved. </p>
            <p>Let’s dive into what we checked your resume for, and how you can improve your score by extra {100-score}%.</p>
    </div>
</div>
  )
}

export default OverallResumeScoreComponent