import React, { ChangeEventHandler } from "react";
import { ServiceStyled } from "./Service.styled";
import services from "./services";

interface ServiceProps {
  handleChange: ChangeEventHandler<HTMLSelectElement> | undefined;
}

const Service: React.FC<ServiceProps> = ({ handleChange }) => {
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
