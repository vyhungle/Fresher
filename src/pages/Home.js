import React from "react";
import styled from "styled-components";
import FormPost from "../components/FormPost";
import Posts from "../components/Posts";

function Home() {
  return (
    <Container>
      <h2>Post</h2>
      <FormPost />
      <Posts />
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
`;
export default Home;
