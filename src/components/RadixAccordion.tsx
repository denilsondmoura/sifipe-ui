import React, { Children, useEffect, useState } from "react";
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface PropsType {
    children: JSX.Element
}

const RadixAccordion = function(props: PropsType) {
    const [accordeonState, setAccordeonState] = useState<String>("closed")

    useEffect(() => {

    }, [accordeonState])

    function handleAccordeonState() {
        setAccordeonState(accordeonState=="open" ? "closed" : "open")
    }

    return (
        <Accordion.Root type="single" defaultValue="item-1" >
            <Accordion.Item value="item-1">
                <Accordion.Header >
                    <Accordion.Trigger onClick={() => handleAccordeonState()} data-state={accordeonState} 
                        className="bg-[#31AFB4] data-state-open:rounded-t-md data-state-closed:rounded-md text-white font-bold 
                        leading-5 focus:border-white w-full p-3 flex flex-row justify-between">
                        <span>ADICIONAR UM GASTO</span>
                        <ChevronDownIcon aria-hidden 
                            data-state={accordeonState} 
                            className="data-state-open:rotate-180 duration-300 data-state-open:animat"/>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content 
                    data-state={accordeonState}
                    className="bg-[#f5f5f5]  duration-300 
                                data-state-closed:h-0 data-state-closed:rounded-md data-state-closed:overflow-hidden data-state-closed:p-0 
                                data-state-open:p-3 data-state-open:rounded-md"
                >
                    {accordeonState=="open" && props.children}
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    )
}

export default RadixAccordion