import StepOne from "./step-one";
import StepThree from "./step-three";
import StepTwo from "./step-two";
import StepZero from "./step-zero";
import { ToolProvider, useTool } from "./tool-context";

export default function Tool(props) {
    return (
        <ToolProvider>
            <Form {...props} />
        </ToolProvider>
    );
}

function Form(props) {    
    const { step } = useTool();
    
    if (step === 1) {
        return <StepOne {...props} />;
    }

    if (step === 2) {
        return <StepTwo {...props} />;
    }

    if (step === 3) {
        return <StepThree {...props} />;
    }
}