import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch } from '../Redux/actions/posts';
import styled from 'styled-components';
import PostCard from './PostCard';
import Loader from './shared/Loader';

type Post = {
    id: string;
    title: string;
    body: string;
    comments?: string;
};

const Wrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 10%;
`;

const Title = styled.div`
    margin: 50px auto;
    font-weight: 700;
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
    user-select: none;
    cursor: default;
    width: 100%;
`;

const FeedPosts = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetch());
    }, []);
    const { data: posts, loader } = useSelector((state) => {
        return { ...state.posts };
    });

    if (loader) {
        return <Loader size={60} />;
    }
    return (
        <>
            <Title>Simple Web Forum like blog App</Title>
            <Wrapper>
                {!loader &&
                    posts &&
                    posts.map((post, index) => {
                        return <PostCard key={index} {...post} />;
                    })}
                {posts.length === 0 && <h2>There is no posts, you can add one by clicking button at the top</h2>}
            </Wrapper>
        </>
    );
};

export default FeedPosts;
