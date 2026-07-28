import { useState, useEffect } from "react";
import "@fontsource/kaisei-decol"; // Defaults to weight 400

function ExternalCTALink({ href, children = "Join the Newsletter" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-full
        block
        text-center
        py-3
        px-5
        rounded-full
        bg-[#8C004A]
       text-[#D4A538]
        font-medium
        tracking-wide
        shadow-sm
        active:scale-[0.98]
        transition
        duration-200
        ease-out
      "
    >
      {children}
    </a>
  );
}

export default function HomeDecorInterestForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.ml) {
        window.ml("account", "YOUR_ACCOUNT_ID"); // replace with your real ID
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-[#faf7f3] text-[#3a2f2a] font-kaisei">
      <div className="max-w-sm w-full text-center">
        <div className="relative inline-block">
          <img
            className=" mx-auto w-40 h-40 "
            src="/tandch.svg"
            alt="Townsend & Cherry™ Home Decor"
          />
          <span className=" absolute bottom-0 right-0 text-[10px] text-[#8C004A]">
            TM
          </span>
        </div>
        {/* <h2 className="italic font-light">Townsend <span className="text-[#D4A538]">&</span> Cherry™</h2> */}

        <p className="text-sm leading-relaxed  mt-10">
          Every piece begins at my sewing table — and you’re invited into the
          process. Join the newsletter and Instagram for first looks at{" "}
          <span className="text-[#8C004A] font-bold">
            new designs, sample sales,{" "}
          </span>{" "}
          and the next chapter of
        </p>
        <div className=" font-bold mb-10 text-[#8C004A] mt-5 text-2xl">
          Townsend <span className="text-[#D4A538] ">&</span> Cherry™
        </div>

        <ExternalCTALink
          className="mt-32 text-2xl"
          href="https://townsendandcherry.etsy.com"
        >
          Shop Our Latest Looks!
        </ExternalCTALink>
        <div className="mt-5" />
        <ExternalCTALink href="https://preview.mailerlite.io/forms/2131842/180033246301521319/share">
          Join Our Newsletter!
        </ExternalCTALink>
        <div className="mt-5" />

        <ExternalCTALink
          className="mt-32"
          href="https://www.instagram.com/tandcherry"
        >
          Follow Our Instagram!
        </ExternalCTALink>

        <p className="text-xs mt-6 opacity-70">
          No spam. Just thoughtful updates from the sewing table.
        </p>
      </div>
    </div>
  );
}

{
  /* <div className="bg-[#F9F6F2] min-h-screen flex items-center justify-center px-4"> */
}
// const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);

//     try {
//       const response = await fetch("https://app.heysheet.in/api/s/a2E2CARw6J", {
//         method: "POST",
//         body: data,
//       });
//       if (response.ok) {
//         setSubmitted(true);
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//     }
//   };
//   <div className="max-w-md w-full bg-[#8C004A] text-white p-6 shadow-none">
//     {!submitted ? (
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="text-center">
//           <h1 className="text-4xl font-kaisei text-[#D4A538] font-light">
//             Townsend & Cherry
//           </h1>
//           <p className="text-sm uppercase tracking-wide text-[#D4A538] mt-2 font-kaisei">
//             — HOME DECOR —
//             <div>
//   {/* Opens in a new tab with security best practices */}
//   <a
//     href="https://preview.mailerlite.io/forms/2131842/180033246301521319/share"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Visit Example.com
//   </a>
// </div>
//           </p>
//         </div>

//         <p className="text-sm md:text-base font-normal text-[#C2BBBB] leading-snug tracking-wide max-w-prose mx-auto mt-2">
//           Welcome to Townsend & Cherry HOME DECOR, a small but mighty
//           workroom nestled in the heart of Seattle. We specialize in
//           crafting custom decorative throw pillow cases.
//         </p>

//         <p className="text-sm md:text-base font-normal text-[#C2BBBB]  leading-snug tracking-wide max-w-prose mx-auto mt-2">
//           We usually work with local home decor shops—adding handcrafted
//           charm to retail spaces around the city. But now we’re trying
//           something new: offering custom pillow cases to individuals using
//           their own fabric. We’re testing the waters to see if this feels
//           helpful and worth growing.
//         </p>
//         <p className="text-sm md:text-base font-normal text-[#C2BBBB]  leading-snug tracking-wide max-w-prose mx-auto mt-2">
//           Whether it’s for your home, a client, or a small-batch project,
//           we’re exploring if this service is helpful and worth growing.
//         </p>

//         <p className="text-sm md:text-base font-normal text-[#C2BBBB] leading-snug tracking-wide max-w-prose mx-auto mt-2">
//           Curious how it works? Fill out the form below—we’d love to hear
//           from you.
//         </p>

//         <div>
//           <label className="block text-sm mb-1 text-[#C2BBBB]">Name</label>
//           <input
//             name="Name"
//             type="text"
//             required
//             className="w-full px-4 py-2 rounded bg-[#A33A6A] text-white placeholder:text-[#8C004A]/60 focus:outline-none focus:ring-2 focus:ring-white"
//           />
//         </div>

//         <div>
//           <label className="block text-sm mb-1 text-[#C2BBBB]">
//             Email Address
//           </label>
//           <input
//             name="Email"
//             type="email"
//             required
//             className="w-full px-4 py-2 rounded bg-[#A33A6A] text-white placeholder:text-[#8C004A]/60 focus:outline-none focus:ring-2 focus:ring-white"
//           />
//         </div>

//         <div>
//           <label className="block text-sm mb-2 text-[#C2BBBB]">
//             Would you be interested in having custom pillow cases made from
//             your own fabric?
//           </label>
//           <select
//             name="Interested"
//             required
//             className="w-full px-4 py-2 rounded bg-[#A33A6A] text-white focus:outline-none focus:ring-2 focus:ring-white"
//           >
//             <option value="Yes, definitely!">Yes, definitely!</option>
//             <option value="Maybe—I'd like to learn more">
//               Maybe—I'd like to learn more
//             </option>
//             <option value="Not right now">Not right now</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm mb-2 text-[#C2BBBB]">
//             Who are you creating pillows for?
//           </label>
//           <select
//             name=" Who are you creating pillows for?"
//             required
//             className="w-full px-4 py-2 rounded bg-[#A33A6A] text-white focus:outline-none focus:ring-2 focus:ring-white"
//           >
//             <option value=" Personal use">
//               Personal use (for your home)
//             </option>
//             <option value="Clients ">
//               Clients (as an interior designer)
//             </option>
//             <option value="Retail">Retail (for a shop or showroom)</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm mb-2 text-[#C2BBBB]">
//             Do you already have fabric you'd like to use?
//           </label>
//           <select
//             name=" Do you already have fabric you'd like to use?"
//             required
//             className="w-full px-4 py-2 rounded bg-[#A33A6A] text-white focus:outline-none focus:ring-2 focus:ring-white"
//           >
//             <option value="Yes, I have fabric ready">
//               Yes, I have fabric ready
//             </option>
//             <option value="Not yet, but I have something in mind">
//               Not yet, but I have something in mind
//             </option>
//             <option value="No">No</option>
//           </select>
//         </div>

//         <label htmlFor="message" className="block text-sm text-[#C2BBBB]">
//           {" "}
//           Ask us anything. We'd love to hear from you!
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           rows="4"
//           className="w-full p-2 border border-[#CFCACA] rounded-md focus:ring-[#D4A538] focus:outline-none text-[#8C004A] bg-[#F9F6F2]"
//         />

//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             name="Updates"
//             className="accent-white mr-2"
//           />
//           <label className="text-sm text-[#C2BBBB]">
//             Sign up for future updates!
//           </label>
//         </div>

//         <button
//           type="submit"
//           className="w-full hover:bg-[#CFCACA] text-[#8C004A] py-2 rounded bg-[#D4A538] transition-colors"
//         >
//           Submit
//         </button>
//       </form>
//     ) : (
//       <div className="text-center font-kaisei space-y-4">
//         <h2 className="text-xl font-semibold">Thank you!</h2>
//         <p className="text-white/80">
//           We appreciate your interest in Townsend & Cherry Home Decor. We'll
//           be in touch soon.
//         </p>
//       </div>
//     )}
//   </div>
// </div>
