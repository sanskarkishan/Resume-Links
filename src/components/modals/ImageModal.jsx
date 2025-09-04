import React, { useState, useRef, useEffect } from "react";

export const ImageModal = ({ isOpen, onClose, imageData, theme = "cyan" }) => {
  const [zoom, setZoom] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const startYRef = useRef(0);
  const lastOffsetYRef = useRef(0);
  const printRef = useRef();

  // Reset modal state when opened
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
      setOffsetY(0);
      lastOffsetYRef.current = 0;
    }
  }, [isOpen]);

  const handleWheel = (e) => {
    e.preventDefault();
    if (!isOpen) return;
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

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragging, offsetY]);

  const handlePrint = () => {
    if (!imageData) return;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print - ${imageData.label}</title>
          <style>
            body { margin: 0; padding: 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: white; }
            .a4-img-container { max-width: 100%; max-height: 100%; }
            img { max-width: 100%; max-height: 100%; object-fit: contain; }
            @media print {
              body { margin: 0; padding: 0; }
              .a4-img-container { width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; }
            }
          </style>
        </head>
        <body>
          <div class="a4-img-container"></div>
        </body>
      </html>
    `);
    printWindow.document.close();
    const img = printWindow.document.createElement('img');
    img.src = imageData.src;
    img.alt = imageData.label;
    img.onload = () => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    };
    printWindow.document.querySelector('.a4-img-container').appendChild(img);
  };

  if (!isOpen || !imageData) return null;

  const themeClasses = {
    cyan: {
      title: "text-cyan-200",
      subtitle: "text-cyan-100"
    },
    blue: {
      title: "text-blue-200", 
      subtitle: "text-blue-100"
    },
    indigo: {
      title: "text-indigo-200",
      subtitle: "text-indigo-100"
    }
  };

  const currentTheme = themeClasses[theme] || themeClasses.cyan;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* X and Print buttons absolutely positioned in the overlay */}
      <div className="fixed top-4 right-4 flex gap-2 z-50">
        <button
          className="text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-70 transition-all"
          onClick={onClose}
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
          src={imageData.src}
          alt={imageData.label}
          style={{ 
            transform: `scale(${zoom}) translateY(${offsetY}px)`, 
            transition: dragging ? 'none' : 'transform 0.2s', 
            cursor: dragging ? 'grabbing' : 'grab' 
          }}
          className="rounded-xl shadow-2xl max-h-[90vh] max-w-[95vw] object-contain bg-white select-none m-0 p-0"
          draggable={false}
          onMouseDown={handleMouseDown}
        />
        <span className={`mt-2 text-2xl font-bold ${currentTheme.title} text-center drop-shadow-lg`}>
          {imageData.label}
        </span>
        <span className={`mt-1 text-sm ${currentTheme.subtitle}`}>
          Scroll to zoom ({Math.round(zoom * 100)}%) | Drag to move
        </span>
      </div>
    </div>
  );
};
