import React from 'react';
import styled from "styled-components";


export const Input = styled.input`
    all: 'unset';
    width: 200;
    display: 'inline-flex';
    align-items: 'center';
    justify-content: 'center';
    border-radius: 4;
    padding: '0 10px';
    height: 35;
    font-size: 15;
    line-height: 1;
    color: 'white';
    background-color: red;
    box-shadow: 0 0 0 1px yellow;
    &:focus { 
        box-shadow: 0 0 0 2px black
    }
`
    