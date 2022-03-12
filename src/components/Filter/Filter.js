import React from "react";

import { FilterContainer, FilterText, Select, Options } from "./style";

const Filter = ({
  handleFilterChange,
  filter,
  text,
  name,
  isSelectedDisabled,
  defaultOption,
  options,
}) => {
  return (
    <FilterContainer>
      <FilterText>{text ? `${text}:` : ""}</FilterText>
      <Select
        name={name}
        onChange={handleFilterChange}
      >
        <Options disabled={isSelectedDisabled} selected={!filter}>
          {defaultOption.toUpperCase()}
        </Options>
        {options.map((item) => (
          <Options selected={filter === item}>{item.toUpperCase()}</Options>
        ))}
      </Select>
    </FilterContainer>
  );
};

export default Filter;
