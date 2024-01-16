import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #bb93c6;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .image {
        margin-right: 5px;
    }

    input{
        border: 0;
        background: transparent;
        outline: none;
        color: #fff;
        font-size: 18px;
        flex: 1;
    }

    input::placeholder{
        color: #fff;
        font-size: 18px;
    }
`;