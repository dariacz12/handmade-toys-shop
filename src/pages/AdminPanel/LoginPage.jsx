import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Logotipe from "../../images/logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
const InputForm = styled.input`
  margin: 10px 0px;
  border-top: hidden;
  border-left: hidden;
  border-right: hidden;
  border-bottom: ridge;
  :focus {
    outline: none;
  }
`;
const InputButton = styled.input`
  margin: 20px 0px;
  padding: 10px;
  font-size: 16px;
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 50%;
  background-color: teal;
  color: white;
  border-color: teal;
  cursor: pointer;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: gray;
  padding-top: 5px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  font-size: 18px;
  color: gray;
  text-align: center;
  padding: 30px 60px;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 60px;
`;
const linkStyle = {
  maxWidth: "80%",
  maxHeight: "60px",
};
const Errors = styled.span`
  font-size: 14px;
  color: red;
`;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { setSignedIn, signedIn } = useContext(UserContext);

  useEffect(() => {
    signedIn && navigate("/admin/productlistpage");
  }, [signedIn, navigate]);

  const onSubmit = ({ email, password }) => {
    const logiAttempt = async () => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            const user = userCredential.user;
            user && setSignedIn(true);
          }
        );
      } catch (err) {
        console.log(err);
      }
    };
    logiAttempt();
  };

  return (
    <Container>
      <Logo>
        <Link to="/" style={linkStyle}>
          <Image src={Logotipe} />
        </Link>
      </Logo>
      <Wrapper>
        <Text>Welcome to Admin Panel</Text>
        <Form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label>
              Email:
              <InputForm
                type="email"
                name="email"
                {...register("email", { required: "Pole wymagane!" })}
              ></InputForm>
            </Label>
            <Errors>
              {errors.email && <span>{errors.email?.message}</span>}
            </Errors>
            <Label>
              Password:
              <InputForm
                type="password"
                name="password"
                {...register("password", { required: "Pole wymagane!" })}
              ></InputForm>
            </Label>
            <Errors>
              {errors.password && <span>{errors.password?.message}</span>}
            </Errors>
            <InputButton type="submit" value="Submit" />
          </form>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
