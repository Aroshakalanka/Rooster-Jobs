import React, { useState } from "react";
import "./jobcard.css";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function JobCard({ company, role, img, isVerified, description }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="JobCard">
      <div className="jc-simple">
        <div className="jc-details-container">
          <div className="jc-header">
            <div className="jc-logo">
              <img src={img} alt="Logo" />
            </div>

            <div>
              <div className="jc-role" onClick={() => setShowAll(!showAll)}>
                {role}
              </div>

              <div className="jc-company">
                <div>{company}</div>
                {isVerified && <CheckCircleIcon className="jc-verifyIcon" />}
              </div>
            </div>
          </div>

          <div className="jc-category">
            Advertising, Arts & Media {">"} Programming & Production
          </div>

          <div className="jc-tags">
            <div className="jc-other-tags">
              <div>Full-Time</div>
              <div>Remote</div>
            </div>

            <div className="jc-salary">
              <div>USD 65,000 - 85,000/month</div>
            </div>
          </div>
        </div>

        <div className="jc-btn-container">
          <div className="jc-share">
            <div>Share</div>
          </div>

          <div className="jc-apply">
            <div>Apply</div>
          </div>
        </div>
      </div>

      {showAll && (
        <div className="jc-advance">
          <div className="jc-hr" />
          <div className="jc-ishiring">
            {company} is Hiring a <span>{role}</span>
          </div>

          <p className="jc-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            laboriosam. Id odio sed nesciunt magni deleniti perspiciatis
            excepturi molestiae? Suscipit modi officia libero illo enim
            voluptate, reprehenderit ipsam. Quas, voluptate recusandae
            explicabo, enim similique sed atque esse accusantium totam dolore
            quos! Molestiae in corporis aperiam maxime recusandae magni illo est
            sint inventore. Incidunt ipsam illo nemo commodi a, quasi impedit,
            at vel sapiente sint magni illum quidem molestias doloribus! Dolore
            ipsam labore veniam mollitia non! Dolorum totam, architecto enim
            laboriosam, aperiam ullam itaque labore nisi iure, non quo nostrum
            nulla voluptate deserunt ipsa dolores? Rem magni tenetur fugit
            inventore quaerat ipsam doloremque sunt non cupiditate obcaecati
            harum, asperiores corporis debitis temporibus, optio minima ea
            laboriosam nobis quia a ullam iure repellendus quam veniam. Animi
            iste voluptatum minima adipisci obcaecati facilis asperiores harum.
            Minus est eveniet beatae ipsam voluptatum dolore vel pariatur quas
            animi a commodi maxime, aut cum, excepturi eos.
          </p>

          <div className="jc-down-btns">
            <div>
              See more jobs at {company} -{">"}
            </div>
            <div>Apply for this Job</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobCard;
