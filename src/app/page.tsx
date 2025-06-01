"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { translations, Language } from "./translations";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [residentName, setResidentName] = useState("");
  const [language, setLanguage] = useState<Language>("en");
  const [showEmail, setShowEmail] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showWhyItMatters, setShowWhyItMatters] = useState(false);
  
  // Detect user's language on mount
  useEffect(() => {
    const detectLanguage = () => {
      // Get browser language
      const browserLang = navigator.language || navigator.languages?.[0] || 'en';
      
      // Extract the primary language code (e.g., 'es' from 'es-MX')
      const primaryLang = browserLang.split('-')[0].toLowerCase();
      
      // Map to our supported languages
      if (primaryLang === 'es') {
        setLanguage('es');
      } else if (primaryLang === 'zh') {
        setLanguage('zh');
      } else {
        setLanguage('en'); // Default to English
      }
    };
    
    detectLanguage();
  }, []);
  
  // Update document language attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  
  const emailTo = "ward12@cityofchicago.org";
  const emailSubject = "Request for Speed Bumps - Pershing Road Safety Concerns";
  
  const t = translations[language];
  
  const getEmailBody = (name: string) => {
    const displayName = name || "[YOUR NAME HERE]";
    return `Dear Alderwoman Ramirez and 12th Ward Staff,

I am ${displayName}, a resident on Pershing Road between Kedzie and St. Louis. I am writing to request speed bumps on our block to address serious safety concerns. Many of my neighbors share these concerns about the safety of our families and community.

**Location Details:**
- Street: Pershing Road between Kedzie Avenue and St. Louis Avenue
- Neighborhood: McKinley Park area of the 12th Ward
- Priority area: This residential stretch experiencing dangerous speeding

**Safety Concerns:**
Pershing Road has become a dangerous speed corridor. Our neighborhood has experienced gang-related violence involving high-speed vehicle chases. Additionally, modified vehicles speed down our street at all hours. The straight, residential nature of this street attracts dangerous driving behaviors.

This creates serious safety hazards for:
- Residents entering/exiting their homes and driveways
- Children playing or walking to school
- Pedestrians accessing nearby McKinley Park
- Anyone crossing the street in this residential area
- Community safety during vehicle-related incidents

Speed bumps would help slow traffic and deter dangerous driving behaviors.

**Request:**
I would like to request speed bump installation on Pershing Road between Kedzie and St. Louis. Please provide information about:
1. The petition process and required documentation
2. Community support requirements
3. Timeline for review and installation
4. Any additional traffic calming measures available

Our neighborhood is organized and committed to improving safety on our street. We look forward to working with your office on this important matter.

Thank you for your time and consideration. I am available to discuss this further or provide additional information as needed.

Best regards,

${displayName}
Pershing Road Resident (between Kedzie and St. Louis)
Ward 12`;
  };

  const getFormattedEmailBody = (name: string) => {
    const displayName = name || "[YOUR NAME HERE]";
    return `
      <p>Dear Alderwoman Ramirez and 12th Ward Staff,</p>
      
      <p>I am ${displayName}, a resident on Pershing Road between Kedzie and St. Louis. I am writing to request speed bumps on our block to address serious safety concerns. Many of my neighbors share these concerns about the safety of our families and community.</p>
      
      <p><strong>Location Details:</strong></p>
      <ul style="margin-left: 20px;">
        <li>Street: Pershing Road between Kedzie Avenue and St. Louis Avenue</li>
        <li>Neighborhood: McKinley Park area of the 12th Ward</li>
        <li>Priority area: This residential stretch experiencing dangerous speeding</li>
      </ul>
      
      <p><strong>Safety Concerns:</strong></p>
      <p>Pershing Road has become a dangerous speed corridor. Our neighborhood has experienced gang-related violence involving high-speed vehicle chases. Additionally, modified vehicles speed down our street at all hours. The straight, residential nature of this street attracts dangerous driving behaviors.</p>
      
      <p>This creates serious safety hazards for:</p>
      <ul style="margin-left: 20px;">
        <li>Residents entering/exiting their homes and driveways</li>
        <li>Children playing or walking to school</li>
        <li>Pedestrians accessing nearby McKinley Park</li>
        <li>Anyone crossing the street in this residential area</li>
        <li>Community safety during vehicle-related incidents</li>
      </ul>
      
      <p>Speed bumps would help slow traffic and deter dangerous driving behaviors.</p>
      
      <p><strong>Request:</strong></p>
      <p>I would like to request speed bump installation on Pershing Road between Kedzie and St. Louis. Please provide information about:</p>
      <ol style="margin-left: 20px;">
        <li>The petition process and required documentation</li>
        <li>Community support requirements</li>
        <li>Timeline for review and installation</li>
        <li>Any additional traffic calming measures available</li>
      </ol>
      
      <p>Our neighborhood is organized and committed to improving safety on our street. We look forward to working with your office on this important matter.</p>
      
      <p>Thank you for your time and consideration. I am available to discuss this further or provide additional information as needed.</p>
      
      <p>Best regards,</p>
      
      <p>${displayName}<br/>
      Pershing Road Resident (between Kedzie and St. Louis)<br/>
      Ward 12</p>
    `.trim();
  };

  const emailBody = getEmailBody(residentName);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailBody);
      setCopied(true);
      
      // Automatically open default email client after copying
      setTimeout(() => {
        window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}`;
      }, 500);
      
      setTimeout(() => setCopied(false), 5000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = emailBody;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      
      // Automatically open default email client after copying
      setTimeout(() => {
        window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}`;
      }, 500);
      
      setTimeout(() => setCopied(false), 5000);
    }
  };

  const handleEmailClientClick = async (e: React.MouseEvent<HTMLAnchorElement>, clientUrl: string) => {
    e.preventDefault();
    
    try {
      await navigator.clipboard.writeText(emailBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = emailBody;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    }
    
    // Open email client in new window
    window.open(clientUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200">
        <div className="max-w-4xl mx-auto px-4 py-8 relative">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              {t.title}
            </h1>
            <p className="text-blue-700 mt-2 font-medium">
              {t.subtitle}
            </p>
            
            {/* Language Toggle */}
            <div className="flex justify-center gap-2 mt-4">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "en" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "es" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Español
              </button>
              <button
                onClick={() => setLanguage("zh")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "zh" 
                    ? "bg-blue-600 text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                中文
              </button>
            </div>
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
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            {t.urgentTitle}
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            {t.urgentSubtitle}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="relative" style={{ maxWidth: "300px", width: "100%" }}>
              <Image 
                src="/speed-bumps.png" 
                alt="Speed bump example" 
                width={258}
                height={195}
                className="rounded-lg shadow-md w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Collapsible Why Speed Bumps Matter Section */}
        <div className="bg-blue-50 rounded-lg shadow-sm border border-blue-200 mb-8">
          <button 
            onClick={() => setShowWhyItMatters(!showWhyItMatters)}
            className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-100 transition-colors"
          >
            <h3 className="text-xl font-semibold text-blue-900">
              {t.whySpeedBumpsMatter}
            </h3>
            <span className="text-blue-900 text-xl">
              {showWhyItMatters ? '−' : '+'}
            </span>
          </button>
          
          {showWhyItMatters && (
            <div className="px-6 pb-6">
              <p className="text-gray-700 mb-4 font-medium">
                {t.mainDescription}
              </p>
              
              <div className="bg-white rounded p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">{t.documentedConcerns}</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>{t.concerns.gang}</li>
                  <li>{t.concerns.criminal}</li>
                  <li>{t.concerns.modified}</li>
                  <li>{t.concerns.daily}</li>
                  <li>{t.concerns.children}</li>
                  <li>{t.concerns.nearMiss}</li>
                </ul>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-3">{t.whyUrgent}</h4>
                <p className="text-gray-700 mb-3">
                  {t.whyUrgentText}
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  <li>
                    <a href="https://highways.dot.gov/safety/speed-management/traffic-calming-eprimer/module-3-part-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {t.fhwaLink}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.chicago.gov/city/en/depts/cdot/provdrs/street/svcs/speed_hump_installation.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {t.cdotLink}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Collapsible How It Works Section */}
        <div className="bg-blue-50 rounded-lg shadow-sm border border-blue-100 mb-8">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-100 transition-colors"
          >
            <h3 className="text-xl font-semibold text-blue-900">
              {t.howItWorks}
            </h3>
            <span className="text-blue-900 text-xl">
              {showDetails ? '−' : '+'}
            </span>
          </button>
          
          {showDetails && (
            <div className="px-6 pb-6">
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                {t.steps.map((step, index) => (
                  <li key={index} className="text-base">{step}</li>
                ))}
              </ol>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{t.whyItMatters}</h3>
                  <p className="text-sm text-gray-700">{t.whyItMattersText}</p>
                </div>
                
                <div className="bg-white rounded p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{t.whatNext}</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {t.nextSteps.map((step, index) => (
                      <li key={index}>• {step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {t.sendEmail}
          </h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">{t.yourName}</label>
              <input
                id="name"
                type="text"
                value={residentName}
                onChange={(e) => setResidentName(e.target.value)}
                placeholder={language === "es" ? "Ingrese su nombre" : language === "zh" ? "输入您的姓名" : "Enter your name"}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">{t.to}</p>
              <p className="bg-gray-100 p-2 rounded">{emailTo}</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-700 mb-1">{t.subject}</p>
              <p className="bg-gray-100 p-2 rounded">{emailSubject}</p>
            </div>
            
            <div>
              <div className="text-center mb-4">
                <p className="font-semibold text-gray-700 mb-2">{t.message}</p>
                <button
                  onClick={() => setShowEmail(!showEmail)}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg font-medium transition-colors border border-blue-300"
                >
                  {showEmail ? t.hideEmail : t.showEmail}
                </button>
              </div>
              {showEmail && (
                <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-base leading-relaxed font-sans space-y-4 shadow-sm transition-all duration-300">
                  <div dangerouslySetInnerHTML={{ __html: getFormattedEmailBody(residentName) }} />
                </div>
              )}
            </div>
            
            <div className="flex flex-col gap-4 mt-6">
              {/* Quick Instructions */}
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-900 mb-2">{t.quickInstructions}</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800">
                  {t.instructionSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              
              <button
                onClick={handleCopy}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-lg"
              >
                {copied ? t.copiedButton : t.copyButton}
              </button>
              
              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">{t.openInApp}</p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#"
                    onClick={(e) => handleEmailClientClick(e, `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${encodeURIComponent(emailSubject)}`)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center text-sm cursor-pointer"
                  >
                    📧 Gmail
                  </a>
                  
                  <a
                    href="#"
                    onClick={(e) => handleEmailClientClick(e, `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}`)}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center text-sm cursor-pointer"
                  >
                    📧 Mail App
                  </a>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 text-center mt-4">
              {copied ? t.instructions : ""}
            </p>
            
            {/* Success Message */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-center">
                {t.successMessage}
              </p>
            </div>
          </div>
        </div>

      </main>
      
      {/* Footer - Issue Reporting */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-16">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              {t.footerIssues}
            </p>
            <a
              href="https://github.com/thatguyinabeanie/pershing-speed-bumps/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              {t.submitIssue}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}