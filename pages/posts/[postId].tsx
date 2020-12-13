import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import {fetchById} from '../../Redux/actions/postById';
import Loader from '../../components/shared/Loader';
import TextField from '@material-ui/core/TextField';
import {sendComment} from '../../Redux/actions/sendComment';

const Wrapper = styled.div`
    margin: 55px auto 35px;
    padding: 0 10% 20%;
`;

const Title = styled.div`
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 40px;
`;

const Content = styled.div`
    font-size: 22px;
    border-bottom: 1px solid black;
    padding-bottom: 25px;
`;

const CommentsList = styled.div`
    padding: 4% 2%;
`;

const Comment = styled.div`
    margin-bottom: 3%;
`;

const CommentatorName = styled.span`
    font-weight: 700;
    margin-bottom: 1.5%;
    display: inline-block;
`;
const CommentBody = styled.div`
    border-radius: 6px;
    padding: 10px 15px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14),
        0px 1px 14px 0px rgba(0, 0, 0, 0.12);
`;

const Input = styled(TextField)`
    .MuiFormLabel-root.Mui-focused {
        color: black;
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: black;
    }
`;

const Submit = styled.button`
    border-radius: 6px;
    cursor: pointer;
    color: #fff;
    background: black;
    font-size: 16px;
    max-width: 240px;
    padding: 12px 37px;
    text-align: center;
    margin-left: auto;
    margin-top: 3%;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const PostOverview = (props) => {
    const router = useRouter();
    const {postId} = router.query;
    const dispatch = useDispatch();
    const {data: postedComment} = useSelector((state) => {
        return state.sendComment;
    });
    const {data: postById, loader} = useSelector((state) => {
        return state.postById;
    });
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        postId && dispatch(fetchById(postId));
    }, [postId, postedComment]);

    const sendCommentHandler = () => {
        dispatch(sendComment(postById.id, newComment));
    };

    if (loader) {
        return <Loader size={60}/>;
    }
    return (
        <Wrapper>
            <Title>{postById.title}</Title>
            <Content dangerouslySetInnerHTML={{ __html: postById.body }}/>
            <CommentsList>
                {!loader &&
                postById.comments &&
                postById.comments.length > 0 &&
                postById.comments.map((comment, index) => {
                    return (
                        <Comment key={index}>
                            <CommentatorName>{comment.id}</CommentatorName> says:
                            <CommentBody>{comment.body}</CommentBody>
                        </Comment>
                    );
                })}
            </CommentsList>
            <Input
                label="Type the comment..."
                multiline
                fullWidth={true}
                rows={6}
                onChange={(e) => setNewComment(e.target.value)}
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
                required
            />
            <Submit onClick={sendCommentHandler}>Send</Submit>
        </Wrapper>
    );
};

export default PostOverview;
