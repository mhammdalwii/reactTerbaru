import Input from "./Input";
import Label from "./Label";

const InputForms = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-8">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForms;
