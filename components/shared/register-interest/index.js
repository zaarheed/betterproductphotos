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

export default function RegisterInterest({ onClose }) {
    const formRef = useRef();
    const [showSuccess, setSuccess] = useState(false);

    const { mutate: handleSubmit } = useMutation(
        async ({ email, name }, actions) => {
            await lambda.post("/register-interest", {
                email,
                name
            });
        },
        {
            onSuccess: () => {
                setSuccess(true);
            },
            onError: ({ response }) => {
                formRef.current.setErrors({ email: response.data.message })
            }
        }
    )
    
    if (showSuccess === true) {
        return <Success onClose={onClose} />
    }

    return (
        <Formik
            initialValues={{ email: "", name: "" }}
            onSubmit={handleSubmit}
            validationSchema={registerInterestSchema}
            innerRef={formRef}
        >
            {({ values, handleChange, handleBlur, handleSubmit, errors, isValid }) => (
                <form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-between border-4 border-white bg-black dark:border-zinc-100 dark:bg-zinc-900 text-white p-4">
                    <div className="w-full h-full flex flex-col justify-center space-y-4">
                        <p className="text-4xl font-bold font-poppins">
                            Join the waitlist now and get free lifetime access
                        </p>
                        <p className="text-slate-300">
                            Please enter your email address below and press "Submit". We'll send you an
                            exlcusive invite to the platform as soon as it's ready.
                        </p>

                        <input
                            className={`
                                w-full bg-black dark:bg-zinc-900 py-3 px-4 focus:outline-none placeholder-gray-500
                                appearance-none focus:bg-black hover:bg-black dark:hover:bg-zinc-900 dark:focus:bg-zinc-900
                                border-4 border-white dark:border-zinc-100
                            `}
                            placeholder="Enter your name"
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="name"
                        />

                        <input
                            className={`
                                w-full bg-black py-3 px-4 focus:outline-none placeholder-gray-500
                                appearance-none focus:bg-black hover:bg-black border-4 border-white
                            `}
                            placeholder="Enter your email address"
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="email"
                        />
                    </div>
                    
                    <div className="w-full flex flex-row text-white">
                        <button
                            className={`
                                w-6/12 bg-transparent py-3 rounded-none focus:outline-none
                                cursor-pointer hover:text-red-500 duration-300
                            `}
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            className={`
                                w-6/12 bg-white py-3 font-bold text-black border-4 border-white
                                focus:outline-none cursor-pointer hover:bg-black hover:text-white
                            `}
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    )
}