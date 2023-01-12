import styles from "./success.module.css";

export default function Success({ onClose = () => {} }) {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center border-4 border-white bg-black text-white p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
                <g fill="none" stroke="#ffffff" strokeWidth="2">
                    <circle className={styles.circle} cx="77" cy="77" r="72" style={{ "stroke-dasharray": "480px, 480px", "stroke-dashoffset": "960px" }} />
                    <circle className={styles.coloredCircle} fill="#ffffff" cx="77" cy="77" r="72" style={{ "stroke-dasharray": "480px, 480px", "stroke-dashoffset": "960px" }} />
                    <polyline className={styles.polyline} stroke="#000000" strokeWidth="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " style={{ "stroke-dasharray" : "100px, 100px", "stroke-dashoffset": "200px" }} />
                </g>
            </svg>

            <p className="text-2xl text-center w-full font-bold my-4">
                Thanks! We'll keep you updated by email.
            </p>

            <button
                className={`
                    w-6/12 bg-transparent py-3 rounded-none focus:outline-none
                    cursor-pointer hover:text-red-600 duration-300 text-red-500
                `}
                onClick={onClose}
            >
                Close
            </button>
        </div>
    );
}