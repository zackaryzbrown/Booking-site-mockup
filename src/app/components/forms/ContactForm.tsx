import { useState, useRef, useEffect } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useForm } from "react-hook-form";
import {
  ArrowUpRight,
  Mail,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

/**
 * Web3Forms contact form integration.
 *
 * Free plan features:
 * - Email delivery via Web3Forms API
 * - hCaptcha spam protection
 * - Reply-to uses visitor's email
 * - No custom backend required
 *
 * Paid features NOT used:
 * - Autoresponder confirmation email
 * - Domain restriction
 * - Cloudflare Turnstile
 * - File attachments
 * - Webhooks
 */

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type FormData = {
  name: string;
  email: string;
  reason: string;
  relationship: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const hcaptchaSiteKey =
    import.meta.env.VITE_HCAPTCHA_SITEKEY ||
    "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
  const isDevelopment = import.meta.env.DEV;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<HCaptcha>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const errorHeadingRef = useRef<HTMLHeadingElement>(null);

  // Focus management for success/error states
  useEffect(() => {
    if (status === "success" && successHeadingRef.current) {
      successHeadingRef.current.focus();
    } else if (status === "error" && errorHeadingRef.current) {
      errorHeadingRef.current.focus();
    }
  }, [status]);

  const onSubmit = async (data: FormData) => {
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        isDevelopment
          ? "Add VITE_WEB3FORMS_ACCESS_KEY to .env.local to enable contact form submissions."
          : "Online messaging is temporarily unavailable. Please email help@achildsperspective.com.",
      );
      return;
    }

    if (!captchaToken) {
      setStatus("error");
      setErrorMessage("Please complete the verification challenge.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      access_key: accessKey,
      name: data.name,
      email: data.email,
      subject: "New website inquiry | A Child's Perspective",
      from_name: "A Child's Perspective Website",
      reason: data.reason,
      relationship: data.relationship || "Not specified",
      message: data.message,
      "h-captcha-response": captchaToken,
      botcheck: "", // honeypot
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let result;
      try {
        result = await response.json();
      } catch {
        throw new Error("Invalid server response");
      }

      if (response.ok && result.success) {
        setStatus("success");
        reset();
        setCaptchaToken("");
        captchaRef.current?.resetCaptcha();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      setStatus("error");
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          setErrorMessage(
            "Request timed out. Please check your connection and try again.",
          );
        } else {
          setErrorMessage(
            isDevelopment
              ? `Error: ${error.message}`
              : "Your message could not be sent. Please try again.",
          );
        }
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  const handleRetry = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  const handleSendAnother = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  // Success state
  if (status === "success") {
    return (
      <div
        className="warm-card p-8 sm:p-10 space-y-6"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[color:var(--sage-soft)] flex items-center justify-center flex-shrink-0">
            <CheckCircle2
              className="w-6 h-6 text-[color:var(--plum)]"
              aria-hidden
            />
          </div>
          <div>
            <h3
              ref={successHeadingRef}
              tabIndex={-1}
              className="font-display text-[1.6rem] leading-tight outline-none"
            >
              Your message has been sent.
            </h3>
            <p className="mt-3 text-[color:var(--ink-soft)] leading-relaxed">
              Thank you for reaching out. A member of the practice will review
              your message and follow up by email. Please use SimplePractice for
              appointment requests and private care information.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://achildsperspective-jm.clientsecure.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn pill-btn--primary"
          >
            <Calendar className="w-4 h-4" aria-hidden />
            Request an Appointment
            <ArrowUpRight className="w-4 h-4" aria-hidden />
          </a>
          <button
            onClick={handleSendAnother}
            className="pill-btn pill-btn--ghost"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  // Error state
  if (status === "error") {
    return (
      <div
        className="warm-card p-8 sm:p-10 space-y-6"
        role="alert"
        aria-live="assertive"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[color:var(--mauve-soft)] flex items-center justify-center flex-shrink-0">
            <AlertCircle
              className="w-6 h-6 text-[color:var(--plum)]"
              aria-hidden
            />
          </div>
          <div>
            <h3
              ref={errorHeadingRef}
              tabIndex={-1}
              className="font-display text-[1.6rem] leading-tight outline-none"
            >
              Your message could not be sent.
            </h3>
            <p className="mt-3 text-[color:var(--ink-soft)] leading-relaxed">
              {errorMessage || "An unexpected error occurred."}
            </p>
            <p className="mt-3 text-[color:var(--ink-soft)] leading-relaxed">
              Your information has not been cleared. Please try again, or email{" "}
              <a
                href="mailto:help@achildsperspective.com"
                className="text-[color:var(--plum)] hover:underline"
              >
                help@achildsperspective.com
              </a>
              .
            </p>
          </div>
        </div>

        <button onClick={handleRetry} className="pill-btn pill-btn--primary">
          Try again
        </button>
      </div>
    );
  }

  // Form state (idle or submitting)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="warm-card p-8 sm:p-10 space-y-5"
      noValidate
    >
      {/* Name */}
      <Field label="Your name" id="name" required error={errors.name?.message}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          disabled={status === "submitting"}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="contact-input"
          {...register("name", {
            required: "Please enter your name",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
      </Field>

      {/* Email */}
      <Field label="Email" id="email" required error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          disabled={status === "submitting"}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="contact-input"
          {...register("email", {
            required: "Please enter your email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
        />
      </Field>

      {/* Reason */}
      <Field
        label="How can we help?"
        id="reason"
        required
        error={errors.reason?.message}
      >
        <select
          id="reason"
          disabled={status === "submitting"}
          aria-invalid={errors.reason ? "true" : "false"}
          aria-describedby={errors.reason ? "reason-error" : undefined}
          className="contact-input"
          {...register("reason", {
            required: "Please select a reason",
            validate: (value) =>
              value !== "" || "Please select a reason for your inquiry",
          })}
        >
          <option value="">Select a reason</option>
          <option value="Free introductory call">Free introductory call</option>
          <option value="Questions about services">
            Questions about services
          </option>
          <option value="Help choosing a provider">
            Help choosing a provider
          </option>
          <option value="Existing family question">
            Existing family question
          </option>
          <option value="Other general inquiry">Other general inquiry</option>
        </select>
      </Field>

      {/* Relationship (optional) */}
      <Field
        label="Relationship to the child"
        id="relationship"
        hint="Optional"
      >
        <input
          id="relationship"
          type="text"
          disabled={status === "submitting"}
          className="contact-input"
          {...register("relationship")}
        />
      </Field>

      {/* Privacy Warning */}
      <div
        className="rounded-xl border border-[color:var(--hairline)] bg-[color:var(--ivory-2)] p-4"
        role="note"
      >
        <p className="text-[0.85rem] text-[color:var(--ink-soft)] leading-relaxed">
          <strong className="text-[color:var(--plum-ink)]">
            Please share only a brief, general reason for reaching out.
          </strong>{" "}
          Do not include diagnoses, medical records, treatment details, or other
          sensitive health information. Private appointment information can be
          shared through the secure SimplePractice portal.
        </p>
      </div>

      {/* Message */}
      <Field
        label="Brief message"
        id="message"
        required
        error={errors.message?.message}
      >
        <textarea
          id="message"
          rows={5}
          disabled={status === "submitting"}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="contact-input resize-none"
          {...register("message", {
            required: "Please enter a message",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
            maxLength: {
              value: 2000,
              message: "Message must not exceed 2000 characters",
            },
          })}
        />
      </Field>

      {/* hCaptcha */}
      <div className="flex flex-col gap-2">
        <HCaptcha
          ref={captchaRef}
          sitekey={hcaptchaSiteKey}
          onVerify={(token) => setCaptchaToken(token)}
          onExpire={() => setCaptchaToken("")}
          onError={() => setCaptchaToken("")}
        />
        {status === "error" && !captchaToken && (
          <p className="text-[0.85rem] text-[color:var(--plum)]" role="alert">
            Please complete the verification challenge
          </p>
        )}
      </div>

      {/* Honeypot (hidden) */}
      <input
        type="checkbox"
        name="botcheck"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Submit */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="pill-btn pill-btn--primary w-full sm:w-auto"
          aria-live="polite"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </>
          )}
        </button>
        <p className="text-[0.78rem] text-[color:var(--ink-soft)]/80">
          This form is for general questions only.
        </p>
      </div>

      {/* Screen reader status */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {status === "submitting" && "Sending your message..."}
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  hint,
  required,
  error,
  children,
}: {
  label: string;
  id: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[0.85rem] font-medium text-[color:var(--plum-ink)]"
      >
        {label}
        {required && (
          <span className="text-[color:var(--plum)]" aria-label="required">
            {" "}
            *
          </span>
        )}
        {hint && (
          <span className="ml-2 text-[color:var(--ink-soft)]/70 font-normal">
            {hint}
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="text-[0.85rem] text-[color:var(--plum)] flex items-start gap-2"
          role="alert"
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}
