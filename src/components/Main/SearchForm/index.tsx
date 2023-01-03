import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";
import { SubmitHandler, useForm } from 'react-hook-form'
import { useContext } from "react";
import { TransactionsContext } from "../../../contexts/Context";

interface DataType {
    data: {
        toSearch: string
    }
}

export function SearchForm () {

    const { fetchTransactions } = useContext(TransactionsContext)

    const { register, handleSubmit, reset } = useForm();
    const onSubmit:SubmitHandler<any> = (data) => { 
        fetchTransactions(data)
        reset()
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(onSubmit)} >
            <input {...register('toSearch')}type="text" placeholder="Pesquisar" />
            <button type="submit">
                <MagnifyingGlass size={32} />
            </button>
        </SearchFormContainer>
    )
}