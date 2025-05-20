import React, { useEffect } from "react";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl: string;
}

export const PdfModal = ({ isOpen, onClose, fileUrl }: PdfModalProps) => {
  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isOpen && isMobile) {
      window.open(fileUrl, "_blank");
      onClose();
    }
  }, [isOpen, fileUrl, onClose]); // ✅ Lỗi 2 cũng được fix ở đây

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
        <div style={{ flex: 1 }}>
          <object
            data={fileUrl}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Your browser does not support viewing PDFs.{" "}
              <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                Open PDF
              </a>
            </p>
          </object>
        </div>

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
