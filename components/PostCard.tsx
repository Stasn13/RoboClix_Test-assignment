import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';

interface CardProps {
    body: string;
    id: number;
    title: string;
}

const CardWrapper = styled.div`
    /*height: 250px;*/
    width: 300px;
    cursor: pointer;
    box-shadow: 0 9px 12px -2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 20px 20px 35px;
    margin: 0 10px 30px;
    transition: 0.3s;
    &:hover {
        box-shadow: 0 9px 12px 8px rgba(0, 0, 0, 0.2);
        transform: scale(1.01);
    }
`;

const SubTitle = styled.div`
    font-size: 12px;
    font-weight: 100;
`;

const Title = styled.h1`
    height: 111px;
    overflow: hidden;
`;

const PostExcerpt = styled.div`
    height: 143px;
    overflow: hidden;
    border-top: 0.5px solid black;
    padding-top: 14px;
`;

const PostCard = (props: CardProps) => {
    const { title, body, id } = props;
    return (
        <Link href="/posts/[postId]" as={`posts/${id}`}>
            <CardWrapper>
                <SubTitle>post ID: #{id}</SubTitle>
                <Title>{title}</Title>
                <PostExcerpt dangerouslySetInnerHTML={{ __html: body }}/>
            </CardWrapper>
        </Link>
    );
};

export default PostCard;
