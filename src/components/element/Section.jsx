import React from "react";
// import { Link } from 'react-router-dom'

export default function Section() {
  return (
    <div className="container mt-5  section">
      <div className="row">
        <div className="col-md-3 text-center ">
          <h3>Financial institutions</h3>
          <p>
            Banks, investment firms, and other financial institutions, are
            harnessing blockchain to exchange information and assets more
            securely and cost-effectively.
          </p>
        </div> 
        <div className="col-md-3 text-center ">
          <h3>Enterprises</h3>
          <p>
            Blockchain enables companies operating in multiple markets to
            exchange information and assets more securely and cost-effectively
            for uses as varied as cross-border payments, supply chain
            challenges, or raising capital. Partners
          </p>
        </div>

        <div className="col-md-3 text-center">
          <h3>Partners</h3>
          <p>
            Whether you’re a platform provider, an independent software vendor,
            or a technology consultant, chances are your clients are drawn to
            the benefits blockchain promises but daunted at the complexity and
            specialist knowledge required to realise them. We’re here to help.
          </p>
        </div>

        <div className="col-md-3 text-center">
          <h3>Developer</h3>
          <p>
            Are you one of the few developers in the world who understands all
            the complexities of blockchain? Don’t worry. With Quant, you don’t
            need to be a distributed ledger technology expert to build
            game-changing blockchain-agnostic applications.
          </p>
        </div>
      </div>
    </div>
  );
}
