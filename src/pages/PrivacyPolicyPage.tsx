import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Card className="shadow-md border rounded-2xl">
        <CardContent className="prose prose-neutral dark:prose-invert max-w-none px-6 py-8">
          <h1 className="text-3xl font-bold mb-4">🛡️ Privacy Policy</h1>
          <p><strong>Effective Date:</strong> May 30, 2025</p>
          <p>
            Welcome to <strong>Toletu.com</strong>. Your privacy is important to us. This policy explains what information we collect, how we use it, and how we protect it.
            By using Toletu, you agree to this policy.
          </p>

          <Separator className="my-6" />
          <h2>📌 1. Information We Collect</h2>
          <h3>a. Information You Provide</h3>
          <ul>
            <li>Phone number (used for OTP login)</li>
            <li>Location preferences</li>
            <li>Listing details and roommate profile info</li>
          </ul>
          <h3>b. Information Collected Automatically</h3>
          <ul>
            <li>Device and browser info</li>
            <li>IP address and geolocation</li>
            <li>Usage logs and cookies</li>
          </ul>

          <Separator className="my-6" />
          <h2>✅ 2. How We Use Your Data</h2>
          <ul>
            <li>Show nearby listings and roommate matches</li>
            <li>Send OTPs and system notifications</li>
            <li>Analyze and improve platform performance</li>
          </ul>
          <p><strong>We never sell or rent your personal data.</strong></p>

          <Separator className="my-6" />
          <h2>🔄 3. Cookies & Tracking</h2>
          <p>
            We use cookies to enhance your experience and gather usage insights via tools like Google Analytics.
            You can disable cookies in your browser, but some features may not work.
          </p>

          <Separator className="my-6" />
          <h2>🔐 4. Data Storage & Security</h2>
          <p>
            Your data is stored using secure cloud services like AWS, DynamoDB, and S3.
            We use HTTPS, role-based access, and other security measures to keep your information safe.
          </p>

          <Separator className="my-6" />
          <h2>🔄 5. When & Why We Share Data</h2>
          <ul>
            <li>OTP verification services</li>
            <li>Secure hosting and analytics</li>
          </ul>
          <p>We do not share your data with third-party advertisers or marketers.</p>

          <Separator className="my-6" />
          <h2>👤 6. Your Rights</h2>
          <ul>
            <li>Access or request your stored data</li>
            <li>Correct or delete your profile</li>
            <li>Delete your account completely</li>
            <li>Opt out of analytics (on request)</li>
          </ul>
          <p>Email us at <strong>support@toletu.com</strong> for any requests.</p>

          <Separator className="my-6" />
          <h2>👨‍⚖️ 7. Legal Compliance (India)</h2>
          <p>
            We comply with the Information Technology Act, 2000 and are preparing for upcoming regulations under India's Data Protection Bill.
          </p>

          <Separator className="my-6" />
          <h2>🔄 8. Updates to This Policy</h2>
          <p>
            Our privacy policy may change with new features or legal requirements. We'll post updates on our website and notify users as needed.
          </p>

          <Separator className="my-6" />
          <h2>📬 9. Contact Us</h2>
          <p>
            Have questions or concerns? Reach out anytime.
          </p>
          <ul>
            <li><strong>Email:</strong> support@toletu.com</li>
            <li><strong>Website:</strong> www.toletu.com</li>
            <li><strong>Support Hours:</strong> Mon–Fri, 10:00 AM – 6:00 PM IST</li>
          </ul>

          <Separator className="my-6" />
          <p className="italic text-muted-foreground">
            At Toletu, we believe privacy is a right — not a feature. Thanks for trusting us to help you find your next home or housemate.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
