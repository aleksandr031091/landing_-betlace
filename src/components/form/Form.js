import FormStyled from "./FormStyled";
import colors from "../../styles/colors";
import sprite from "../../images/sprite.svg";

const Form = () => {
  return (
    <FormStyled colors={colors}>
      <h2 className="bGTitle">contact us</h2>
      <div className="wrapperTitle">
        <h3 className="formTitle">contact us</h3>
      </div>

      <div className="descBox">
        <label className="formLabel">
          <svg className="inputIcon" width="5" height="10">
            <use href={sprite + "#icon-input-name"}></use>
          </svg>
          <input
            className="formInput"
            type="name"
            name="name"
            pattern="[A-Za-z]{2,}\s[A-Za-z]{2,}"
            placeholder="name"
            required
          />
        </label>
        <label className="formLabel">
          <svg className="inputIcon" width="5" height="10">
            <use href={sprite + "#icon-input-email"}></use>
          </svg>
          <input
            className="formInput"
            type="email"
            pattern="[^ @]*@[^ @]*"
            name="email"
            placeholder="email"
            required
          />
        </label>
        <label className="formLabel">
          <svg className="inputIcon" width="5" height="10">
            <use href={sprite + "#icon-input-company"}></use>
          </svg>
          <input
            className="formInput"
            type="text"
            placeholder="company"
            required
          />
        </label>
        <label className="formLabel">
          <svg className="inputIcon" width="5" height="10">
            <use href={sprite + "#icon-input-phone"}></use>
          </svg>
          <input
            className="formInput"
            type="tel"
            name="tel"
            pattern="\d{3}\d{3}\d{2}\d{2}"
            maxlength="18"
            placeholder="phone"
            required
          />
        </label>
        <label className="formLabel">
          <svg className="inputIcon" width="5" height="10">
            <use href={sprite + "#icon-input-message"}></use>
          </svg>
          <input className="formInput" type="text" placeholder="message" />
        </label>
      </div>

      <button className="btnSubmit">send</button>
    </FormStyled>
  );
};

export default Form;
