import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Products from "../Products/Products";
import Filter from "../Filter/Filter";
import { filterData } from "./filterData";
import { fetchProducts } from "../../api/product";

import { CancelOutlined } from "@mui/icons-material";
import {
  Container,
  Title,
  FilterContainer,
  Wrapper,
  Button,
  LeftFilterContainer,
} from "./style";

const ProductList = () => {
  const [filter, setFilter] = useState({
    category: null,
    size: null,
    sort: "newest",
  });

  const [products, setProducts] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      let query = "";

      if (filter.sort === "price (ascending)")
        query = query.concat("price=asc&");
      else if (filter.sort === "price (dscending)")
        query = query.concat("price=desc&");

      if (filter.category)
        query = query.concat(
          `category=${filterData[0].queryValue[filter.category]}&`
        );

      if (filter.size) query = query.concat(`size=${filter.size}`);

      const { data } = await fetchProducts(query);
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value.toLowerCase();

    const data = { ...filter, [event.target.name]: selectedValue };

    if (event.target.name === "category") {
      setFilter({ ...filter, size: null });
      navigate(`/products?category=${data.category}&sort=${data.sort}`);
    } else
      navigate(
        `/products?category=${data.category}&size=${data.size}&sort=${data.sort}`
      );
  };

  useEffect(() => {
    const queryString = location.search.slice(1);
    const queryArray = queryString.split("&");

    const newFilter = filter;

    queryArray.forEach((element) => {
      try {
        const search = element.split("=");
        const query = search[0].toLowerCase();
        const queryValue = search[1].toLowerCase();

        switch (query) {
          case "category": {
            const value = filterData[0].optionsMap[queryValue];
            if (value) newFilter.category = value;
            break;
          }
          case "size": {
            const value =
              filterData[1].optionsMap[newFilter.category][queryValue];
            if (value) newFilter.size = value;
            break;
          }
          case "sort": {
            const value =
              queryValue === "newest"
                ? "newest"
                : filterData[2].optionsMap[queryValue];
            if (value) newFilter.sort = value;
            break;
          }
          default:
            break;
        }
      } catch (err) {
        console.log("Error: ", err);
      }
    });

    setFilter((prevState) => ({ ...prevState, newFilter }));
    getProducts();

    window.scroll(0, 0); //Scroll to Top
  }, [location]);

  return (
    <Container>
      <Title>All Products</Title>
      <FilterContainer>
        <Wrapper>
          <Filter
            handleFilterChange={handleFilterChange}
            filter={filter.category}
            text={filterData[0].text}
            name={filterData[0].name}
            isSelectedDisabled={filterData[0].isSelectedDisabled}
            defaultOption={filterData[0].default}
            options={filterData[0].optionsArr}
          />
          <Filter
            handleFilterChange={handleFilterChange}
            filter={filter.size}
            text={filterData[1].text}
            name={filterData[1].name}
            isSelectedDisabled={filterData[1].isSelectedDisabled}
            defaultOption={filterData[1].default}
            options={
              filter.category ? filterData[1].optionsArr[filter.category] : []
            }
          />
        </Wrapper>
        <LeftFilterContainer>
          <Filter
            handleFilterChange={handleFilterChange}
            filter={filter.sort}
            text={filterData[2].text}
            name={filterData[2].name}
            isSelectedDisabled={filterData[2].isSelectedDisabled}
            defaultOption={filterData[2].default}
            options={filterData[2].optionsArr}
          />

          <Button
            onClick={() => {
              setFilter({
                ...filter,
                category: null,
                sort: "newest",
                size: null,
              });
              navigate(`/products`);
            }}
          >
            <CancelOutlined />
          </Button>
        </LeftFilterContainer>
      </FilterContainer>
      <Products products={products} />
    </Container>
  );
};

export default ProductList;
