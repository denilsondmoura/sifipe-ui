import React from 'react';
import styled from "styled-components";
import {
    violet, blackA
  } from '@radix-ui/colors';

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
    background-color: ${violet.violet5};
    box-shadow: 0 0 0 1px ${violet.violet9};
    &:focus { 
        box-shadow: 0 0 0 2px black
    }
`
    