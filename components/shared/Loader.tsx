import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

interface LoaderProps {
    size?: number;
}
const LoaderWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .MuiCircularProgress-root {
        color: black;
    }
`;

const Loader = (props: LoaderProps): React.ReactElement => {
    return (
        <LoaderWrap>
            <CircularProgress size={props.size} />
        </LoaderWrap>
    );
};

export default Loader;
