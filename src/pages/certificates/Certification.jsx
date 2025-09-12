import React, { useState, useRef } from "react";
import java1 from "../../assets/certificates/java1.jpg";
import react from "../../assets/certificates/react.jpg";
import tata from "../../assets/certificates/tata.jpg";
import lor from "../../assets/certificates/lor.png";
import face from "../../assets/certificates/Face.jpg";
import git from "../../assets/certificates/GIt.jpg";
import java2 from "../../assets/certificates/java2.jpg";
import sql1 from "../../assets/certificates/sql1.jpg"
import react1 from "../../assets/certificates/react1.jpg"
import react2 from "../../assets/certificates/react2.jpg"
import infosys1 from "../../assets/certificates/Infosys SQL1.jpg"

export const Certification = () => {
  const [modalImg, setModalImg] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const startYRef = useRef(0);
  const lastOffsetYRef = useRef(0);
  const printRef = useRef();

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
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragging, offsetY]);

  const handlePrint = () => {
    if (!modalImg) return;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print - ${modalImg.label}</title>
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
    <div className="font-[Inter] bg-gradient-to-br from-cyan-600 to-blue-800 min-h-screen w-full text-white">
      <header className="pt-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-md">
          Certificates
        </h1>
        <p className="text-lg mt-2 text-cyan-100">
          Udemy, NATS, and more—your learning journey on display 🎓
        </p>
      </header>

      <section className="flex flex-wrap justify-center gap-10 px-6 mt-10 pb-24">
        {[
          { src: infosys1, label: "Infosys SQL Developer Certification" },
          { src: react1, label: "Udemy React Certification" },
          { src: react2, label: "Udemy React Certification" },
          { src: sql1, label: "Udemy SQL Certification" },
          { src: java2, label: "Udemy Core Java Certification" },
          { src: git, label: "Udemy Mastering Git Certification" },
          { src: face, label: "Udemy Face Recognition Certification" },
          { src: java1, label: "Udemy Java Certification" },
          { src: react, label: "Udemy React Certification" },
          { src: tata, label: "NATS TATA MOTORS Certification" },
          { src: lor, label: "LOR from SARVAGYA DOERS FOUNDATION" },
        ].map(({ src, label }, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl p-4 max-w-sm"
          >
            <img
              className="rounded-lg object-contain w-full h-64 md:h-80 cursor-pointer hover:scale-105 transition-transform"
              src={src}
              alt={label}
              onClick={() => handleOpenModal({ src, label })}
            />
            <p className="mt-3 text-center font-semibold text-lg">{label}</p>
          </div>
        ))}
      </section>
      
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
            <span className="mt-2 text-2xl font-bold text-cyan-200 text-center drop-shadow-lg">{modalImg.label}</span>
            <span className="mt-1 text-sm text-cyan-100">Scroll to zoom ({Math.round(zoom * 100)}%) | Drag to move</span>
          </div>
        </div>
      )}
    </div>
  );
};
