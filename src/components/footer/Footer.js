import FooterStyled from "./FooterStyled";
import sprite from "../../images/sprite.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="logoBox">
        <svg className="logo">
          <use href={sprite + "#icon-Logo"} />
        </svg>

        <svg className="title">
          <use href={sprite + "#icon-hero-title"} />
        </svg>
      </div>

      <div className="adDressBox">
        <p>
          <p className="address">
            <svg className="locationIcon">
              <use href={sprite + "#icon-location"} />
            </svg>
            18 Sin Ming Lane, #08-37, <br /> Midview City, Singapore 573960
          </p>
        </p>
        <p>
          <svg className="letterIcon">
            <use href={sprite + "#icon-letter"} />
          </svg>
          <Link className="mailAdres">contact@s3innovate.com</Link>
        </p>
      </div>

      <div className="socialBox">
        <Link className="socialLink">
          <svg className="socialIcon">
            <use href={sprite + "#icon-twitter"} />
          </svg>
        </Link>
        <Link className="socialLink">
          <svg className="socialIcon">
            <use href={sprite + "#icon-facebook"} />
          </svg>
        </Link>
        <Link className="socialLink">
          <svg className="socialIcon">
            <use href={sprite + "#icon-link"} />
          </svg>
        </Link>
      </div>

      <p className="copy">© All rights reserved</p>
    </FooterStyled>
  );
};

export default Footer;
