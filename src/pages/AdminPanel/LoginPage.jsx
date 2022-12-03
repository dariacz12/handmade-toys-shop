import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Container = styled.div``;
const Input = styled.input``;
const Label = styled.label``;
const Wrapper = styled.div``;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    const logiAttempt = async () => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password).then(
          (userCredential) => {
            const user = userCredential.user;
            user && navigate("/admin/productlist");
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
      <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            Email:
            <Input
              type="email"
              name="email"
              {...register("email", { required: "Pole wymagane" })}
            ></Input>
          </Label>
          {errors.email && <span>{errors.email?.message}</span>}
          <Label>
            Password:
            <Input
              type="password"
              name="password"
              {...register("password", { required: "Pole wymagane" })}
            ></Input>
          </Label>
          {errors.password && <span>{errors.password?.message}</span>}
          <Input type="submit" value="Submit" />
        </form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
