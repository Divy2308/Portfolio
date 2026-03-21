import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern - Customer Support</h4>
                <h5>Synobiz Systems Pvt Ltd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a Business Workflow and Customer Support Automation System to streamline operations and enhance client communication.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in ICT</h4>
                <h5>Pandit Deendayal Energy University</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Pursuing Information & Communication Technology. Current CGPA: 7.71. Cleared NTSE (2020) and JEE Mains with 89 percentile.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII (PCM)</h4>
                <h5>I D Patel Education Campus</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Completed GHSEB Class XII with an aggregate of 78.91 percentile. Scored 83.65 percentile in GUJCET.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
