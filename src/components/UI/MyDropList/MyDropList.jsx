import React from "react";

const MyDropList = ({ defaultValue, data, onChange }) => {
  return (
    <select id="select_streer" onChange={(event) => onChange(event.target.value)}>
      <option value={defaultValue}>{defaultValue}</option>
      {data.map((temp) => (
        <option key={temp} value={temp}>
          {temp}
        </option>
      ))}
    </select>
  );
};

export { MyDropList };
