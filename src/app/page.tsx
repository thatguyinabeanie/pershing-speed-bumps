"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [residentName, setResidentName] = useState("");
  
  const emailTo = "rlopez@cityofchicago.org";
  const emailSubject = "Urgent Public Safety Opportunity - Pershing Road Speed Bumps";
  
  const getEmailBody = (name: string) => {
    const displayName = name || "[YOUR NAME HERE]";
    return `Dear Alderman Lopez,

I am ${displayName}, a resident between Kedzie and St. Louis on Pershing. I am writing to urgently request the installation of speed bumps on Pershing Road between Kedzie Avenue and St. Louis Avenue.

PUBLIC SAFETY EMERGENCY:
This stretch of Pershing Road has become extremely dangerous due to excessive speeding and reckless driving. We've experienced:

• Multiple car crashes threatening resident safety
• Dangerous high-speed chases through our residential area
• Repeated incidents of gang-related activity
• Daily speeding violations putting children and families at risk

IMMEDIATE ACTION NEEDED:
Speed bumps are a proven, cost-effective solution that will:
✓ Immediately reduce vehicle speeds
✓ Deter dangerous driving behavior
✓ Protect our families and children
✓ Restore peace to our neighborhood

Our community is united in this request. We need your leadership to make Pershing Road safe again.

I urge you to prioritize this critical safety measure. Please let me know the next steps to expedite the installation of speed bumps on Pershing Road.

Thank you for your immediate attention to this matter.

Sincerely,
${displayName}
Pershing Road Resident
Ward 15`;
  };

  const emailBody = getEmailBody(residentName);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = emailBody;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-red-50 p-4">
      <main className="max-w-2xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-900 mb-2">
            🚨 URGENT: SPEED BUMPS NEEDED 🚨
          </h1>
          <p className="text-xl text-red-700">
            Pershing Road Safety Crisis
          </p>
        </div>

        {/* Problem */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-red-900 mb-4">
            Our Street is Dangerous!
          </h2>
          <p className="text-gray-700 mb-4">
            Pershing Road between Kedzie and St. Louis has become a danger zone:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Excessive speeding daily</li>
            <li>Multiple car crashes</li>
            <li>High-speed police chases</li>
            <li>Gang-related activity</li>
            <li>Children at risk</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-green-50 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Speed Bumps = Immediate Safety
          </h2>
          <p className="text-gray-700">
            Speed bumps are a proven solution that will immediately make our street safer by forcing vehicles to slow down.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-yellow-50 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📧 Email Alderman Lopez Now!
          </h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">Your Name:</label>
              <input
                id="name"
                type="text"
                value={residentName}
                onChange={(e) => setResidentName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">To:</p>
              <p className="bg-gray-100 p-2 rounded">{emailTo}</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-700 mb-1">Subject:</p>
              <p className="bg-gray-100 p-2 rounded">{emailSubject}</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-700 mb-1">Message:</p>
              <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap font-sans">
                {emailBody}
              </pre>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={handleCopy}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow transition"
              >
                {copied ? "✓ Copied!" : "📋 Copy Email Text"}
              </button>
              
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rlopez@cityofchicago.org&su=Urgent%20Public%20Safety%20Opportunity%20-%20Pershing%20Road%20Speed%20Bumps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow transition text-center"
              >
                📧 Open Gmail
              </a>
            </div>
            
            <p className="text-sm text-gray-600 text-center mt-4">
              Copy the text above and paste it into your email, or click &quot;Open Gmail&quot; to start composing
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-12">
          <p>
            A community initiative for Pershing Road safety
          </p>
        </footer>
      </main>
    </div>
  );
}
