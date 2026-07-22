"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Application Error Caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-white font-sans flex flex-col items-center justify-center p-6 antialiased">
        <div className="max-w-md w-full bg-slate-800/90 border border-slate-700/80 p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto border border-red-500/20">
            <AlertCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-red-400 block">
              System Recovery Protocol
            </span>
            <h1 className="font-bold text-2xl text-white tracking-tight">
              Application Error Encountered
            </h1>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            The application encountered a temporary server error. Click below to reload the session and restore the application state.
          </p>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                if (typeof reset === "function") {
                  reset();
                } else {
                  window.location.reload();
                }
              }}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Application</span>
            </button>

            <a
              href="/"
              className="w-full py-3.5 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Return to Homepage</span>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
