import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getPosts } from "../api/PostApi";
import SinglePost from "./SinglePost";

function Posts() {
  const [page, setPage] = React.useState(20);
  const { data, status } = useQuery(["posts", page], () => getPosts(page), {
    keepPreviousData: true,
    refetchInterval: 500,
  });

  return (
    <Container>
      {status === "loading" && <p>loading</p>}
      {status === "success" && <SinglePost data={data} />}
      <BoxButton>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 0}
        >
          Previous Page
        </button>
        <span>{page}</span>
        <button
          onClick={() => {
            setPage((old) => old + 1);
          }}
        >
          Next Page
        </button>
      </BoxButton>
    </Container>
  );
}

const Container = styled.div`
  border-top: solid 1px black;
`;
const BoxButton = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export default Posts;
