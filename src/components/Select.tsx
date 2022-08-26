import React from 'react';
import styled from 'styled-components';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';


const StyledTrigger = styled(SelectPrimitive.SelectTrigger)`
    all: 'unset';
    display: 'inline-flex';
    align-items: 'center';
    justify-content: 'center';
    border-radius: 4;
    padding: '0 15px';
    font-size: 13;
    line-height: 1;
    height: 35;
    gap: 5;
    background-color: 'white';
    color: ${violet.violet11};
    box-shadow: 0 2px 10px ${blackA.blackA7};
    &:hover { background-color: ${mauve.mauve3};  };
    &:focus { box-shadow: 0 0 0 2px black; };
    &[data-placeholder] { color: ${violet.violet9} };
`;

const StyledIcon = styled(SelectPrimitive.SelectIcon)`
  color: ${violet.violet11};
`;

const StyledContent = styled(SelectPrimitive.Content)`
    overflow: 'hidden';
    background-color: 'white';
    border-radius: 6;
    box-shadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
`
  


const StyledViewport = styled(SelectPrimitive.Viewport)`
    padding: 5
`


const StyledItem = styled(SelectPrimitive.Item)`
    all: 'unset';
    font-size: 13;
    line-height: 1;
    color: ${violet.violet11};
    border-radius: 3;
    display: 'flex';
    align-items: 'center';
    height: 25;
    padding: '0 35px 0 25px';
    position: 'relative';
    user-select: 'none';

    &[data-disabled] {
        color: ${mauve.mauve8};
        pointer-events: 'none';
    };

    &[data-highlighted] {
        background-color: ${violet.violet9};
        color: ${violet.violet1};
    }
`
  

const StyledLabel = styled(SelectPrimitive.Label)`
    padding: '0 25px';
    font-size: 12;
    line-height: '25px';
    color: ${mauve.mauve11};
`

const StyledSeparator = styled(SelectPrimitive.Separator)`
    height: 1;
    background-color: ${violet.violet6};
    margin: 5;
`

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator)`
    position: 'absolute';
    left: 0;
    width: 25;
    display: 'inline-flex';
    align-items: 'center';
    justify-content: 'center';
`

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
    display: 'flex';
    align-items: 'center';
    justify-content: 'center';
    height: 25;
    background-color: 'white';
    color: ${violet.violet11};
    cursor: 'default;
`

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
    display: 'flex';
    align-items: 'center';
    justify-content: 'center';
    height: 25;
    background-color: 'white';
    color: ${violet.violet11};
    cursor: 'default;
`

function Content({ children, ...props }){
    return (
        <SelectPrimitive.Portal>
        <StyledContent {...props}>{children}</StyledContent>
        </SelectPrimitive.Portal>
    );
}

export const SelectDemo = () => (
  <div>
    <Select>
      <SelectTrigger aria-label="Food">
        <SelectValue placeholder="Select a fruit…" />
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">
              <SelectItemText>Apple</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="banana">
              <SelectItemText>Banana</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="blueberry">
              <SelectItemText>Blueberry</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="grapes">
              <SelectItemText>Grapes</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="pineapple">
              <SelectItemText>Pineapple</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="aubergine">
              <SelectItemText>Aubergine</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="broccoli">
              <SelectItemText>Broccoli</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="carrot" disabled>
              <SelectItemText>Carrot</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="courgette">
              <SelectItemText>Courgette</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="leek">
              <SelectItemText>leek</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
          </SelectGroup>

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Meat</SelectLabel>
            <SelectItem value="beef">
              <SelectItemText>Beef</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="chicken">
              <SelectItemText>Chicken</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="lamb">
              <SelectItemText>Lamb</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="pork">
              <SelectItemText>Pork</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </Select>
  </div>
);

export default SelectDemo;


// Exports
export const Select = SelectPrimitive.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = StyledIcon;
export const SelectContent = Content;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;