import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { sanitize } from "../utils/sanitize";

const NewsletterForm = ({ status, message, onValidated }) => {

  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  return (
    <div>
      <div
        className="flex h-fit items-stretch mt-12 sm:max-w-md mb-8 sm:flex sm:items-center bg-[#4E4B66] rounded-xl pr-4">
        <input
          className="bg-[#4E4B66] rounded-lg text-base leading-none text-white p-3 w-4/5 border border-transparent focus:outline-none"
          type="email"
          placeholder="Enter your email."
          onKeyUp={(event) => handleInputKeyEvent(event)}
          onChange={(event) => setEmail(event?.target?.value ?? "")}
        />
        <button
          className="flex w-32 my-3 bg-[#A996FF] rounded-xl p-3 pt-[15px] text-base font-normal leading-none text-[#4E4B66]  focus:outline-none"
          type="submit"
          onChange={(event) => setEmail(event?.target?.value ?? "")}
        >
          Subscribe
          <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
        </button>
      </div>


      <div className="min-h-42px">
        {"error" === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;