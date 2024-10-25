import { gql } from "urql";

export const CREATE_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost (input: {title: $title, body: $body}){
      id
      title
      body
    }
  }
`;

export const DELETE_POST = gql`
    mutation deletePost($id: ID!) {
        deletePost(id: $id){
        id
        }
    }
    `;  

    




