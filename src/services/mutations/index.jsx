import gql from 'graphql-tag'

export const authenticateUser = gql`
  mutation AuthenticateUser ($email: String!, $password: String!) { 
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`;

export const signupUser = gql`
  mutation SignupUser ($email: String!, $password: String!, $name: String) {
    signupUser(email: $email, password: $password, name: $name) {
      id
      token
    }
  }
`;

export const updateUser = gql`
  mutation UpdateUser ($id: ID!, $name: String, $theme: String) {
    updateUser(id: $id, name: $name, theme: $theme) {
      id
      name
      email
      theme
    }
  }
`;

export const createPost = gql`
  mutation CreatePost ($content: String!, $authorId: ID!) {
    createPost(content: $content, authorId: $authorId) {
      id
      content
    }
  }
`;

export const updatePost = gql`
  mutation UpdatePost ($id: ID!, $content: String!, $authorId: ID!) {
    updatePost(id: $id, content: $content, authorId: $authorId) {
      id
      content
    }
  }
`;

export const likePost = gql`
  mutation CreatePostLike ($postId: ID!, $authorId: ID!) {
    createPostLike(postId: $postId, authorId: $authorId) {
      id
      author {
        id
        name
      }
    }
  }
`;


export const dislikePost = gql`
  mutation DeletePostLike ($id: ID!) {
    deletePostLike(id: $id) {
      id
    }
  }
`;


export const deletePost = gql`
  mutation DeletePost ($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

export const createComment = gql`
  mutation CreateComment ($postId: ID!, $authorId: ID!, $content: String!) {
    createComment(postId: $postId, authorId: $authorId, content: $content) {
      id
      content
      author {
        id
        name
      }
      likes {
        id
        author {
          id
          name
        }
      }
    }
  }
`;

export const deleteComment = gql`
  mutation DeleteComment ($id: ID!) {
    deleteComment(id: $id) {
      id
    }
  }
`;

export const likeComment = gql`
  mutation CreateCommentLike ($commentId: ID!, $authorId: ID!) {
    createCommentLike(commentId: $commentId, authorId: $authorId) {
      id
      author {
        id
        name
      }
    }
  }
`;


export const dislikeComment = gql`
  mutation DeleteCommentLike ($id: ID!) {
    deleteCommentLike(id: $id) {
      id
    }
  }
`;
