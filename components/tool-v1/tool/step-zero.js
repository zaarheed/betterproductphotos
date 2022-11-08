import ImageKit from 'imagekit';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import config from '@/constants/config';
import { lambda } from '@/services/api';

const { imagekitPublicKey, imagekitUrlEndpoint } = config;

export default function StepZero() {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            console.log("accepted", acceptedFiles);
            setFiles([...acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })), ...files]);
        }
    });

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const handleNextStep = async () => {
        const response = await lambda.get("/get-image-token").catch(error => console.log(error));
        const { signature, token, expire } = await response.json();

        const formData  = new FormData();

        formData.append("file", files[0]);
        formData.append("publicKey", imagekitPublicKey);
        formData.append("signature", signature);
        formData.append("token", token);
        formData.append("expire", expire);
        formData.append("fileName", "upload");

        const uploadResponse = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
            method: "POST",
            body: formData
        });
    }

    return (
		<div className="w-full max-w-4xl mx-auto flex flex-col">
            <div className="w-96 mx-auto h-1 bg-zinc-300" />

            <div className="my-4 w-full">
                <p className="text-2xl font-bold">
                    Step 1: Upload your images
                </p>
            </div>

            <div className="w-full">
                <div
                    {...getRootProps({
                        className: `w-full border-4 border-dashed border-zinc-300 rounded-lg h-96
                                    flex flex-col p-4 justify-center items-center group relative`
                    })}
                >
                    <input {...getInputProps()} />
                    <div className="text-xl font-medium text-zinc-300 flex flex-row space-x-2 items-center group-hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                            <path d="M12 12v9" />
                            <path d="m16 16-4-4-4 4" />
                        </svg>
                        <span className="">Drag and drop files here</span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full flex flex-row space-x-4 p-4 overflow-x-scroll">
                        {files.map(file => (
                            <figure key={file.preview} className="h-20 w-20 overflow-hidden rounded-lg shrink-0">
                                <img src={file.preview} className="object-cover w-full h-full" />
                            </figure>
                        ))}
                    </div>
                </div>
            </div>

            <div className="my-4 w-full flex flex-row justify-between">
                <button
                    className={`
                        bg-zinc-100 text-lg font-medium text-zinc-900 py-4 px-8
                    `}
                    type="button"
                    onClick={handleNextStep}
                >
                    Next Step
                </button>
            </div>
        </div>
	);
}