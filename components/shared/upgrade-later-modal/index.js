import { lambda } from "@/services/api";
import { Formik } from "formik";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";
import Success from "./success";

const registerInterestSchema = Yup.object().shape({
    name: Yup.string().required("Enter your name"),
    email: Yup.string().email("Enter a valid email address").required("Enter a valid email address"),
});

export default function UpgradeLaterModal({ onClose }) {
    const formRef = useRef();
    const [showSuccess, setSuccess] = useState(false);

    return (
        <div className="w-full h-full flex flex-col justify-between border-4 border-white bg-black dark:border-zinc-100 dark:bg-zinc-900 text-white p-4">
            <div className="w-full h-full flex flex-col justify-center space-y-4">
                <p className="text-4xl font-bold font-poppins">
                    This option is only available for paid users
                </p>
                <p className="text-slate-300">
                    You'll be given the option to upgrade after your first set of photos.
                </p>
            </div>
            
            <div className="w-full flex flex-row text-white">
                <button
                    className={`
                        w-full bg-white py-3 font-bold text-black border-4 border-white
                        focus:outline-none cursor-pointer hover:bg-black hover:text-white
                        dark:hover:bg-zinc-900 dark:hover:text-zinc-100
                    `}
                    type="button"
                    onClick={onClose}
                >
                    Continue
                </button>
            </div>
        </div>
    )
}