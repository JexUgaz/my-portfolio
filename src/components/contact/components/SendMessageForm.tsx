import { useState } from "react";
import EmailOutLineIcon from "./EmailOutlineIcon";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import successAnimation from "@/assets/lottie/success.lottie";
import LoadingSpinnerIcon from "./LoadingSpinnerIcon";

interface MailStatus {
  state: "success" | "error" | "empty" | "loading";
  error?: string;
}

const SendMessageForm = () => {
  const [mailState, setMailState] = useState<MailStatus>({
    state: "empty",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);
      setMailState({ state: "loading" });

      const res = await fetch(
        "https://formsubmit.co/ajax/loammi.jezreel@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!res.ok) throw new Error("Failed to send message");

      setMailState({ state: "success" });
      form.reset();
    } catch (error) {
      setMailState({
        state: "error",
        error: "Oops! Something went wrong. Try again in a moment.",
      });
    }
  };

  const showSuccessVideo = mailState.state === "success";
  const isLoading = mailState.state === "loading";
  const hasAnError = mailState.state === "error";

  return (
    <div className="w-full p-6 bg-white/10 rounded-2xl shadow-lg">
      {!showSuccessVideo && (
        <>
          <div className="flex justify-center items-center gap-2">
            <EmailOutLineIcon className="size-8" />
            <h2 className="text-2xl text-center font-bold">
              Send Me a Message
            </h2>
          </div>
          <form
            id="contactForm"
            className="flex flex-col gap-4 mt-5"
            onSubmit={handleSubmit}
          >
            <FormInput
              id="name"
              label="Name"
              name="name"
              placeholder="Your Name"
              disabled={isLoading}
            />

            <FormInput
              id="email"
              label="Email"
              type="email"
              name="email"
              placeholder="Your Email"
              disabled={isLoading}
            />
            <FormTextArea
              id="message"
              label="Message"
              placeholder="Your Message"
              name="message"
              rows={5}
              disabled={isLoading}
            />

            <button
              type="submit"
              className={`bg-accent/70 text-white font-semibold py-2 rounded-lg hover:bg-accent/50 transition flex justify-center gap-2 ${
                isLoading ? "opacity-70 cursor-wait" : "hover:bg-accent/50"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
              {isLoading && <LoadingSpinnerIcon className="size-5" />}
            </button>
            {hasAnError && (
              <p className="mt-3 text-red-500 text-sm font-bold animate-pulse text-center">
                {mailState.error}
              </p>
            )}
          </form>
        </>
      )}
      {showSuccessVideo && (
        <div className="relative">
          <DotLottieReact
            src={successAnimation}
            className="-translate-y-8"
            autoplay
          />
          <p
            className="absolute bottom-8 left-[50%] -translate-x-[50%] text-xl font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Message sent successfully!
          </p>
        </div>
      )}
    </div>
  );
};

export default SendMessageForm;
