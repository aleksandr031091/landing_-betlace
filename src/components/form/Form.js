import FormStyled from "./FormStyled";

const Form = () => {
  return (
    <FormStyled>
      <h2>contact us</h2>
      <h3>contact us</h3>

      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Company" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Message" />
      <button>send</button>
    </FormStyled>
  );
};

export default Form;
