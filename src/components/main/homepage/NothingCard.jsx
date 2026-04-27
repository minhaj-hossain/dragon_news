import { BsInbox } from "react-icons/bs";

export default function EmptyState({
    title = "Nothing to show",
    message = "We couldn’t find any content here yet. Please check back later.",
    actionLabel,
    onAction,
}) {
    return (
        <div className="w-full flex items-center justify-center py-24 px-6">
            <div className="max-w-md w-full text-center">
                {/* Icon */}
                <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <BsInbox size={40} />
                </div>

                {/* Text */}
                <h2 className="mt-6 text-2xl font-semibold text-gray-800">{title}</h2>
                <p className="mt-2 text-gray-500 leading-relaxed">{message}</p>

                {/* Optional Action */}
                {actionLabel && (
                    <button
                        onClick={onAction}
                        className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition"
                    >
                        {actionLabel}
                    </button>
                )}
            </div>
        </div>
    );
}