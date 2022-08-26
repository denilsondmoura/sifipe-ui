import React from 'react';
import styled from "styled-components";
import * as LabelPrimitive from '@radix-ui/react-label';

export const Label = styled(LabelPrimitive.Root)`
    font-size: 15;
    font-weight: 500;
    line-height: 35px;
    margin-right: 15px;
    color: 'white';
    cursor: pointer;
`