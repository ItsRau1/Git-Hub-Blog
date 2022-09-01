import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 0.5rem;
    margin: 0 0 5rem;

    input[type="text"]{ 
        top: -1.5rem;
        position: relative;
        padding: 0.75rem 1rem;
        flex: 1;
        border-radius: 6px;
        background: ${props=>props.theme["base-input"]};
        border: solid 1px ${props=>props.theme["base-border"]};
        color: ${props=>props.theme["base-label"]};
        line-height: 160%;
    }
    button {
        border: 0;
        top: -1.5rem;
        position: relative;
        line-height: 0%;
        border-radius: 6px;
        padding: 0.3rem;
        background: ${props=>props.theme["base-input"]};
        border: solid 1px ${props=>props.theme["base-border"]};
        color: ${props=>props.theme.white};
    }
`
