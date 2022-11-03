import React from "react";
import ContactData from "../components/ContactData";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { devices } from "../consts/deviceSizes";
import { useForm } from "react-hook-form";

const Container = styled.div``;
const Wrapper = styled.div`
  max-width: 1000px;
  min-height: 650px;
  margin: 0px 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${devices.laptop} {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }
`;
const Title1 = styled.h1`
  width: 100%;
  color: #1a1a1a;
  text-align: center;
  margin-left: 20px;
  @media ${devices.laptop} {
    margin-bottom: 40px;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${devices.laptop} {
    flex-direction: row;
  }
`;
const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: ridge;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: none;
  @media ${devices.laptop} {
    margin: 10px;
    padding: 20px;
  }
`;
const UserData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Input1 = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  border-color: gray;
  border-width: 1px;
`;
const Input2 = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  border-color: gray;
  border-width: 1px;
`;
const TextField = styled.textarea`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  height: 250px;
  border-color: gray;
  border-width: 1px;
`;
const Input3 = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  background-color: transparent;
  color: gray;
  border-color: gray;
  border-width: 1px;
  cursor: pointer;
  background-color: teal;
  color: white;
  border: none;
`;
const Title2 = styled.h2`
  padding-top: 50px;
  margin-left: 10px;
  color: teal;
  @media ${devices.laptop} {
    margin-left: 40px;
  }
`;
const InfoContainer = styled.div`
  color: #1a1a1a;
  padding: 10px;
  margin: 20px 10px 30px 10px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  padding-left: 40px;
  @media ${devices.laptop} {
    justify-content: center;
    margin: 10px 10px 0px 10px;
  }
`;
const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title1>Masz pytania? Chętnie na nie odpowiem!</Title1>
        <ContentContainer>
          <FormContainer>
            <Title2>NAPISZ WIADOMOŚĆ</Title2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <UserData>
                <Input1 {...register("name")} placeholder="Imię" />
                <Input2
                  {...register("email", { required: true, maxLength: 20 })}
                  placeholder="Email"
                />
                {errors.email?.type === "required" && (
                  <p role="alert">Email is required</p>
                )}
              </UserData>
              <TextField
                {...register("message")}
                placeholder="Treść zapytania"
              ></TextField>
              <Input3 type="submit" />
            </Form>
          </FormContainer>
          <InfoContainer>
            <ContactData
              styleText={{
                fontSize: "20px",
                color: "#1a1a1a",
                textShadow: "none",
              }}
              styleTitle={{
                textShadow: "none",
                color: "teal",
                fontSize: "24px",
                fontWeight: "bold",
              }}
              styleIcon={{ marginRight: "20px" }}
            />
          </InfoContainer>
        </ContentContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ContactPage;
