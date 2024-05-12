import React, { useState } from "react";
import styles from "./Modal.module.css";
import leafImag from "../utils/logo.png";

const PrivacyPolicy = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)} className={styles.account}>
        Privacy Policy
      </button>

      {showModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div
            className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${styles.model}`}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">
                  Sehalo
                  <span>
                    <img
                      src={leafImag}
                      alt="leafImage"
                      className={styles.leafImag}
                    />
                  </span>
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body" style={{ color: "black" }}>
                <p>
                  Last updated on: 1St April, 2024.
                  <h4> 1. GENERAL </h4>
                  A. This Mobile Application with the name of Sehalo
                  ("App/Sehalo") is operated by Belinvo Private
                  Limited("/We/Our/Us"). We are committed to protecting and
                  respecting your privacy. We do collect your personal
                  information and process your personal data in accordance with
                  the IT Act, 2000 (21 of 2000) and other national and state
                  laws that relate to the processing of personal data. Please
                  read the following carefully to understand our views and
                  practices regarding your personal data. <br /> <br />
                  B. Downloading, accessing, or otherwise using the App
                  indicates that you have read this Privacy Policy and consent
                  to its terms. If you do not consent to the terms of this
                  Privacy Policy, do not proceed to download, access, or
                  otherwise use the App. <br /> <br />
                  C. We collect your personal information in order to provide
                  and continually improve our products and services. <br />{" "}
                  <br />
                  D. Our privacy policy is subject to change at any time without
                  notice. To make sure you are aware of any changes, please
                  review this policy periodically. The last updated date can be
                  found at the beginning of this policy. <br /> <br />
                  E. All partner firms and any third-party working with or for
                  Us, and who have access to personal information, will be
                  expected to read and comply with this policy.
                  <h4>2. HOW WE COLLECT THE INFORMATION </h4>
                  A. From you directly and through this App: We may collect
                  information through the App when you visit. The data we
                  collect depends on the context of your interactions with our
                  App. <br /> <br />
                  B. Through business interaction: We may collect information
                  through business interaction with you or your employees.{" "}
                  <br /> <br />
                  C. From other sources: We may receive information from other
                  sources, such as public databases; joint marketing partners;
                  social media platforms; or other third parties such as: <br />{" "}
                  <br />
                  I. Updated delivery and address information from our carriers
                  or other third parties, which we use to correct our records
                  and deliver your next purchase or communication more easily.{" "}
                  <br /> <br />
                  II. Information about your interactions with the products and
                  services offered by our subsidiaries. <br /> <br />
                  <h4>3. INFORMATION WE COLLECT </h4>
                  A. We collect information primarily to provide better services
                  to all of our customers. <br /> <br />
                  B. We collect the following information from you when you use
                  or sign up on our App: <br />
                  Name, phone number, email address, country etc., <br /> <br />
                  C. When you visit our App, some information is automatically
                  collected. This may include information such as the type of
                  mobile device, Operating System (OS) running on your device,
                  Internet Protocol (IP) address, unique user ID, access times,
                  device type, and language. We also collect information about
                  how you use Our products or services. <br /> <br />
                  D. We automatically collect purchase or content use history,
                  which we sometimes aggregate with similar information from
                  other customers to create features such as Best Seller, Top
                  Rated, etc... <br /> <br />
                  E. The information about your usage of the App, including
                  crash logs and usage statistics. <br /> <br />
                  F. Information about the location of your device, including
                  geolocation information. <br /> <br />
                  G. We automatically collect information using "Cookies".
                  Cookies are small data files stored on your device. Among
                  other things, cookies help us to improve our App, our
                  marketing activities, and your experience. We use cookies to
                  see which areas and features are popular and to count visits
                  to our App. <br /> <br />
                  H. By using this App, you are agreeing that We may advertise
                  your feedback on the App and other marketing materials. <br />{" "}
                  <br />
                  I. We will retain your information as long as we require this
                  to provide you with the goods and services and for such period
                  as mandated by the laws concerned. <br /> <br />
                  J. If you opt to receive marketing correspondence from us,
                  subscribe to our mailing list or newsletters, enter into any
                  of our competitions or provide us with your details at
                  networking events, we may use your personal data for our
                  legitimate interests in order to provide you with details
                  about our goods, services, business updates and events. <br />{" "}
                  <br />
                  <h4>4. HOW WE USE INFORMATION </h4>
                  A. We use the information we collect primarily to provide,
                  maintain, protect, and improve our current products and
                  services. <br /> <br />
                  B. We use the information collected through this App as
                  described in this policy and we may use your information to:{" "}
                  <br /> <br />
                  I. Improve our services, App and how we operate our
                  businesses. II. Understand and enhance your experience using
                  our App, products and services. III. Personalize our products
                  or services and make recommendations. IV. Provide and deliver
                  the products and services you request. V. Process, manage,
                  complete, and account for transactions. VI. Provide customer
                  support and respond to your requests, comments, and inquiries.
                  VII. Create and manage the online accounts you manage on our
                  App. VIII. Send you related information, including
                  confirmations, invoices, technical notices, updates, security
                  alerts and support and administrative messages. IX.
                  Communicate with you about promotions, upcoming events, and
                  news about products and services. X. We may process your
                  personal information without your knowledge or consent where
                  required by applicable law or regulation for the purposes of
                  verification of identity or for prevention, detection, or
                  investigation, including of cyber incidents, prosecution, and
                  punishment of offences. XI. Protect, investigate, and deter
                  against fraudulent, unauthorized, or illegal activity.
                  <h4>5. DATA TRANSFER </h4>
                  A. Information about our users is an important part of our
                  business and we take due care. <br /> <br />
                  B. We share your data with your consent to complete any
                  transaction or provide any product or service you have
                  requested or authorized. We also share data with our
                  affiliates and subsidiaries, with vendors working on our
                  behalf. <br /> <br />
                  C. We may employ other companies and individuals to perform
                  functions on our behalf. The functions include fulfilling
                  orders for products or services, delivering packages, sending
                  postal mail and e-mail, removing repetitive information from
                  customer lists, providing marketing assistance, providing
                  search results and links (including paid listings and links),
                  processing payments, transmitting content, scoring credit
                  risk, and providing customer service. <br /> <br />
                  D. These third-party service providers have access to personal
                  information needed to perform their functions but may not use
                  it for other purposes. Further, they must process the personal
                  information in accordance with this Privacy Policy and as
                  permitted by applicable data protection laws. <br /> <br />
                  E. We release accounts and other personal information when we
                  believe it is appropriate to comply with the law, enforce or
                  apply our conditions of use, and other agreements, and protect
                  the rights, property or safety of Us, our users, or others.
                  This includes exchanging information with other companies and
                  organizations for fraud protection and credit risk reduction.
                  <h4>6. DATA SECURITY </h4>
                  A. We take due care to protect customer data. Technical
                  measures are in place to prevent unauthorized or unlawful
                  access to data and against accidental loss or destruction of,
                  or damage to the data. The employees who are dealing with the
                  data have been trained to protect the data from any illegal or
                  unauthorized usage. <br /> <br />
                  B. We follow the Payment Card Industry Data Security Standard
                  (PCI DSS) when handling branded credit cards from the major
                  card schemes. <br /> <br />
                  C. We maintain physical, electronic, and procedural safeguards
                  in connection with the collection, storage, and disclosure of
                  personal customer information. <br /> <br />
                  D. We take reasonable steps to help protect your personal
                  information in an effort to prevent loss, misuse, unauthorized
                  access, disclosure alteration and destruction. It is your
                  responsibility to protect your usernames and passwords to help
                  prevent anyone from accessing or abusing your accounts and
                  services. You should not use or reuse the same passwords you
                  use with other accounts as your password for our services.{" "}
                  <br /> <br />
                  E. It is important for you to protect against unauthorized
                  access to your password, your devices, and applications. Be
                  sure to sign off when you finish using a non personal device.{" "}
                  <br /> <br />
                  F. The information you provide to us is shared on our secure
                  servers. We have implemented appropriate physical, technical
                  and organizational measures designed to secure your
                  information against accidental loss and unauthorized access,
                  use, alteration, or disclosure. In addition, we limit access
                  to personal data to those employees, agents, contractors, and
                  other third parties that have a legitimate business need for
                  such access. <br /> <br />
                  G. Information collected from you will be stored for such
                  period as required to complete the transaction entered into
                  with you or such period as mandated under the applicable laws.{" "}
                  <br /> <br />
                  <h4>7. LINKS TO THIRD-PARTY SITES/APPS </h4>
                  Our App may, from time to time, contain links to and from
                  other Apps/Websites of third parties. Please note that if you
                  follow a link to any of these Apps/Websites, such
                  Apps/Websites will apply different terms to the collection and
                  privacy of your personal data, and we do not accept any
                  responsibility or liability for these policies. When you leave
                  our Site, we encourage you to read the privacy policy of every
                  App/Website you visit.
                  <h4>8. SOCIAL NETWORK PLUGINS </h4>
                  This App incorporates plugins and/or buttons for social
                  networks, in order to allow easy sharing on your favourite
                  social networks. These plugins are programmed so as not to set
                  any cookies when assessing the page to safeguard the privacy
                  of users. Cookies may be set, if you make voluntary use of the
                  plugin. The collection and use of information obtained by
                  means of the plugin are governed by the respective privacy
                  policies of the social networks.
                  <h4>9. SHARING OF PERSONAL INFORMATION </h4>
                  A. We do not share your personal data with third parties
                  without your prior consent other than: I. With third parties
                  who work on our behalf provided such third parties adhere to
                  the data protection principles set out in the IT Act, 2000 (21
                  of 2000) and other applicable legislation or enter into a
                  written agreement with Us requiring that the third party
                  provide at least the same level of privacy protection as is
                  required by such principles. II. To comply with laws or to
                  respond to lawful requests and legal process. III. To protect
                  the rights and property of Us, our agents, customers, and
                  others including to enforce our agreements, policies and terms
                  of use. IV. In an emergency, including to protect the personal
                  safety of any person; and V. For the purpose of a business
                  deal (or negotiation of a business deal) involving the sale or
                  transfer of all or a part of our business or assets (business
                  deals may include, for example, any merger, financing,
                  acquisition, divestiture or bankruptcy transaction or
                  proceeding)
                  <h4>10. CHILDREN </h4>
                  If you are under the age of 18 or the age of majority in the
                  jurisdiction in which you reside, you may only use Our App
                  with the consent of your parent or legal guardian. In any
                  case, we will not be liable for any cause of action that arose
                  due to non-compliance with this section.
                  <h4>11. CHANGES TO THIS POLICY </h4>
                  We may change this policy from time to time. If we make any
                  changes to this policy, we will change the "Last Updated" date
                  above. You agree that your continued use of our services after
                  such changes have been published to our services will
                  constitute your acceptance of such revised policy.
                  <h4>12. NEWSLETTER </h4>
                  A. Following your subscription to the newsletter, your e-mail
                  address is used for our advertising purposes until you cancel
                  the newsletter again. Cancellation is possible at any time.
                  The following consent has been expressly granted by you
                  separately, or possibly in the course of an ordering process:
                  (I am accepting to receive newsletters from this App), you may
                  revoke your consent at any time with future effect. If you no
                  longer want to receive the newsletter, then unsubscribe by
                  clicking on the unsubscribe option given in the email footer.{" "}
                  <br />
                  <br />
                  If you have any concerns about privacy or grievances with
                  Us,please contact us with a thorough description and we will
                  try to resolve the issue for you. <br /> <br />
                  Contact Details: <br />
                  Name: Bharath Veldandi <br />
                  phone no: 7758058020 <br />
                  Email Id:{" "}
                  <a href="mailto:contact@manaChoice1493@gmail.com">
                    belinvopvtltd@gmail.com
                  </a>
                  ,{" "}
                  <a href="mailto:contact@manaChoice1493@gmail.com">
                    Bharath.director@belinvo.com
                  </a>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;
