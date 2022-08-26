import React from "react"
import { Input } from "../components/StyledComponents"
import { Label } from "../components/StyledPrimitives"

export const Despesa = function () {

    return (
        <div>
            <Label htmlFor="firstName">
                First name
            </Label>
            <Input type="text" id="firstName" defaultValue="Pedro Duarte" />
        </div>
    )
}