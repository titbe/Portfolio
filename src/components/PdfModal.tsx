import React from "react";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
}

export const PdfModal = ({
  isOpen,
  onClose,
  fileUrl,
}: PdfModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "90%",
          height: "90%",
          borderRadius: "8px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* PDF Viewer */}
        <div style={{ flex: 1 }}>
          <iframe
            src={`${fileUrl}#toolbar=0`}
            title="PDF Viewer"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#F4F4F6] text-[#525866] hover:bg-[#e4e4e6] transition"
          >
            Cancel
          </button>

          <a
            href={fileUrl}
            download
            className="px-6 py-2 bg-[#2A81D0] text-white hover:bg-[#1f6bb5] transition"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
