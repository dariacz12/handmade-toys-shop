import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { db } from "../../firebase";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Container = styled.div`
  display: flex;
`;
const ProductList = styled.div``;
const ProductName = styled.div``;

const ProductAdding = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const [imagesUpload, setImagesUpload] = useState(null);
  const [imagesRef, setImagesRef] = useState(null);

  const onSubmit = (newData) => addData(newData, imagesRef);

  const addData = async (
    { displayName, description, price, categoryId },
    imagesRef
  ) => {
    console.log(1, imagesRef);
    try {
      const docRef = await addDoc(collection(db, "products"), {
        displayName,
        description,
        price,
        imagesRef,
        categoryId,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.log(err);
    }
  };

  const uploadImages = async () => {
    if (imagesUpload == null) return;
    const imageArray = imagesUpload.map((image) => ({
      ref: ref(storage, image.name),
      image: image,
    }));
    const result = await Promise.all(
      imageArray.map(({ ref, image }) => uploadBytes(ref, image))
    );
    const result2 = await Promise.all(
      result.map(({ ref }) => {
        return getDownloadURL(ref);
      })
    );
    setImagesRef(result2);
  };

  console.log(imagesRef);

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "categories"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setCategoryData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("displayName")} />
        <input {...register("description")} />
        <label>Choose pictures:</label>
        <input
          type="file"
          multiple
          onChange={(event) => {
            setImagesUpload(Array.from(event.target.files));
          }}
        ></input>
        <button onClick={uploadImages} type="button">
          {" "}
          Send images
        </button>
        <input {...register("price")} />
        <select {...register("categoryId")}>
          {categoryData.map(({ categoryName, id }) => (
            <option value={id} key={categoryName}>
              {categoryName}
            </option>
          ))}
          ;
        </select>
        <input type="submit" />
      </form>
      <ProductList>
        {data.map(({ id, displayName }) => (
          <ProductName key={id}>{displayName}</ProductName>
        ))}
      </ProductList>
    </Container>
  );
};

export default ProductAdding;