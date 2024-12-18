import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles

function RelevancyScoreComponent() {
  const score = 95; 

  return (
    <>
      <div className="relevancy-score-content">
        <div className="cpb">
          <CircularProgressbar
            value={score}
            text={`${score}%`}
            styles={buildStyles({
              // Customize colors
              pathColor: `#11E8D4`, // Progress bar color
              textColor: '#111d63',  // Text color
              trailColor: '#11E8D433', // Background path color
              textSize: '30px',   
              fontFamily: 'bold-sharp, sans-serif', 
            })}
          />
        </div>
        <div className="txt" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <h3>Great!</h3>
          <p>Your resume contains most of the important keywords and hard skills found in the job description.</p>
          <p>This means your resume is well targeted and relevant to the job you are applying for. This will increase your chances of getting an interview.</p>
        </div>
      </div>
    </>
  );
}

export default RelevancyScoreComponent;
