import dataInnovate from "../../s3Innovate.json";
import AbautInnovateStyled from "./AbautInnovateStyled";
import colors from "../../styles/colors";
import { nanoid } from "nanoid";
import useModal from "../../hooks/useModal";

const AbautInnovate = () => {
  const [stateModal] = useModal();

  return (
    <AbautInnovateStyled colors={colors}>
      <h2 className="bGTitle">About S3 Innovate</h2>
      <h3 className="innovatetitle">About S3 Innovate</h3>

      {stateModal.width <= stateModal.breakPointUserMenu ? (
        <p className="innovateDescTitle">
          We are committed to create a <br /> Smart, Secure and Sustainable (S3)
          world
        </p>
      ) : (
        <p className="innovateDescTitle">
          We are committed to create a Smart, Secure and Sustainable (S3) world
        </p>
      )}

      <div className="boxDescription">
        <p className="Description">
          S3 Innovate offers innovative and secure technology solutions to
          unlock your success in digital transformations. Collaborating with
          leading technology companies and industry leaders, S3 Innovate is your
          one-stop solution partner that offers an integrated consultancy and
          products to reshape your sustainability goals.
        </p>
      </div>

      <ul className="innovateList">
        {dataInnovate.map((innovete) => (
          <li className="innovateListItem" key={nanoid()}>
            <span className="innovateTotal">{innovete.total}</span>
            <p className="innovateDescription">{innovete.description}</p>
          </li>
        ))}
      </ul>
      {stateModal.width >= stateModal.breakPointUserMenu && (
        <p className="footerInnovateDescription">
          Talk to us about our technology desires. Explore the solutions to help
          transform your asset and business.
        </p>
      )}
    </AbautInnovateStyled>
  );
};

export default AbautInnovate;
