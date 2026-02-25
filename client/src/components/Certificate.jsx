import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import SkeletonCertificateCard from "./SkeletonCertificateCard";

export default function Certificate({ setShowCertificate }) {

  const { certificates, loading } = useSelector((s) => s.certificate);

  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-100 bg-background/80 backdrop-blur-sm"
      onClick={() => setShowCertificate(false)}   // outside click
    >

      {/* Popup Container */}
      <div
        className="w-[90%] max-w-4xl max-h-[85vh] bg-card text-foreground rounded-2xl shadow-2xl p-8 border border-border"
        onClick={(e) => e.stopPropagation()}   // prevent inside click
      >

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-semibold text-primary">
            My Certificates
          </h2>

          <button
            onClick={() => setShowCertificate(false)}
            className="hover:text-primary transition"
          >
            <X size={26}/>
          </button>

        </div>

        <div className="h-[1px] w-full bg-border mb-6"></div>

        {/* Scroll area */}
        <div className="max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {loading && (
              <>
                <SkeletonCertificateCard />
                <SkeletonCertificateCard />
              </>
            )}

            {!loading && certificates && certificates.map((e) => (

              <div
                key={e._id}
                className="rounded-xl overflow-hidden bg-card border border-border"
              >

                <img
                  src={e.imgUrl}
                  alt={e.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4 text-center">

                  <h3 className="font-semibold text-lg">
                    {e.name}
                  </h3>

                  <a
                    href={e.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm mt-2 inline-block"
                  >
                    View Certificate →
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