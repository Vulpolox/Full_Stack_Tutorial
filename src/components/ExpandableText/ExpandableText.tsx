import { ReactNode } from "react";
import { useState } from "react";
import Button from "../Button";

interface Props {
    maxChars: number
    text: string
}


const ExpandableText = ({ maxChars, text }: Props) => {

    // handle button clicks
    const handleClick = () => {
        var newState: boolean = !isCollapsed;
        toggleCollapsed(newState);
        setText(manipulateText(text, maxChars, newState));
    }

    // text manuipulation function
    // signature: (string) -> string
    const manipulateText = (originalText: string, maxChars: number, isCollapsed: boolean) => {

        if (isCollapsed && originalText.length <= maxChars) { return originalText; }
        else if (isCollapsed && originalText.length > maxChars) { return originalText.slice(0, maxChars) + "..."; }
        else { return originalText; }

    }

    // state variables
    const [isCollapsed, toggleCollapsed] = useState(true);
    const [currentText, setText] = useState(manipulateText(text, maxChars, isCollapsed))

    return (
        <>
        <p>{currentText}</p>
        <Button onClick={handleClick}>
            {isCollapsed ? "More" : "Less"}
        </Button>
        </>
    );
}

export default ExpandableText;