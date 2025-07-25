"use client";

import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", mb: 3 , color:"#005632"}}>
        Privacy Policy
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Effective Date:</strong> April 15, 2025
        <br />
        <strong>Last Updated:</strong> April 15, 2025
      </Typography>
      <Typography variant="body1" paragraph>
        Mission of Dream India (MODI) Foundation (“we”, “us”, or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or engage with our services.
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>1. Information We Collect</Typography>
      <Typography variant="body1" paragraph>
        <strong>1.1 Personal Information You Provide:</strong> Contact details (name, email address, phone number, mailing address), donation details (payment information processed securely by third-party gateways; we do not store card numbers), volunteer/partner applications (resume, skill sets, interests, and other submitted information).
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>1.2 Automatically Collected Data:</strong> Usage data such as IP address, browser type, operating system, pages viewed, referral URLs, timestamps, cookies, and tracking technologies.
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>2. How We Use Your Information</Typography>
      <Typography variant="body1" paragraph>
        To deliver services, communicate updates, improve and analyze website usage, and ensure legal compliance under Indian law (IT Act, 2000).
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>3. Legal Basis for Processing</Typography>
      <Typography variant="body1" paragraph>
        We process your data based on consent, contractual necessity, and legitimate interests.
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>4. Cookies & Tracking</Typography>
      <Typography variant="body1" paragraph>
        We use cookies and similar technologies to remember preferences, analyze traffic, and provide targeted content. You can disable cookies via browser settings.
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>5. Third-Party Service Providers</Typography>
      <Typography variant="body1" paragraph>
        We may share your information with trusted partners such as payment gateways, analytics tools, and email marketing platforms, all under strict confidentiality agreements.
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>6. Data Retention</Typography>
      <Typography variant="body1" paragraph>
        We retain personal data only as long as necessary to fulfill the outlined purposes, comply with legal obligations, resolve disputes, and enforce agreements.
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>7. Data Security</Typography>
      <Typography variant="body1" paragraph>
        We use encryption, secure servers, and access controls to protect your data.
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>8. Children’s Privacy</Typography>
      <Typography variant="body1" paragraph>
        We do not knowingly collect data from children under 13. If such data is identified, we will delete it promptly.
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>9. Links to Other Websites</Typography>
      <Typography variant="body1" paragraph>
        Our site may contain links to external sites. We are not responsible for their privacy practices.
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>10. Your Rights</Typography>
      <Typography variant="body1" paragraph>
        Depending on your jurisdiction, you may access, rectify, erase, restrict, or object to processing your data, and withdraw consent at any time.
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>11. Changes to This Policy</Typography>
      <Typography variant="body1" paragraph>
        We may update this Privacy Policy to reflect changes in our practices or legal requirements. Your continued use of our site constitutes acceptance of those changes.
      </Typography>

      <Box textAlign="center" mt={5}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#005632", color: "white", px: 4, py: 1, borderRadius: 2, fontWeight: "bold" }}
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}
