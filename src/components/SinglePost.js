import React from "react";
import styled from "styled-components";
import userImage from "../assets/images/user.png";
import { useMutation } from "react-query";
import { deletePost } from "../api/PostApi";

function SinglePost({ data }) {
  const { mutateAsync, isLoading } = useMutation(deletePost);
  return data.map((post) => (
    <Container key={post.id}>
      <Avatar src={userImage} />
      <Body>{post.body}</Body>
      <ButtonDelete onClick={() => mutateAsync(post.id)}>
        {isLoading ? "loading..." : "Delete Post"}
      </ButtonDelete>
    </Container>
  ));
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;
  min-height: 100px;
  border-bottom: solid black 1px;
  padding-left: 15px;
  padding-right: 15px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
  border: solid 0.1px black;
`;
const Body = styled.p`
  margin-right: 110px;
`;
const ButtonDelete = styled.button`
  position: absolute;
  right: 15px;
`;
export default SinglePost;
