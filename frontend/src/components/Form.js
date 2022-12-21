import React, { useState, useEffect } from "react";

function Form() {
  const [prompt, setPrompt] = useState("");
  //   const [size, setSize] = useState("256x256");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");

  const baseUrl = process.env.REACT_APP_BASE_URL;

  // https://openaiimagegenerator.vercel.app/

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt === "") {
      setError("Description can not be empty");
    } else {
      generateImage(prompt);
    }
  };

  const generateImage = async (prompt) => {
    setError("");
    setLoading(true);
    setFinalUrl("");
    try {
      const response = await fetch(`${baseUrl}/openai/generateimage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      if (!response.ok) {
        setLoading(false);
        setError("That image could not be generated");
        throw new Error("That image could not be generated");
      }

      const data = await response.json();
      setPrompt("");
      setError("");
      setLoading(false);
      setFinalUrl(data.data);
    } catch (error) {
      console.error();
    }
  };

  const showImage = () => {
    return finalUrl && <img src={finalUrl} alt={prompt} id="image" />;
  };

  const showAlert = () => {
    return (
      error && (
        <div
          class="alert alert-danger text-danger bg-dark border-0 mt-1"
          role="alert"
        >
          {error}
        </div>
      )
    );
  };

  const showSpinner = () => {
    return (
      loading && (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )
    );
  };

  return (
    <div className="my-form mt-5 pt-5 mb-5">
      <main>
        <section class="card card-dark text-light border-0 shadow-lg">
          <form id="image-form" onSubmit={handleSubmit}>
            {/* prompt */}
            <label class="form-label">
              Start with a detailed description...
            </label>
            <input
              type="text"
              id="prompt"
              class="form-control text-light border-top-0 border-start-0 border-end-0 border-bottom-1 border-secondary bg-dark shadow-lg"
              placeholder="An Impressionist oil painting of sunflowers in a purple vase.."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            {/* <div class="form-control">
              <input
                type="text"
                id="prompt"
                placeholder="Enter Text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div> */}
            {/* size */}
            {/* <div class="form-control">
              <select
                name="size"
                id="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value=""></option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div> */}
            {/* btn */}
            {showAlert()}
            <button
              type="submit"
              class="btn btn-secondary col-3  text-start fw-bold mt-4"
            >
              Generate Image <i class="bi bi-arrow-right bg-secondary" />
            </button>
          </form>
        </section>

        <section class="image">
          <div className="conatiner-sm mt-5">
            <div className="my-op ">
              {showSpinner()}
              {showImage()}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Form;
