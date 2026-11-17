"use client";

/**
 * Last-resort safety net when the root layout itself fails. It replaces the
 * whole document, so it brings its own <html>, <body> and inline styles.
 */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#F3F1EC",
          color: "#111322",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <main style={{ maxWidth: 480, padding: 24 }}>
          <h1 style={{ fontSize: 32, lineHeight: 1.1, margin: 0 }}>Something went wrong.</h1>
          <p style={{ color: "#55576a", lineHeight: 1.6 }}>Please try again, or reload the page.</p>
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                border: 0,
                background: "#3245D1",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                padding: "12px 20px",
                borderRadius: 999,
                border: "1px solid #c9c6bf",
                background: "transparent",
                color: "#111322",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Reload
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
