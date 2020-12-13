import React from 'react';
import styled from 'styled-components';
import AddPost from '../../components/AddPost';

const Wrapper = styled.div`
    margin: 55px auto 35px;
`;

const Title = styled.div`
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 15px;
`;

const NewPost = (props) => {
    return (
        <Wrapper>
            <Title>Add new post page</Title>
            <AddPost />
        </Wrapper>
    );
};

export default NewPost;
