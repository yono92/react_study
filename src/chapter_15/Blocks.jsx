import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: I;
    justify-content: flex-start;
    background-color: aliceblue;
`;

const Block = styled.div`
    padding: ${(props) => props.padding};
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color: wheat;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const blockItems = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    },
    {
        label: "2",
        padding: "2rem",
        backgroundColor: "green",
    },
    {
        label: "3",
        padding: "3rem",
        backgroundColor: "blue",
    },
];

function Blocks(props) {
    return (
        <Wrapper>
            {blockItems.map((blockItem) => {
                return (
                    <Block
                        padding={blockItem.padding}
                        backgroundColor={blockItem.backgroundColor}
                    >
                        {blockItem.label}
                    </Block>
                );
            })}
        </Wrapper>
    );
}

export default Blocks;
