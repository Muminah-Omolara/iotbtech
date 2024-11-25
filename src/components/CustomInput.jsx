const CustomInput = ({ name, type, label, placeholder, required = false }) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        required
        placeholder={placeholder}
        className="w-full mt-2 px-3 py-2   outline-none border focus:border-tt-primary shadow-sm rounded-lg"
      />
    </div>
  );
};

export default CustomInput;
