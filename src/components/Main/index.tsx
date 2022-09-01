import { MainContainer } from "./style";
import { Profile } from "../Profile";
import { useEffect } from "react";
import { SearchForm } from "./SearchForm";

export function Main() {
    useEffect(() => {
        
    }, []) 
    return (
        <MainContainer>
            <SearchForm />
            <Profile />
        </MainContainer>
    )
}