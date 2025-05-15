import React from "react";
import '../FotterCss/Tearms.css'

const Terms = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>Last updated: May 15, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Bloomify! By accessing our website and placing an order,
          you agree to be bound by the following terms and conditions. Please
          read them carefully.
        </p>
      </section>

      <section>
        <h2>2. Orders and Payments</h2>
        <p>
          All orders placed on our website are subject to product availability
          and confirmation of the order price. We reserve the right to refuse or
          cancel any order.
        </p>
      </section>

      <section>
        <h2>3. Delivery Policy</h2>
        <p>
          We aim to deliver your flowers on time. However, delays due to
          unforeseen circumstances are not our responsibility. You will be
          notified in case of any delays.
        </p>
      </section>

      <section>
        <h2>4. Return & Refund Policy</h2>
        <p>
          Due to the perishable nature of flowers, we do not offer refunds once
          an order has been delivered. In case of a wrong or damaged product,
          please contact us within 24 hours.
        </p>
      </section>

      <section>
        <h2>5. Use of Website</h2>
        <p>
          You agree not to misuse this website or assist anyone in doing so.
          Your use of the website must comply with applicable laws.
        </p>
      </section>

      <section>
        <h2>6. Changes to Terms</h2>
        <p>
          We may revise these Terms and Conditions at any time without notice.
          It is your responsibility to review them periodically.
        </p>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto:support@bloomify.com">support@bloomify.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Terms;
