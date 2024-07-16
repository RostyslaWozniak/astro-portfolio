import { Loader2Icon } from "lucide-react";
import { useState } from "react";

export const Subscription = () => {
  const [loading, setLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz6gnocthQdJamtYU0lgGeVv4WnXPbVQma2bjCDfbeCxTnj51Fgfm4HlYTnexUcCz0U/exec",
        { method: "POST", body: "hello" },
      ).then((res) => res);
      if (response.ok) setIsSended(true);
      console.log(response);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {isSended ? (
        <span>Thank You!</span>
      ) : (
        <form name="submit-to-google-sheet" onSubmit={onSubmit}>
          <input name="email" type="email" placeholder="Email" required />
          <button type="submit">
            {loading ? <Loader2Icon className="animate-spin" /> : "Send"}
          </button>
        </form>
      )}
    </>
  );
};
