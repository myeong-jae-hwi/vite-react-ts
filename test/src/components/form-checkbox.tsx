function checkBox({ type, inputId, label, ...restProps }: any) {
  return (
    <div className="formControl">
      <input type={type} id={inputId} {...restProps} />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
}

export default checkBox;
