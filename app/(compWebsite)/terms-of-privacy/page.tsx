"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

export default function TermsOfServicePage() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 4, maxWidth: "1000px", mx: "auto" }}>
      <Typography variant="h3" gutterBottom fontWeight={700} color="#005632">
        Terms of Service
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Effective Date: April 15, 2025 <br />
        Last Updated: April 15, 2025
      </Typography>

      <Typography paragraph mt={3}>
        Welcome to Mission of Dream India (MODI) Foundation’s website (“Site”).
        By accessing or using our Site and services (“Services”), you agree to
        be bound by these Terms of Service (“Terms”). Please read them
        carefully.
      </Typography>

      <Typography variant="h6" mt={3} gutterBottom>
        1. Acceptance of Terms
      </Typography>
      <Typography paragraph>
        By visiting <strong>www.modifoundation.org</strong> (or your live domain) and
        using our Services, you confirm that you accept these Terms and our{" "}
        <strong>Privacy Policy</strong>, and that you agree to comply with them.
        If you do not agree, please do not use our Site or Services.
      </Typography>

      <Typography variant="h6" mt={3} gutterBottom>
        2. Description of Services
      </Typography>
      <Typography paragraph>
        MODI Foundation is a non-profit organization focused on environmental
        conservation, education, advocacy, and sustainable development. Through
        this Site, we:
      </Typography>
      <ul>
        <li>Share information about our initiatives, events, and impact</li>
        <li>Provide online donation and volunteer sign-up forms</li>
        <li>Publish news, blogs, and resources on environmental topics</li>
      </ul>
      <Typography paragraph>
        All Services are provided “as is” and may be modified, suspended, or
        discontinued at any time without notice.
      </Typography>

      <Typography variant="h6" mt={3} gutterBottom>
        3. Eligibility
      </Typography>
      <Typography paragraph>
        You must be at least 18 years old to use our Services. By using the Site,
        you represent and warrant that you meet this age requirement and have
        the legal capacity to enter into these Terms.
      </Typography>

      <Typography variant="h6" mt={3} gutterBottom>
        4. User Conduct
      </Typography>
      <ul>
        <li>
          Provide accurate, current, and complete information when registering or donating
        </li>
        <li>
          Use the Site lawfully and in compliance with all applicable local, national, and international laws
        </li>
        <li>
          Refrain from uploading or transmitting any content that is unlawful, defamatory, infringing, obscene, or harmful
        </li>
        <li>Not interfere with the operation of the Site or its security features</li>
      </ul>
      <Typography paragraph>
        MODI Foundation reserves the right to suspend or terminate your access for violation of these rules.
      </Typography>

      <Typography variant="h6" mt={3} gutterBottom>
        5. Intellectual Property
      </Typography>
      <Typography paragraph>
        All content on this Site—including text, graphics, logos, images, and
        software—is the property of MODI Foundation or its content suppliers and
        is protected by copyright, trademark, and other intellectual property
        laws.
      </Typography>
      <ul>
        <li>
          <strong>Permitted Use:</strong> You may view, download, and print pages for personal, non-commercial use only.
        </li>
        <li>
          <strong>Restrictions:</strong> You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any content without our express written permission.
        </li>
      </ul>

      <Typography variant="h6" mt={3} gutterBottom>
        6. Donations & Payments
      </Typography>
      <ul>
        <li>All donations are processed securely through third-party gateways (e.g., Razorpay, Paytm).</li>
        <li>MODI Foundation does not store your payment card details.</li>
        <li>Donations are non-refundable except as required by law or at our discretion.</li>
        <li>Tax receipts will be issued as per applicable Indian regulations.</li>
      </ul>

      <Typography variant="h6" mt={3} gutterBottom>
        7. Links to Third-Party Sites
      </Typography>
      <Typography paragraph>
        Our Site may contain links to external websites for your convenience.
        MODI Foundation is not responsible for the content, privacy practices,
        or accuracy of any third-party sites. Visiting such links is at your own
        risk.
      </Typography>

      <Typography variant="h6" mt={3} gutterBottom>
        8. Disclaimers
      </Typography>
      <ul>
        <li>
          <strong>No Warranty:</strong> The Site and Services are provided “as is” and “as available.” MODI Foundation disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
        </li>
        <li>
          <strong>Accuracy of Information:</strong> While we strive for accuracy, we do not guarantee that content is complete, reliable, or up-to-date.
        </li>
      </ul>

      <Typography variant="h6" mt={3} gutterBottom>
        9. Limitation of Liability
      </Typography>
      <Typography paragraph>
        To the maximum extent permitted by law, MODI Foundation and its
        directors, officers, employees, or volunteers shall not be liable for
        any indirect, incidental, special, consequential, or punitive damages
        arising out of your use of the Site or Services, even if advised of the
        possibility of such damages.
      </Typography>

      <Typography variant="h6" mt={3} gutterBottom>
        10. Indemnification
      </Typography>
      <Typography paragraph>
        You agree to indemnify and hold harmless MODI Foundation, its
        affiliates, and their respective officers, directors, employees, and
        agents from any claims, damages, losses, liabilities, and expenses
        (including legal fees) arising out of:
      </Typography>
      <ul>
        <li>Your use of the Site or Services</li>
        <li>Any violation of these Terms</li>
        <li>Any infringement of intellectual property or other rights</li>
      </ul>

      <Typography variant="h6" mt={3} gutterBottom>
        11. Termination
      </Typography>
      <Typography paragraph>
        We may suspend or terminate your access, without notice, if you breach
        these Terms or engage in conduct that we deem harmful to our community,
        reputation, or operations. Sections on Intellectual Property,
        Disclaimers, Limitation of Liability, Indemnification, and Governing Law
        survive termination.
      </Typography>

      <Typography variant="h6" mt={3} gutterBottom>
        12. Governing Law & Dispute Resolution
      </Typography>
      <Typography paragraph>
        These Terms are governed by and construed in accordance with the laws of
        India, without regard to conflict-of-law principles. Any dispute arising
        under or relating to these Terms shall be subject to the exclusive
        jurisdiction of the courts in Rohtak, Haryana, India.
      </Typography>

      <Typography variant="h6" mt={3} gutterBottom>
        13. Changes to Terms
      </Typography>
      <Typography paragraph>
        We may update these Terms from time to time. We will post the revised
        Terms on this page with a new “Last Updated” date. Your continued use of
        the Site after changes indicates your acceptance of the updated Terms.
      </Typography>

      <Typography variant="h6" mt={3} gutterBottom>
        14. Contact Us
      </Typography>
      <Typography paragraph>
        If you have any questions about these Terms, please contact us at:
      </Typography>
      <Typography paragraph>
        Mission of Dream India (MODI) Foundation <br />
        H.No. 1792, Lakhan Majra, Rohtak, Haryana – 124514, India <br />
        Email: yourmodifoundation@gmail.com <br />
        Phone: +91 90500 28885
      </Typography>

      <Typography paragraph mt={4}>
        Thank you for supporting MODI Foundation. Together, we’re building a
        sustainable tomorrow!
      </Typography>
    </Box>
  );
}
