import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IMAGEKIT_PUBLIC_KEY, IS_DEMO } from "@/constants/config";
import { lambda } from "@/services/api";
import { Spinner } from "@/components/shared/loading-spinner";
import { useTool } from "./tool-context";

export default function StepOne() {
    const [files, setFiles] = useState([]);
    const { setTool, nextStep } = useTool();
    const [loading, setLoading] = useState(false);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/*": [".jpeg", ".jpg", ".png", ".heic"]
        },
        onDrop: acceptedFiles => {
            setFiles([...acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })), ...files]);
            
            handleNextStep([...acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })), ...files]);
        }
    });

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const handleNextStep = async (files = []) => {
        if (IS_DEMO) {
            nextStep();
            return;
        }
        
        setLoading(true);
        const response = await lambda.get("/get-image-token").catch(error => console.log(error));
        const { signature, token, expire } = await response.json();

        const formData  = new FormData();

        formData.append("file", files[0]);
        formData.append("publicKey", IMAGEKIT_PUBLIC_KEY);
        formData.append("signature", signature);
        formData.append("token", token);
        formData.append("expire", expire);
        formData.append("fileName", "upload");
        formData.append("folder", "betterproductphotos");

        const uploadResponse = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
            method: "POST",
            body: formData
        });

        const { url } = await uploadResponse.json();

        setTool(tool => ({ ...tool, imgUrl: url }));

        nextStep();
    }

    return (
		<div className="w-full h-full flex flex-col">
            <div className="w-full h-full">
                <div
                    {...getRootProps({
                        className: `w-full h-full border-4 border-dashed border-black dark:border-zinc-300 rounded-lg
                                    flex flex-col p-4 justify-center items-center group relative py-32`
                    })}
                >
                    <input {...getInputProps()} />
                    <div className="text-xl font-medium text-black dark:text-zinc-300 flex flex-row space-x-2 items-center group-hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                            <path d="M12 12v9" />
                            <path d="m16 16-4-4-4 4" />
                        </svg>
                        <span className="hidden md:block">Drag and drop a photo here</span>
                        <span className="md:hidden">Press to upload</span>
                    </div>
                    <p className="hidden md:block">or press to upload</p>
                    {loading && (
                        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center bg-black text-white dark:bg-zinc-800 dark:text-zinc-200">
                            <div className="h-16 w-16">
                                <Spinner show={true} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
	);
}

