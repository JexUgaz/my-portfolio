import { useState } from "react";

const SendMessageForm = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);

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

      if (res.ok) {
        setStatusMessage("✅ Message sent successfully!");
        setStatusType("success");
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("❌ Oops! Something went wrong.");
      setStatusType("error");
    }
  };

  // TODO: Falta poner una imagen de Correo Enviado exitosamente o algo así...
  // TODO: Hacer un Loading de cargar...
  // TODO: Falta un Título de Send me a Message
  // TODO: Footer falta & Responsive
  return (
    <div className="w-full p-6 bg-white/10 rounded-2xl shadow-lg">
      <form
        id="contactForm"
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-white/20 text-white px-4 py-2 rounded-lg placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-white/20 text-white px-4 py-2 rounded-lg placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="bg-white/20 text-white px-4 py-2 rounded-lg placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-accent"
        ></textarea>
        <button
          type="submit"
          className="bg-accent text-white font-semibold py-2 rounded-lg hover:bg-accent/80 transition"
        >
          Send Message
        </button>
      </form>
      {statusMessage && (
        <p
          className={`mt-4 text-center text-sm font-medium ${
            statusType === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {statusMessage}
        </p>
      )}{" "}
    </div>
  );
};

export default SendMessageForm;
