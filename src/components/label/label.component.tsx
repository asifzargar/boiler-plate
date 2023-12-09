interface LablelProps {
  label: string;
  required: boolean;
}

const Label = (props: LablelProps) => {
  let { label, required } = props;
  return (
    <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "0.3rem" }}>
      {label}{" "}
      <span style={{ color: "red", display: required ? "" : "none" }}>*</span>
    </div>
  );
};

export default Label;
