"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(null);
  const [position, setPosition] = useState(null);
  const [theme, setTheme] = useState("dark");
  const sectionRefs = useRef([]);

  // Theme initialisation from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("af-theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("af-theme", next);
  };

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "-40px" }
    );

    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3200);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
      setPosition(data.position);
      setToast({ type: "success", message: "You're on the list" });
    } catch (err) {
      setError(err.message);
      setToast({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--cream)",
      }}
    >
      {/* ─── Marquee Strip ─── */}
      <div
        style={{
          background: "var(--gold)",
          overflow: "hidden",
          padding: "10px 0",
        }}
      >
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--bg)",
                whiteSpace: "nowrap",
                padding: "0 24px",
              }}
            >
              Premium Cotton &nbsp;·&nbsp; 320 GSM &nbsp;·&nbsp; Land in Style
              &nbsp;·&nbsp; Designed in Dubai &nbsp;·&nbsp; Comfort, Elevated
              &nbsp;·&nbsp; Join the Waitlist &nbsp;·&nbsp; Premium Cotton
              &nbsp;·&nbsp; 320 GSM &nbsp;·&nbsp; Land in Style &nbsp;·&nbsp;
              Designed in Dubai &nbsp;·&nbsp; Comfort, Elevated &nbsp;·&nbsp;
              Join the Waitlist &nbsp;·&nbsp;{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Header ─── */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 var(--gutter)",
          height: "72px",
          borderBottom: "1px solid var(--border)",
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="/favicon.jpg"
            alt="AirportFits"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
            }}
          >
            Airport<span style={{ color: "var(--gold)" }}>Fits</span>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span
            className="label-xs"
            style={{ color: "var(--muted)" }}
          >
            AirportFits — SS 2026
          </span>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="theme-icon">
              {theme === "dark" ? "☀" : "☾"}
            </span>
          </button>
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <section
        style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "clamp(80px, 12vh, 140px) var(--gutter)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background elements */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "clamp(15rem, 30vw, 30rem)",
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            color: "rgba(201, 169, 110, 0.03)",
            pointerEvents: "none",
            userSelect: "none",
            lineHeight: 0.85,
          }}
        >
          AF
        </div>

        <div className="fade-up" style={{ animationDelay: "0s" }}>
          <p
            className="label-sm"
            style={{
              color: "var(--gold)",
              marginBottom: "0.75rem",
            }}
          >
            Waitlist Now Open
          </p>
          <div className="gold-line" style={{ margin: "0 auto 2rem" }} />
        </div>

        <h1
          className="display-lg fade-up"
          style={{
            maxWidth: "800px",
            margin: "0 auto 1.5rem",
            animationDelay: "0.1s",
          }}
        >
          Land in
          <br />
          <em style={{ color: "var(--gold-light)", fontWeight: 300 }}>Style</em>
        </h1>

        <p
          className="fade-up"
          style={{
            color: "var(--cream-dim)",
            fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
            maxWidth: "520px",
            margin: "0 auto 3rem",
            lineHeight: 1.8,
            animationDelay: "0.2s",
          }}
        >
          Premium cotton travel wear designed for airport comfort and style.
          Be the first to know when we drop — join the waitlist for early
          access to our debut collection.
        </p>

        {/* ─── Waitlist Form ─── */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="fade-up"
            style={{
              width: "100%",
              maxWidth: "460px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              animationDelay: "0.3s",
            }}
          >
            <input
              type="text"
              className="input"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ textAlign: "center" }}
            />
            <input
              type="email"
              className="input"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ textAlign: "center" }}
            />
            {error && (
              <p
                style={{
                  color: "var(--error)",
                  fontSize: "0.75rem",
                  margin: "0",
                  letterSpacing: "0.04em",
                }}
              >
                {error}
              </p>
            )}
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={loading}
              style={{
                width: "100%",
                opacity: loading ? 0.7 : 1,
                marginTop: "4px",
              }}
            >
              {loading ? "Joining..." : "Join the Waitlist →"}
            </button>
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                marginTop: "4px",
              }}
            >
              No spam, ever — just first access to our drops.
            </p>
          </form>
        ) : (
          <div
            className="fade-up visible"
            style={{
              width: "100%",
              maxWidth: "460px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
                animation: "scaleIn 0.6s var(--ease-out)",
              }}
            >
              ✦
            </div>
            <h3
              className="display-sm"
              style={{ marginBottom: "0.75rem" }}
            >
              You&apos;re on the list
            </h3>
            <p
              style={{
                color: "var(--cream-dim)",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                maxWidth: "380px",
                margin: "0 auto",
              }}
            >
              We&apos;ll notify you the moment our debut collection is ready.
              Welcome to the journey.
            </p>
          </div>
        )}

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          <span
            className="label-xs"
            style={{ color: "var(--muted)" }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "24px",
              background: "var(--muted)",
            }}
          />
        </div>
      </section>

      {/* ─── Stats Section ─── */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "clamp(40px, 6vh, 60px) var(--gutter)",
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1px",
            textAlign: "center",
          }}
        >
          {[
            { num: "320", label: "GSM Premium Cotton" },
            { num: "18", label: "Months in Development" },
            { num: "4", label: "Signature Fits" },
            { num: "100%", label: "Cotton · No Blends" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`fade-up delay-${i + 1}`}
              style={{ padding: "20px 0" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.num}
              </div>
              <div
                className="label-xs"
                style={{ color: "var(--muted)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Value Propositions ─── */}
      <section
        style={{
          padding: "clamp(80px, 12vh, 140px) var(--gutter)",
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "clamp(40px, 6vh, 80px)" }}>
          <p className="label-sm" style={{ color: "var(--gold)", marginBottom: "0.75rem" }}>
            Why AirportFits
          </p>
          <div className="gold-line" style={{ margin: "0 auto 1.5rem" }} />
          <h2 className="display-md">
            Born in the <em style={{ color: "var(--gold-light)" }}>terminal</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {[
            {
              num: "01",
              title: "Crafted with Intent",
              desc: "Every seam, every stitch is placed with purpose. Our signature 320 GSM cotton is sourced after an 18-month process to find the perfect weight.",
            },
            {
              num: "02",
              title: "Designed for Movement",
              desc: "Four fit profiles — Terminal, Runway, Departure, First Class — to suit every body type and travel style.",
            },
            {
              num: "03",
              title: "Consistent Colour",
              desc: "Hoodie and jogger cut from the same fabric batch. Perfect matching, every time — no variation between pieces.",
            },
            {
              num: "04",
              title: "Built to Last",
              desc: "Reinforced seams, heavy-duty drawcords, and premium hardware. Pre-shrunk and colour-fast — designed to endure the journey.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`fade-up delay-${i + 1}`}
              style={{
                background: "var(--bg-card)",
                padding: "clamp(28px, 4vw, 48px)",
                transition: "background var(--transition)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--bg-card-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--bg-card)")
              }
            >
              <div
                className="label-xs"
                style={{
                  color: "var(--gold)",
                  marginBottom: "1.25rem",
                }}
              >
                {item.num}
              </div>
              <h3
                className="display-sm"
                style={{
                  marginBottom: "1rem",
                  fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "var(--cream-dim)",
                  fontSize: "0.85rem",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── The Collection Preview ─── */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          padding: "clamp(80px, 12vh, 140px) var(--gutter)",
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "clamp(40px, 6vh, 80px)" }}>
          <p className="label-sm" style={{ color: "var(--gold)", marginBottom: "0.75rem" }}>
            The Collection
          </p>
          <div className="gold-line" style={{ margin: "0 auto 1.5rem" }} />
          <h2 className="display-md">
            Four signature <em style={{ color: "var(--gold-light)" }}>fits</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {[
            {
              name: "Terminal",
              audience: "Men",
              fit: "Relaxed Oversized Fit",
            },
            {
              name: "Runway",
              audience: "Men",
              fit: "Slim Modern Fit",
            },
            {
              name: "Departure",
              audience: "Women",
              fit: "Cropped Hoodie + High-Waist",
            },
            {
              name: "First Class",
              audience: "Women",
              fit: "Oversized Luxury Fit",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`fade-up delay-${i + 1}`}
              style={{
                background: "var(--bg-card)",
                padding: "clamp(28px, 4vw, 48px)",
                transition: "background var(--transition)",
                textAlign: "center",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--bg-card-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--bg-card)")
              }
            >
              <div
                style={{
                  display: "inline-block",
                  background: "var(--gold)",
                  color: "var(--bg)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.58rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  marginBottom: "1.5rem",
                }}
              >
                {item.audience}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  marginBottom: "0.5rem",
                }}
              >
                {item.name}
              </h3>
              <p
                className="label-xs"
                style={{
                  color: "var(--muted)",
                  margin: 0,
                }}
              >
                {item.fit}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Brand Quote ─── */}
      <section
        style={{
          background: "var(--bg-elevated)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "clamp(80px, 12vh, 140px) var(--gutter)",
          textAlign: "center",
        }}
      >
        <div
          className="fade-up"
          style={{
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              color: "var(--gold)",
              fontSize: "1.5rem",
              display: "block",
              marginBottom: "2rem",
            }}
          >
            ✦
          </span>
          <blockquote
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.3rem, 3vw, 2rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.5,
              color: "var(--cream-dim)",
              margin: 0,
              padding: 0,
              border: "none",
            }}
          >
            &ldquo;The journey is the destination. You should look like you
            know it.&rdquo;
          </blockquote>
          <div className="gold-line" style={{ margin: "2rem auto 0" }} />
        </div>
      </section>

      {/* ─── Second CTA Section ─── */}
      <section
        style={{
          padding: "clamp(80px, 12vh, 140px) var(--gutter)",
          textAlign: "center",
          maxWidth: "var(--max-w)",
          margin: "0 auto",
        }}
      >
        <div className="fade-up">
          <p className="label-sm" style={{ color: "var(--gold)", marginBottom: "0.75rem" }}>
            First Class Inbox
          </p>
          <div className="gold-line" style={{ margin: "0 auto 1.5rem" }} />
          <h2 className="display-md" style={{ marginBottom: "1.5rem" }}>
            Don&apos;t miss the <em style={{ color: "var(--gold-light)" }}>drop</em>
          </h2>
          <p
            style={{
              color: "var(--cream-dim)",
              fontSize: "0.92rem",
              maxWidth: "480px",
              margin: "0 auto 2rem",
              lineHeight: 1.8,
            }}
          >
            Join our list for early access to new drops, exclusive offers, and
            style inspiration for the modern traveller.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                gap: "8px",
                maxWidth: "460px",
                margin: "0 auto",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <input
                type="email"
                className="input"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: "1 1 240px",
                  textAlign: "center",
                }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                style={{
                  flex: "0 0 auto",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Joining..." : "Join →"}
              </button>
            </form>
          ) : (
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.1rem",
                color: "var(--gold)",
              }}
            >
              ✦ You&apos;re already on the list
            </p>
          )}
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer
        style={{
          background: "var(--bg-footer)",
          borderTop: "1px solid var(--border)",
          padding: "clamp(40px, 6vh, 60px) var(--gutter) clamp(24px, 4vh, 40px)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src="/favicon.jpg"
              alt="AirportFits"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
              }}
            >
              Airport<span style={{ color: "var(--gold)" }}>Fits</span>
            </span>
          </div>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.75rem",
              letterSpacing: "0.04em",
              textAlign: "center",
              lineHeight: 1.8,
              maxWidth: "400px",
            }}
          >
            Premium cotton travel wear designed for airport comfort and style.
            <br />
            Designed in Dubai.
          </p>

          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["Instagram", "TikTok", "Twitter"].map((channel) => (
              <a
                key={channel}
                href="#"
                className="label-xs"
                style={{
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color var(--transition)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--gold)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                {channel}
              </a>
            ))}
          </div>

          <div
            style={{
              width: "100%",
              borderTop: "1px solid var(--border)",
              paddingTop: "24px",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <p
              className="label-xs"
              style={{ color: "var(--muted)", margin: 0 }}
            >
              © 2026 AirportFits. All rights reserved.
            </p>
            <p
              className="label-xs"
              style={{ color: "var(--muted)", margin: 0 }}
            >
              support@airportfits.com
            </p>
          </div>
        </div>
      </footer>

      {/* ─── Toast ─── */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: "var(--cream)",
            }}
          >
            {toast.type === "success" ? "✓" : "⚠"} {toast.message}
          </p>
        </div>
      )}
    </div>
  );
}
