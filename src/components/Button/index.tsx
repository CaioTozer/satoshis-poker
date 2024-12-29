import { ReactNode } from "react";
import { ButtonStyles } from "./styles";

export default function Button({ children }: { children: ReactNode | string }) {
    return (
        <ButtonStyles>
            {children}
        </ButtonStyles>
    )
}