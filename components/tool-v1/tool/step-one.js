import { useTool } from "./tool-context"

export default function StepOne() {
    const { tool, setTool, nextStep } = useTool();

    return (
		<div className="w-full max-w-4xl mx-auto flex flex-col">
            <div className="w-96 mx-auto h-1 bg-zinc-300" />

            <div className="my-4 w-full">
                <p className="text-2xl font-bold">
                    Step 1: Dump your JSON export
                </p>
            </div>

            <div className="w-full">
                <textarea
                    className="bg-zinc-800 p-4 w-full rounded-lg border-none appearance-none focus:outline-none"
                    rows={20}
                    value={tool.inputJson}
                    onChange={({ target }) => setTool(tool => ({ ...tool, inputJson: target.value }))}
                />
            </div>

            <div className="my-4 w-full flex flex-row justify-between">
                <button
                    className={`
                        bg-zinc-100 text-lg font-medium text-zinc-900 py-4 px-8
                    `}
                    type="button"
                    onClick={nextStep}
                >
                    Next Step
                </button>
            </div>
        </div>
	)
}