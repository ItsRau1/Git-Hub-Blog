import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    text-align: center;
    background: ${props=>props.theme["base-profile"]};
`