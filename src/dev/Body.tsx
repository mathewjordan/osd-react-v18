import React, { ChangeEventHandler } from "react";
import { BodyStyled } from "./Body.styled";
import bodies from "./bodies";

interface BodyProps {
  handleChange: ChangeEventHandler<HTMLSelectElement> | undefined;
}

const Body: React.FC<BodyProps> = ({ handleChange }) => {
  return (
    <BodyStyled onChange={handleChange}>
      {bodies.map((body, index) => (
        <option value={index} key={body.label}>
          {body.label}
        </option>
      ))}
    </BodyStyled>
  );
};

export default Body;
