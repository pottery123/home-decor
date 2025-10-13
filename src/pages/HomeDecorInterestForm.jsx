import { useState } from "react";
import "@fontsource/kaisei-decol"; // Defaults to weight 400

export default function HomeDecorInterestForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    try {
      const response = await fetch("https://app.heysheet.in/api/s/a2E2CARw6J", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="bg-[#F9F6F2] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#8C004A] text-white p-6  shadow-none">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <h1 className="text-4xl font-kaisei text-[#C2BBBB] font-light">
                Townsend <span className="text-[#D4A538]">&</span> Cherry
              </h1>
              <p className="text-sm uppercase tracking-wide text-[#C2BBBB] mt-2 font-kaisei">
                — HOME DECOR —
              </p>
            </div>

            <p className="text-sm md:text-base font-normal text-[#D4A538] text-center leading-snug tracking-wide max-w-prose mx-auto mt-2">
              Interested in custom pillow cases made from your own fabric? Let
              us know—and sign up for future updates.
            </p>

            <div>
              <label className="block text-sm mb-1 text-[#C2BBBB] ">Name</label>
              <input
                name="Name"
                type="text"
                required
                className="w-full px-4 py-2 rounded bg-[#A33A6A] text-white placeholder:text-[#8C004A]/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-[#C2BBBB] ">
                Email Address
              </label>
              <input
                name="Email"
                type="email"
                required
                className="w-full px-4 py-2 rounded bg-[#A33A6A] text-white placeholder:text-[#8C004A]/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-[#C2BBBB] ">
                Would you use this service?
              </label>
              <select
                name="Interested"
                required
                className="w-full px-4 py-2 rounded bg-[#A33A6A] text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="Maybe">Maybe</option>
                <option value="No">No</option>
              </select>
            </div>

            <label for="message" class="block text-black bg-[#A33A6A] font-medium mb-1">
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us about how you might use this service..."
              class="w-full p-2 border border-[#CFCACA] rounded-md focus:ring-[#D4A538] focus:outline-none text-[#8C004A] bg-[#F9F6F2]"
            />

            <div className="flex items-center">
              <input
                type="checkbox"
                name="Updates"
                className="accent-white mr-2"
              />
              <label className="text-sm text-[#C2BBBB] ">
                Sign up for future updates!
              </label>
            </div>

            <button
              type="submit"
              className="w-full hover:bg-[#CFCACA] text-[#8C004A] py-2 rounded bg-[#D4A538]  transition-colors"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center font-kaisei">
            <h2 className="text-xl font-semibold mb-2 ">Thank you!</h2>
            <p className="text-white/80">
              We appreciate your interest in Townsend & Cherry Home Decor. We'll
              be in touch soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
