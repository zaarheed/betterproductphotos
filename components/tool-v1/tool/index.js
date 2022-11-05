import StepOne from "./step-one";
import StepTwo from "./step-two";
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
}