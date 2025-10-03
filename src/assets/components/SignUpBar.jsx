import { useState } from "react";

export default function SignUpBar() {
  const [isClosed, setIsClosed] = useState(true);
  // if (isClosed) {
  //   return null;
  // }
  return (
    <>
      {isClosed && (
        <div className="bg-black text-white py-2 px-4 text-center text-sm relative">
          <p>
            Sign up and get 20% off to your first order.{" "}
            <a href="#" className="underline font-medium">
              Sign Up Now
            </a>
          </p>
          <button
            onClick={() => {
              setIsClosed(!isClosed);
            }}
            className="absolute right-4 top-2 text-white"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
