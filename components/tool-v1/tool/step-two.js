import * as Yup from "yup";
import { FieldArray, Formik } from "formik";
import { useRef, useState } from "react";
import { lambda } from "@/services/api";
import { useTool } from "./tool-context";
import classNames from "classnames";
import Modal from "@/components/shared/modal";
import UpgradeLaterModal from "@/components/shared/upgrade-later-modal";
import { IS_DEMO } from "@/constants/config";

const registerInterestSchema = Yup.object().shape({
    telephone: Yup.string(),
    email: Yup.string().email("Enter a valid email address").required("Enter a valid email address")
});

const styles = [
	{
		label: "Classic",
		id: "classic",
		imgUrl: "",
		pro: false
	},
	{
		label: "Product",
		id: "product",
		imgUrl: "",
		pro: true
	},
	{
		label: "Poster",
		id: "poster",
		imgUrl: "",
		pro: true
	},
	{
		label: "Promo",
		id: "promo",
		imgUrl: "",
		pro: true
	},
	{
		label: "Explosion",
		id: "explosion",
		pro: true
	},
	{
		label: "Illustration",
		id: "illustration",
		imgUrl: "",
		pro: true
	},
	{
		label: "Creative",
		id: "creative",
		imgUrl: "",
		pro: true
	},
	{
		label: "Dramatic",
		id: "dramatic",
		pro: true
	},
	{
		label: "Cinematic",
		id: "cinematic",
		imgUrl: "",
		pro: true
	},
	{
		label: "+100 more",
		id: "more",
		imgUrl: "",
		pro: true
	},
];

export default function StepTwo() {
    const { tool, setTool, nextStep } = useTool();
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
	const [showUpgradeModal, setShowUpgradeModal] = useState(false);

    const handleSubmit = async ({ email, telephone }) => {
		if (IS_DEMO) {
			nextStep();
			return;
		}
		
        setLoading(true);
        setTool(_tool => ({ ..._tool, email, telephone }));

		await lambda.post("/subscribe", {
            email,
            telephone,
            imgUrl: tool.imgUrl
        });
        
        nextStep();
    }

    return (
        <Formik
            initialValues={{ email: "", telephone: "", styles: ["classic"], quality: "low", quantity: 5 }}
            onSubmit={handleSubmit}
            validationSchema={registerInterestSchema}
            innerRef={formRef}
        >
            {({ values, handleChange, handleBlur, handleSubmit, errors, isValid, setFieldValue }) => (
                <form
                    onSubmit={handleSubmit}
                    className={`
                        w-full max-w-xl mx-auto h-full flex flex-col justify-center items-center space-y-4
						my-32
                    `}
                >
                    <div className="w-full h-full flex flex-col justify-center space-y-8">
						<div className="w-full flex flex-col space-y-2">
							<h3 className="w-full text-xl font-semibold text-black dark:text-zinc-100 font-plex">
								Where should we send the results?
							</h3>
							<input
								className={`
									w-full dark:bg-zinc-800 py-3 px-4 focus:outline-none placeholder-zinc-400
									appearance-none focus:border-zinc-700 hover:border-zinc-700 border-2 border-zinc-800
									text-black dark:text-zinc-200
								`}
								placeholder="Enter your email address"
								value={values.email}
								onBlur={handleBlur}
								onChange={handleChange}
								name="email"
							/>

							<input
								className={`
									w-full dark:bg-zinc-800 py-3 px-4 focus:outline-none placeholder-zinc-400
									appearance-none focus:border-zinc-700 hover:border-zinc-700 border-2 border-zinc-800
									text-black dark:text-zinc-200
								`}
								placeholder="Enter your telephone (optional)"
								value={values.telephone}
								onBlur={handleBlur}
								onChange={handleChange}
								name="telephone"
							/>
						</div>

						<div className="w-full flex flex-col space-y-2">
							<h3 className="w-full text-xl font-semibold text-black dark:text-zinc-100 font-plex">
								Quality
							</h3>
							<div className="w-full flex flex-row items-center space-x-1">
								<button
									className={classNames(
										"w-full rounded-l-lg px-2 py-4",
										"bg-gray-200 dark:bg-zinc-800 border-2",
										values.quality === "low" ? "border-black dark:border-zinc-100" : "border-transparent"
									)}
									type="button"
									onClick={() => setFieldValue("quality", "low")}
								>
									Low
								</button>
								<button
									className={classNames(
										"w-full rounded-none px-2 py-4",
										"bg-gray-200 dark:bg-zinc-800 border-2",
										values.quality === "medium" ? "border-zinc-100" : "border-transparent"
									)}
									type="button"
									onClick={() => setShowUpgradeModal(true)}
								>
									Med
								</button>
								<button
									className={classNames(
										"w-full rounded-none px-2 py-4",
										"bg-gray-200 dark:bg-zinc-800 border-2",
										values.quality === "high" ? "border-black dark:border-zinc-100" : "border-transparent"
									)}
									type="button"
									onClick={() => setShowUpgradeModal(true)}
								>
									High
								</button>
								<button
									className={classNames(
										"w-full rounded-r-lg px-2 py-4",
										"bg-gray-200 dark:bg-zinc-800 border-2",
										values.quality === "hd" ? "border-black dark:border-zinc-100" : "border-transparent"
									)}
									type="button"
									onClick={() => setShowUpgradeModal(true)}
								>
									HD
								</button>
							</div>
						</div>

						<div className="w-full flex flex-col space-y-2">
							<h3 className="w-full text-xl font-semibold text-black dark:text-zinc-100 font-plex">
								Quantity
							</h3>
							<div className="w-full flex flex-row items-center space-x-1">
								<button
									className={classNames(
										"w-full rounded-l-lg px-2 py-4",
										"bg-gray-200 dark:bg-zinc-800 border-2",
										values.quantity === 5 ? "border-black dark:border-zinc-100" : "border-transparent"
									)}
									type="button"
									onClick={() => setShowUpgradeModal(true)}
								>
									5
								</button>
								<button
									className={classNames(
										"w-full rounded-none px-2 py-4",
										"bg-gray-200 dark:bg-zinc-800 border-2",
										values.quantity === 50 ? "border-black dark:border-zinc-100" : "border-transparent"
									)}
									type="button"
									onClick={() => setShowUpgradeModal(true)}
								>
									50
								</button>
								<button
									className={classNames(
										"w-full rounded-none px-2 py-4",
										"bg-gray-200 dark:bg-zinc-800 border-2",
										values.quantity === 100 ? "border-black dark:border-zinc-100" : "border-transparent"
									)}
									type="button"
									onClick={() => setShowUpgradeModal(true)}
								>
									100
								</button>
								<button
									className={classNames(
										"w-full rounded-r-lg px-2 py-4",
										"bg-gray-200 dark:bg-zinc-800 border-2",
										values.quantity === 1000 ? "border-black dark:border-zinc-100" : "border-transparent"
									)}
									type="button"
									onClick={() => setShowUpgradeModal(true)}
								>
									1000
								</button>
							</div>
						</div>

						<div className="w-full flex flex-col space-y-2">
							<h3 className="w-full text-xl font-semibold text-black dark:text-zinc-100 font-plex">
								Styles
							</h3>
							<FieldArray name="styles">
                                {(props => (
									<div className="w-full grid grid-cols-3 md:grid-cols-5 rounded-lg overflow-hidden gap-1">
										{styles.map(style => (
											<button
												key={style.id}
												className={classNames(
													"w-full relative aspect-square flex flex-col justify-center items-center px-2 py-4",
													"bg-gray-200 dark:bg-zinc-800 overflow-hidden relative border-2",
													"duration-200 last:rounded-br-lg first:rounded-tl-lg",
													values.styles.indexOf(style.id) > -1 ? "border-black dark:border-zinc-100" : "border-transparent"
												)}
												type="button"
												onClick={() => {
													if (style.id !== "classic") {
														setShowUpgradeModal(true);
														return;
													}

													// if (values.styles.indexOf(style.id) > -1) {
													// 	props.remove(values.styles.indexOf(style.id));
													// }
													// else {
													// 	props.push(style.id)
													// }
												}}
											>
												{style.pro && (
													<div className="rounded-md py-px px-2 bg-gradient-to-br from-white dark:from-zinc-100 to-white dark:to-zinc-200 text-xs dark:text-zinc-900 absolute top-1 right-1 font-medium uppercase">
														Pro
													</div>
												)}
												{style.label}
											</button>
										))}
									</div>
								))}
                            </FieldArray>
						</div>
                    </div>

                    {Object.keys(errors).length > 0 && (
                        <p className="text-red-500 text-sm text-left w-full">
                            {errors[Object.keys(errors)[0]]}
                        </p>
                    )}

					<Modal show={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} size="sm">
						<UpgradeLaterModal />
					</Modal>
                    
                    <div className="w-full flex flex-row space-x-2 md:space-x-4">
                        <button
                            className={`
                                w-full bg-azure-500 py-3 font-bold text-white border-4 border-azure-500 relative
                                focus:outline-none cursor-pointer hover:bg-zinc-900 hover:text-azure-500 duration-200
								disabled:hover:bg-azure-500 disabled:hover:text-white
                            `}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    )
}