import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import b3 from "./assets/BTech/BTech 3rd.jpg";
import b4 from "./assets/BTech/BTech 4th.jpg";
import b5 from "./assets/BTech/BTech 5th.jpg";

const docs = [
  { src: b3, label: "BTech 3rd" },
  { src: b4, label: "BTech 4th" },
  { src: b5, label: "BTech 5th" },
];

export const Btech = () => {
  const [modalImg, setModalImg] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const startYRef = useRef(0);
  const lastOffsetYRef = useRef(0);
  const printRef = useRef();
  const navigate = useNavigate();

  const handleOpenModal = (img) => {
    setModalImg(img);
    setZoom(1);
    setOffsetY(0);
    lastOffsetYRef.current = 0;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (!modalImg) return;
    let newZoom = zoom + (e.deltaY < 0 ? 0.1 : -0.1);
    newZoom = Math.max(0.5, Math.min(3, newZoom));
    setZoom(newZoom);
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setDragging(true);
    startYRef.current = e.clientY;
    document.body.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const deltaY = e.clientY - startYRef.current;
    setOffsetY(lastOffsetYRef.current + deltaY);
  };

  const handleMouseUp = () => {
    if (dragging) {
      setDragging(false);
      lastOffsetYRef.current = offsetY;
      document.body.style.cursor = "";
    }
  };

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offsetY]);

  React.useEffect(() => {
    setOffsetY(0);
    lastOffsetYRef.current = 0;
  }, [modalImg]);

  // Print logic: print only the modal image, stretch horizontally to fill A4
  const handlePrint = () => {
    if (!modalImg) return;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<!DOCTYPE html><html><head><title>Print</title><style>
      @media print {
        @page { size: A4 portrait; margin: 0; }
        html, body { margin: 0; padding: 0; background: white; height: 100%; width: 100%; }
        .a4-img-container {
          width: 210mm; height: 297mm;
          overflow: hidden;
        }
        .a4-img-container img {
          width: 210mm; height: 297mm;
          object-fit: fill;
          display: block;
          margin: 0;
          box-shadow: none;
        }
      }
      html, body { height: 100%; width: 100%; margin: 0; padding: 0; background: white; }
      .a4-img-container {
        width: 210mm; height: 297mm;
        overflow: hidden;
        background: white;
      }
      .a4-img-container img {
        width: 210mm; height: 297mm;
        object-fit: fill;
        display: block;
        margin: 0;
        box-shadow: none;
      }
    </style></head><body><div class='a4-img-container'></div></body></html>`);
    printWindow.document.close();
    const img = printWindow.document.createElement('img');
    img.src = modalImg.src;
    img.alt = modalImg.label;
    img.onload = () => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    };
    printWindow.document.querySelector('.a4-img-container').appendChild(img);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-slate-800 px-2 sm:px-0 pb-32">
      {/* Back button */}
      <button
        className="fixed top-4 left-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg shadow-md transition-all z-40 text-sm sm:text-base flex items-center gap-1"
        onClick={() => navigate('/personal-documents')}
        aria-label="Back"
      >
        <span>&#8592;</span>
        <span className="hidden sm:inline-block">Back</span>
      </button>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-indigo-400 text-center drop-shadow-lg mt-5 mb-8">BTech</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl justify-items-center">
        {docs.map(({ src, label }) => (
          <div key={label} className="flex flex-col items-center">
            <img
              src={src}
              alt={label}
              className="rounded-xl shadow-lg w-full max-w-xs object-cover cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleOpenModal({ src, label })}
            />
            <span className="mt-3 text-lg font-semibold text-indigo-200 text-center drop-shadow">{label}</span>
          </div>
        ))}
      </div>
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          {/* X and Print buttons absolutely positioned in the overlay */}
          <div className="fixed top-4 right-4 flex gap-2 z-50">
            <button
              className="text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-70 transition-all"
              onClick={() => setModalImg(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <button
              className="text-white text-xl font-bold bg-teal-600 bg-opacity-90 rounded-full px-4 py-1 hover:bg-teal-700 transition-all shadow-md print:hidden"
              onClick={e => { e.stopPropagation(); handlePrint(); }}
              aria-label="Print"
            >
              🖨 Print
            </button>
          </div>
          <div
            className="relative flex flex-col items-center w-auto h-auto m-0 p-0"
            onClick={e => e.stopPropagation()}
            onWheel={handleWheel}
          >
            <img
              ref={printRef}
              src={modalImg.src}
              alt={modalImg.label}
              style={{ transform: `scale(${zoom}) translateY(${offsetY}px)`, transition: dragging ? 'none' : 'transform 0.2s', cursor: dragging ? 'grabbing' : 'grab' }}
              className="rounded-xl shadow-2xl max-h-[90vh] max-w-[95vw] object-contain bg-white select-none m-0 p-0"
              draggable={false}
              onMouseDown={handleMouseDown}
            />
            <span className="mt-2 text-2xl font-bold text-indigo-200 text-center drop-shadow-lg">{modalImg.label}</span>
            <span className="mt-1 text-sm text-indigo-100">Scroll to zoom ({Math.round(zoom * 100)}%) | Drag to move</span>
          </div>
        </div>
      )}
    </div>
  );
}; 