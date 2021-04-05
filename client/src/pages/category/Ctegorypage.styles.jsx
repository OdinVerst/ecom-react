import styled from "styled-components";

export const CollectionPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CollectionTitleWrapper = styled.h1`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CollectionItemsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: 10px;

    & > * {
        margin-bottom: 30px;
    }
`;