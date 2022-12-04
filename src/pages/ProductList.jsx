import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { devices } from "../consts/deviceSizes";
import { db } from "../firebase";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const FilterContainer = styled.div`
  display: flex;
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

const ContainerProduct = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  padding-top: 20px;
  color: teal;
  text-transform: uppercase;
  @media ${devices.mobileL} {
    font-size: 25px;
  } ;
`;
const Items = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1920px;

  @media ${devices.tabletXL} {
    justify-content: space-around;
  }
  @media ${devices.laptopL} {
    justify-content: space-between;
  } ;
`;

const priceDescending = "price descending";
const priceAscending = "price ascending";
const newest = "newest";

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "categories"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    return () => {
      setData([]);
    };
  }, []);
  const { id } = useParams();
  const [categorySeletcData, setCategorySelectData] = useState(id);
  const navigate = useNavigate();

  useEffect(() => {
    categorySeletcData !== "all"
      ? categorySeletcData && navigate(`/productlist/${categorySeletcData}`)
      : navigate("/productlist");
  }, [categorySeletcData, navigate]);

  const [productsData, setProductsData] = useState([]);

  const fetchData = async () => {
    let list = [];
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        id
          ? doc.data().categoryId === id &&
            list.push({ id: doc.id, ...doc.data() })
          : list.push({ id: doc.id, ...doc.data() });
      });

      setProductsData(list);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const [sortSelectData, setSortSelectData] = useState();

  useEffect(() => {
    if (sortSelectData === priceAscending) {
      setProductsData(
        [...productsData].sort(
          ({ price: a }, { price: b }) => Number(a) - Number(b)
        )
      );
    } else if (sortSelectData === priceDescending) {
      setProductsData(
        [...productsData].sort(
          ({ price: a }, { price: b }) => Number(b) - Number(a)
        )
      );
    } else if (sortSelectData === newest) {
      fetchData();
    }
  }, [sortSelectData]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <FilterContainer>
        <Filters>
          <Filter>
            <FilterText>Wybierz Kategorię:</FilterText>
            <Select
              onChange={(event) =>
                setCategorySelectData(String(event.target.value))
              }
            >
              <Option value={"all"} key={0}>
                All
              </Option>
              {data.map(({ categoryName, id }) => (
                <Option value={id} key={categoryName}>
                  {categoryName}
                </Option>
              ))}
              ;
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sortuj Produkty:</FilterText>
            <Select
              onChange={(event) =>
                setSortSelectData(String(event.target.value))
              }
            >
              <Option value={newest}>Najnowsze</Option>
              <Option value={priceAscending}>Cena rosnąco</Option>
              <Option value={priceDescending}>Cena malejąco</Option>
            </Select>
          </Filter>
        </Filters>
      </FilterContainer>
      <ContainerProduct>
        <Title>
          {data.find(({ id }) => id === categorySeletcData)?.categoryName}
        </Title>
        <Items>
          {productsData.map((item) => (
            <Link to={"/productpage/" + item.id} key={item.id}>
              <Product key={item.id} item={item} />
            </Link>
          ))}
        </Items>
      </ContainerProduct>
      <Footer />
    </Container>
  );
};

export default ProductList;
