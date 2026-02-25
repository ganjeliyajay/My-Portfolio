import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import SkeletonCertificateCard from "./SkeletonCertificateCard";

export default function Certificate({ setShowCertificate }) {

    const { certificates, loading, error } = useSelector((s) => s.certificate)

    // 🔒 Block background scroll
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        // 👇 Click outside to close
        <div
            onClick={() => setShowCertificate(false)}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
        >

            {/* Popup Container */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-[90%] max-w-4xl max-h-[85vh] bg-blue-950/10 text-foreground rounded-2xl shadow-2xl p-8 backdrop-blur-[8px]"
            >

                {/* Header */}
                <div className="grid grid-cols-3 items-center mb-6">

                    <div></div>

                    <div className="flex justify-center">
                        <svg
                            viewBox="0 0 600 120"
                            className="w-[260px] sm:w-[320px] md:w-[420px]"
                        >
                            <text
                                x="50%"
                                y="60%"
                                textAnchor="middle"
                                className="handwriting-text"
                            >
                                My Certificates
                            </text>
                        </svg>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={() => setShowCertificate(false)}
                            className="text-2xl font-bold hover:text-primary transition cursor-pointer"
                        >
                            <X
                                className="rotate-0 hover:rotate-90 transition-transform duration-300"
                                size={30}
                                strokeWidth={2.5}
                            />
                        </button>
                    </div>

                </div>

                <div className="h-[1px] w-full bg-border mb-6"></div>

                {/* Scroll Area */}
                <div className="max-h-[65vh] overflow-y-auto pr-2 scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">

                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">

                        {loading && (
                            <>
                                <SkeletonCertificateCard />
                                <SkeletonCertificateCard />
                            </>
                        )}

                        {!loading && certificates && certificates.map((e) => (
                            <div key={e._id} className="group relative mt-6 rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

                                <div className="relative overflow-hidden">
                                    <img
                                        src={e.imgUrl}
                                        alt={e.name}
                                        className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                                    <h2
                                        className="
                                        absolute left-1/2 bottom-4
                                        -translate-x-1/2
                                        text-xl font-[Pacifico]
                                        drop-shadow-lg
                                        transition-all duration-500
                                        group-hover:bottom-1/2 group-hover:translate-y-1/2 group-hover:scale-110
                                        bg-gradient-to-r from-white via-primary to-white
                                        bg-[length:200%_100%]
                                        bg-clip-text text-transparent
                                        animate-textShimmer
                                        "
                                    >
                                        {e.name}
                                    </h2>

                                    <a
                                        href={e.certificateLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                        absolute left-1/2 bottom-6
                                        -translate-x-1/2
                                        text-sm font-semibold
                                        text-primary
                                        opacity-0 translate-y-4
                                        group-hover:opacity-100 group-hover:translate-y-0
                                        transition-all duration-500 delay-200
                                        hover:text-white
                                        "
                                    >
                                        View Certificate →
                                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 hover:w-full"></span>
                                    </a>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}