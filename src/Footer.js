import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <br></br>
        <br />

        <p>4517 Washington Ave.</p>
        <p>Manchester,Kentucky</p>
        <p>39495</p>
        <br />
        <br />

        <p className="view-on-map">VIEW ON MAP</p>

        <br></br>

        <p>
          <i className="fa-solid fa-phone"></i>{" "}
          {/* Replace with Font Awesome */}
          <p>97866776787</p>
        </p>
        <p>
          <i class="fa-solid fa-envelope"></i> {/* Replace with Font Awesome */}
          <p>mygmail@gmail.com</p>
        </p>
      </div>
      <div className="footer-section">
        <h3>More About Us</h3>
        <br />
        <br />
        <p>
          <strong>About Us</strong>
        </p>
        <br />
        <br />
        <p>Projects</p>
        <br />
        <br />
        <p>Achievements</p>
        <br />
        <br />
        <p>Teams</p>
        <br />
        <br />
        <p>FAQ</p>
        <br />
        <br />
        <p>Contact Us</p>
      </div>

      <div className="footer-section social-links">
        <h3>Social Links</h3>
        <br></br>
        <br />
        <br />
        <p>
          <strong>
            <i className="fab fa-facebook"></i>{" "}
            {/* Replace with Font Awesome */}
            <span className="social-text">Facebook</span>
          </strong>
        </p>
        <br />
        <br />

        <p>
          <strong>
            <i className="fab fa-instagram"></i>{" "}
            {/* Replace with Font Awesome */}
            <span className="social-text">Instagram</span>
          </strong>
        </p>
        <br />
        <br />
        <p>
          <strong>
            <i className="fab fa-linkedin"></i>
            <span className="social-text">LinkedIn</span>
          </strong>
        </p>
        <br></br>
        <br></br>
        <p>
          <strong>
            <i className="fab fa-github"></i>
            <span className="social-text">GitHub</span>
          </strong>
        </p>
        <br></br>
        <br></br>
        <p>
          <strong>
            <i className="fab fa-twitter"></i>
            <span className="social-text">Twitter</span>
          </strong>
        </p>
      </div>
      <div className="copyright">
        <i className="fa-solid fa-copyright"></i>{" "}
        {/* Add Font Awesome Copyright Icon */}
        <p>2023 Energy Club All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
