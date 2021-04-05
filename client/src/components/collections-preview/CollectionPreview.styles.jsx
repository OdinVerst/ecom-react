import styled from "styled-components";

export const CollectionPreviewWrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CollectionPreviewTitleStyle = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const CollectionPreviewStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-gap: 10px;
`;