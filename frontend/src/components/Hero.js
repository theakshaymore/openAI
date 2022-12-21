import React from "react";
import openAI from "../imgs/openAi.png";

function Hero() {
  return (
    <div className="my-hero mt-5">
      <div class="row">
        <div class="col-sm-6">
          <div class="card border-0">
            <div class="card-body">
              <h5 class="card-title text-light display-2 fw-bold">
                Image Generator
              </h5>
              <p class="card-text text-light text-muted fst-italic font-monospace">
                Using
              </p>
              <a
                href="https://openai.com/blog/dall-e/"
                class="btn btn-secondary col-4 text-start fw-bold "
                target="_blank"
              >
                OpenAI
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card border-0">
            <div class="card-body">
              <img src={openAI} alt="OpenAi" className="img-fluid rounded-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
