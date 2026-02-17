import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "dayschedule-widget";

const DaySchedulePage = () => {
    const navigate = useNavigate();
    const [showFallback, setShowFallback] = useState(false);

    useEffect(() => {
        const handleMessage = (e) => {
            // DaySchedule sends a postMessage when an appointment is confirmed or payment is successful
            console.log("DaySchedule Message received:", e.data);

            // Robust detection: convert everything to a string and check for keywords
            const dataStr = typeof e.data === 'string' ? e.data.toLowerCase() : JSON.stringify(e.data).toLowerCase();

            const isSuccess =
                dataStr.includes("confirmed") ||
                dataStr.includes("success") ||
                dataStr.includes("paid") ||
                (e.data && e.data.type === "appointment_confirmed");

            if (isSuccess) {
                console.log("Success detected via message logic, attempting redirect...");
                setShowFallback(true);
                navigate("/thank-you");
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, [navigate]);

    return (
        <div className="w-full h-screen relative flex flex-col bg-black">
            <div className="flex-1">
                <dayschedule-widget
                    url="https://harivikash-b.dayschedule.com/1-on-1-for-booking-system"
                    options='{ "hideHeader": true }'
                    style={{ width: "100%", height: "100%" }}
                ></dayschedule-widget>
            </div>

            {/* Fallback navigation button - only shows if auto-redirect fails after success detection */}
            {showFallback && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 animate-bounce">
                    <button
                        onClick={() => navigate("/thank-you")}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-semibold shadow-2xl transition-all active:scale-95 border border-white/20 backdrop-blur-sm"
                    >
                        Click here to continue
                    </button>
                </div>
            )}
        </div>
    );
};

export default DaySchedulePage;
