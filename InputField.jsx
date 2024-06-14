import React from "react";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  onKeyPress,
  error,
  options,
  disabled,
  clsclass,
  max,
}) => {




  return (
    <div className="w-full">
      <label
        className="flex gap-2 text-start text-[#3B88C8] font-semibold border-s-[2px] border-slate-500 p-0 ps-1 leading-none mb-1"
        htmlFor={name}
      >
        <span>{label}</span>
       
          {error && <span className="text-red-500 ">{error}</span>}
        
      </label>
      {type === "select" ? (
        <select
          className="border rounded-lg w-full py-2 px-3  
          leading-tight focus:outline-none focus:border-blue-500"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "file" ? (
        <input
          className="mb-2 block w-full text-sm
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border file:border-gray-300
          file:text-sm file:font-semibold
          file:bg-violet-50
          hover:file:bg-violet-100 border rounded-tl-full rounded-bl-full rounded-br-lg rounded-tr-lg leading-tight focus:outline-1 focus:shadow-outline"          
          type="file"
          // accept="image/*,.pdf"
          accept={name === "profilepic" ? "image/jpeg" : "application/pdf"}
          name={name}
          id={name}
          onChange={onChange}
        />
      ) : type === "textarea" ? (
        <textarea
        className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        id={name}
          name={name}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      ) : type == "date" ? ( 
        <input
          className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          type={type}
          name={name}
          value={value}
          // value={formatDateForInput(value)}
          onChange={onChange}
          
          max={max}
        />
      ) : (
        <input
          className={`appearance-none border rounded-lg w-full p-3 py-[9.5px] leading-tight focus:outline-none focus:shadow-outline ${clsclass}`}
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          disabled={disabled}
          
        />
      )}
    </div>
  );
};

export default InputField;
