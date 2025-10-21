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
      <div className="max-w-md w-full bg-[#8C004A] text-white p-6 shadow-none">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <h1 className="text-4xl font-kaisei text-[#D4A538] font-light">
                Townsend & Cherry
              </h1>
              <p className="text-sm uppercase tracking-wide text-[#D4A538] mt-2 font-kaisei">
                — HOME DECOR —
              </p>
            </div>

            <p className="text-sm md:text-base font-normal text-[#C2BBBB] leading-snug tracking-wide max-w-prose mx-auto mt-2">
              Welcome to Townsend & Cherry HOME DECOR, a small but mighty
              workroom nestled in the heart of Seattle. We specialize in
              crafting custom decorative throw pillow cases.
            </p>

            <p className="text-sm md:text-base font-normal text-[#C2BBBB]  leading-snug tracking-wide max-w-prose mx-auto mt-2">
              We usually work with local home decor shops—adding handcrafted
              charm to retail spaces around the city. But now we’re trying
              something new: offering custom pillow cases to individuals using
              their own fabric. We’re testing the waters to see if this feels
              helpful and worth growing.
            </p>
            <p className="text-sm md:text-base font-normal text-[#C2BBBB]  leading-snug tracking-wide max-w-prose mx-auto mt-2">
              Whether it’s for your home, a client, or a small-batch project,
              we’re exploring if this service is helpful and worth growing.
            </p>

            <p className="text-sm md:text-base font-normal text-[#C2BBBB] leading-snug tracking-wide max-w-prose mx-auto mt-2">
              Curious how it works? Fill out the form below—we’d love to hear
              from you.
            </p>

            <div>
              <label className="block text-sm mb-1 text-[#C2BBBB]">Name</label>
              <input
                name="Name"
                type="text"
                required
                className="w-full px-4 py-2 rounded bg-[#A33A6A] text-white placeholder:text-[#8C004A]/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-[#C2BBBB]">
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
              <label className="block text-sm mb-2 text-[#C2BBBB]">
                Would you be interested in having custom pillow cases made from
                your own fabric?
              </label>
              <select
                name="Interested"
                required
                className="w-full px-4 py-2 rounded bg-[#A33A6A] text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option value="Yes, definitely!">Yes, definitely!</option>
                <option value="Maybe—I'd like to learn more">
                  Maybe—I'd like to learn more
                </option>
                <option value="Not right now">Not right now</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-[#C2BBBB]">
                Who are you creating pillows for?
              </label>
              <select
                name=" Who are you creating pillows for?"
                required
                className="w-full px-4 py-2 rounded bg-[#A33A6A] text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option value=" Personal use">
                  Personal use (for your home)
                </option>
                <option value="Clients ">
                  Clients (as an interior designer)
                </option>
                <option value="Retail">Retail (for a shop or showroom)</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-[#C2BBBB]">
                Do you already have fabric you'd like to use?
              </label>
              <select
                name=" Do you already have fabric you'd like to use?"
                required
                className="w-full px-4 py-2 rounded bg-[#A33A6A] text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option value="Yes, I have fabric ready">
                  Yes, I have fabric ready
                </option>
                <option value="Not yet, but I have something in mind">
                  Not yet, but I have something in mind
                </option>
                <option value="No">No</option>
              </select>
            </div>

            <label htmlFor="message" className="block text-sm text-[#C2BBBB]">
              {" "}
              Ask us anything. We'd love to hear from you!
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-[#CFCACA] rounded-md focus:ring-[#D4A538] focus:outline-none text-[#8C004A] bg-[#F9F6F2]"
            />

            <div className="flex items-center">
              <input
                type="checkbox"
                name="Updates"
                className="accent-white mr-2"
              />
              <label className="text-sm text-[#C2BBBB]">
                Sign up for future updates!
              </label>
            </div>

            <button
              type="submit"
              className="w-full hover:bg-[#CFCACA] text-[#8C004A] py-2 rounded bg-[#D4A538] transition-colors"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center font-kaisei space-y-4">
            <h2 className="text-xl font-semibold">Thank you!</h2>
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
