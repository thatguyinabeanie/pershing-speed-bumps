"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [residentName, setResidentName] = useState("");
  
  const emailTo = "ward12@cityofchicago.org";
  const emailSubject = "Urgent Public Safety Opportunity - Pershing Road Speed Bumps";
  
  const getEmailBody = (name: string) => {
    const displayName = name || "[YOUR NAME HERE]";
    return `Dear Alderwoman Ramirez and 12th Ward Staff,

I hope this email finds you well. I am ${displayName}, a resident on Pershing Road between Kedzie and St. Louis, and I am writing to request speed bumps on our block to address urgent public safety concerns. I feel safe in saying that I speak for all the families with young children, cats and dogs who live on Pershing between Kedzie and St. Louis.

**Location Details:**
- Street: Pershing Road between Kedzie Avenue and St. Louis Avenue
- Neighborhood: McKinley Park area of the 12th Ward
- Priority area: This residential stretch experiencing dangerous speeding

**Safety Concerns:**
Pershing Road between Kedzie and St. Louis has become both a dangerous speed corridor and a public safety concern. Drivers treat this residential stretch as a high-speed route, accelerating to dangerous speeds on what should be a quiet neighborhood street.

**Critical Public Safety Issue:** Our neighborhood has experienced gang-related violence involving high-speed vehicle chases on this same stretch of Pershing Road. The straight, residential nature of this street makes it attractive for dangerous driving behaviors including both reckless speeding and criminal activity involving vehicles.

This creates serious safety hazards for:
- Residents entering/exiting their homes and driveways
- Children playing or walking to school
- Pedestrians accessing nearby McKinley Park
- Anyone crossing the street in this residential area
- Community safety during incidents involving criminal activity and vehicle pursuits

Speed bumps would address multiple safety concerns: slowing everyday traffic, making high-speed chases more difficult, and creating a safer environment for law-abiding residents.

**Request:**
Given the serious public safety concerns involving dangerous vehicle activity, I would like to request priority consideration for speed bump installation and information about:
1. Emergency/expedited petition process for public safety situations
2. Required forms and documentation needed
3. Community support requirements
4. Accelerated timeline for review and installation given the safety urgency
5. Any additional safety measures that could be implemented alongside speed bumps
6. Coordination with Chicago Police Department regarding ongoing public safety concerns

Our neighborhood has a strong network of engaged residents who prioritize safety issues when evaluating local representation, and this matter will be a central focus of our community advocacy efforts until resolved. As active community members, we plan to bring this issue to every relevant public meeting, town hall, and community forum until we see meaningful progress on residential safety improvements.

We are prepared to be strong advocates for this cause and will use all appropriate channels to ensure our voices are heard on this critical safety matter. We look forward to working collaboratively with your office to protect our neighborhood and demonstrate the 12th Ward's commitment to resident safety.

Thank you for your time and consideration. I am available for any follow-up questions, to provide additional documentation of safety incidents, or to discuss this critical safety matter further.

Best regards,

${displayName}
Pershing Road Resident (between Kedzie and St. Louis)
Ward 12`;
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-200">
        <div className="max-w-4xl mx-auto px-4 py-8 relative">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Speed Bumps for Pershing Road - Ward 12
            </h1>
            <p className="text-red-700 mt-2 font-medium">
              Community Organizing for Public Safety
            </p>
          </div>
          <a
            href="https://github.com/thatguyinabeanie/pershing-speed-bumps"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-8 right-4 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="View on GitHub"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </header>

      <main className="max-w-2xl mx-auto py-8 px-4">
        {/* Introduction */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-red-800 mb-3">
            URGENT: Public Safety Crisis on Pershing Road
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            Organized community action to stop gang-related vehicle incidents and dangerous speeding
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="bg-red-50 rounded-lg shadow-sm border border-red-200 p-6 mb-8">
          <h3 className="text-xl font-semibold text-red-900 mb-4">
            Critical Public Safety Issue - Ward 12
          </h3>
          <p className="text-gray-700 mb-4 font-medium">
            Pershing Road between Kedzie and St. Louis has experienced gang-related violence involving high-speed vehicle chases. Residents are organizing urgent community action to demand immediate safety improvements.
          </p>
          
          <div className="bg-white rounded p-4 mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Documented Safety Concerns:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Gang-related high-speed vehicle chases</li>
              <li>Criminal activity involving dangerous driving</li>
              <li>Daily excessive speeding on residential street</li>
              <li>Children and families at risk</li>
              <li>Multiple near-miss incidents with pedestrians</li>
            </ul>
          </div>
          
          <div className="border-t pt-4">
            <h4 className="font-semibold text-gray-800 mb-3">Why Speed Bumps Are Urgent</h4>
            <p className="text-gray-700 mb-3">
              Speed bumps will make high-speed chases more difficult and create a safer environment for law-abiding residents. This is a proven public safety measure.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>
                <a href="https://highways.dot.gov/safety/speed-management/traffic-calming-eprimer/module-3-part-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  FHWA: Traffic Calming for Public Safety
                </a>
              </li>
              <li>
                <a href="https://www.chicago.gov/city/en/depts/cdot/provdrs/street/svcs/speed_hump_installation.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Chicago DOT: Emergency Speed Hump Process
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Send Urgent Email to Alderwoman Ramirez (Ward 12)
          </h3>
          
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
            
            <div className="flex flex-col gap-4 mt-6">
              <button
                onClick={handleCopy}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
              >
                {copied ? "✓ Copied to Clipboard!" : "📋 Copy Email Text"}
              </button>
              
              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">Open in your email app:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ward12@cityofchicago.org&su=Urgent%20Public%20Safety%20Opportunity%20-%20Pershing%20Road%20Speed%20Bumps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center text-sm"
                  >
                    Gmail
                  </a>
                  
                  <a
                    href="https://outlook.live.com/mail/0/deeplink/compose?to=ward12@cityofchicago.org&subject=Urgent%20Public%20Safety%20Opportunity%20-%20Pershing%20Road%20Speed%20Bumps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center text-sm"
                  >
                    Outlook
                  </a>
                  
                  <a
                    href="https://mail.yahoo.com/d/compose/?to=ward12@cityofchicago.org&subject=Urgent%20Public%20Safety%20Opportunity%20-%20Pershing%20Road%20Speed%20Bumps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center text-sm"
                  >
                    Yahoo Mail
                  </a>
                  
                  <a
                    href={`mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}`}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center text-sm"
                  >
                    Mail App
                  </a>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 text-center mt-4">
              Copy the text and paste it into any email app, or click one of the buttons above
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
