import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { categories } from "../consts/data";
import { devices } from "../consts/deviceSizes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const FilterContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-bottom: 40px;
  @media ${devices.mobileL} {
    margin-bottom: 10px;
  } ;
`;
const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1;
  max-width: 1900px;
  margin: 0px 65px;

  @media ${devices.laptopL} {
    margin: 0px 50px;
  }
  @media ${devices.laptopXL} {
    margin: 0px;
  }
`;
const Filter = styled.div`
  margin: 10px 0;

  @media ${devices.mobileL} {
    margin: 20px 0;
  } ;
`;

const FilterText = styled.span`
  font-size: 14px;
  margin-right: 20px;
  color: gray;
  @media ${devices.laptopL} {
    font-size: 16px;
    font-weight: 600;
  } ;
`;
const Select = styled.select`
  padding: 5px;
  color: gray;
  width: 150px;
  @media ${devices.laptopL} {
    padding: 10px;
  } ;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <FilterContainer>
        <Filters>
          <Filter>
            <FilterText>Wybierz Kategorię:</FilterText>
            <Select>
              <Option key={0}>All</Option>
              {categories.map((item) => (
                <Option value={item.id} key={item.id}>
                  {item.title}
                </Option>
              ))}
              ;
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sortuj Produkty:</FilterText>
            <Select>
              <Option disabled>Najnowsze</Option>
              <Option>Cena rosnąco</Option>
              <Option>Cena malejąco</Option>
            </Select>
          </Filter>
        </Filters>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
