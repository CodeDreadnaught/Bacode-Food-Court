const Input = props => {
  return (
    <section>
      <label htmlFor={props.attributes.id}>{props.label}</label>
      <input {...props.attributes} />
    </section>
  );
};

export default Input;
