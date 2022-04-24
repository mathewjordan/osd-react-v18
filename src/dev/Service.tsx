import React from "react";
import { ServiceStyled } from "./Service.styled";
import services from "./services";

interface ServiceProps {
  handleChange: () => {};
}

const Service: React.FC = ({ handleChange }) => {
  return (
    <ServiceStyled onChange={handleChange}>
      {services.map((service, index) => (
        <option value={index} key={service.label}>
          {service.label}
        </option>
      ))}
    </ServiceStyled>
  );
};

export default Service;
