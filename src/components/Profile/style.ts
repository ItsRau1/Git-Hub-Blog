import styled from "styled-components"


export const ProfileContainer = styled.div`
    padding: 1rem 1.5rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    background: ${props=>props.theme["base-profile"]};
    border-radius: 10px;
    margin: 2rem 0;

`
export const ProfileImage = styled.section`
    width: 6rem;
    height: 6rem;


    img {
        height: 100%;
        border-radius: 8px;
    }
`

export const ProfileContent = styled.section`
    padding: 0.5rem 0 0;
    flex: 1;

    p{
        color: ${props=>props.theme["base-text"]};
        padding: 0.5rem 0 1.5rem;
    }

    span {
        color: ${props=>props.theme["base-subtitle"]};
    }
`

export const HeaderProfile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;

    h2 {
        color: ${props=>props.theme["base-title"]};
    }

    a {
        text-decoration: none;
        color: ${props=>props.theme.blue};
        display: flex;
        align-items: center;
        line-height: 0;
        gap: 0.5rem;
        font-size: 0.75rem;
        border: 1px solid transparent;
        transition: border 0.4s;
    }

    a:hover {
        border-bottom: 1px solid ${props=>props.theme.blue};
    }
`

export const ProfileImageToSearch = styled.section`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    top: -4rem;
    position: relative;
    display: block;
    
    img {
        height: 100%;
        border-radius: 50%;
    }
`
export const ProfileContentToSearch = styled.div`
   display: flex;
   flex-direction: column;
`

export const HeaderProfileToSearch = styled.section`
    display: flex;
    flex-direction: column;
    color: ${props=>props.theme.white};
    top: -3.5rem;
    position: relative;

    p {
        color: ${props=>props.theme["base-border"]}
    }
`
export const MainInfoToSearch = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${props=>props.theme.white};
    position: relative;
    top: -2rem;

    span {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }
`

export const StatsToSearch = styled.section`
    display: flex;
    gap: 0.7rem;

    span {
        display: flex;
        color: ${props=>props.theme["base-label"]};
        align-items: center;
        gap: 0.3rem;
    }
`

export const ProfileContainerToSearch = styled.div`
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: ${props=>props.theme["base-profile"]};
    border-radius: 10px;
    margin: 2rem 0;

`

export const ToRedirect = styled.div`
    display: flex;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: ${props=>props.theme.blue};
        display: flex;
        align-items: center;
        line-height: 0;
        gap: 0.5rem;
        font-size: 0.75rem;
        border: 1px solid transparent;
        transition: border 0.4s;
        height: fit-content;
        margin: 0.5rem 0 0;
    }

    a:hover {
        border-bottom: 1px solid ${props=>props.theme.blue};
    }
`