Speed Bump Advocacy App - Technical Specification
🎯 Project Overview
A Next.js web application that enables residents to quickly and easily send pre-formatted emails to their alderman requesting speed bumps, with one-click email automation and community organizing features.
🏗️ Tech Stack

Framework: Next.js 14+ (App Router)
Deployment: Vercel
Styling: Tailwind CSS
Database: Vercel Postgres (for tracking submissions)
Email: mailto: links with pre-formatted content
Analytics: Vercel Analytics
Performance: Next.js built-in optimizations

📱 Core Features
1. One-Click Email Automation

Primary Feature: Single button that opens user's default email client
Pre-populated recipient, subject, and body
No form filling required - instant action

2. Location-Specific Content

Ward lookup by address
Alderman contact information
Customized email content per ward

3. Community Tracking

Counter of emails sent
Success stories display
Progress tracking

🗂️ Project Structure
speed-bump-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/
│       ├── submit-request/
│       │   └── route.ts
│       └── ward-lookup/
│           └── route.ts
├── components/
│   ├── EmailButton.tsx
│   ├── WardLookup.tsx
│   ├── SuccessStories.tsx
│   ├── SafetyMap.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Input.tsx
├── lib/
│   ├── email-templates.ts
│   ├── ward-data.ts
│   ├── utils.ts
│   └── db.ts
├── public/
│   ├── pershing-map.png
│   └── icons/
└── types/
    └── index.ts
🔧 Core Components
EmailButton Component
typescriptinterface EmailButtonProps {
  wardInfo: WardInfo;
  userAddress: string;
  incidentData?: IncidentData[];
}

const EmailButton: React.FC<EmailButtonProps> = ({ wardInfo, userAddress, incidentData }) => {
  const generateEmailContent = () => {
    // Generate pre-formatted email with all safety data
  };
  
  const handleClick = () => {
    const mailtoLink = `mailto:${wardInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Track submission
    trackSubmission();
  };
};
WardLookup Component
typescriptconst WardLookup: React.FC = () => {
  const [address, setAddress] = useState('');
  const [wardInfo, setWardInfo] = useState<WardInfo | null>(null);
  
  const lookupWard = async (address: string) => {
    // Call Chicago ward lookup API
    // Return alderman contact info
  };
};
📧 Email Automation Features
1. Mailto Link Generation
typescriptconst generateMailtoLink = (wardInfo: WardInfo, requestData: RequestData) => {
  const subject = "Urgent Public Safety Opportunity - Pershing Road Speed Bumps";
  const body = generateEmailBody(requestData);
  
  return `mailto:${wardInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
2. Dynamic Email Content

Personal Information: Auto-fill from user input
Location Data: GPS coordinates, address validation
Safety Incidents: Integrate crime data if available
Community Support: Show number of supporters

3. Template Customization
typescriptinterface EmailTemplate {
  wardNumber: number;
  aldermanName: string;
  safetyData: IncidentData[];
  personalMessage?: string;
}

const generateEmailBody = (template: EmailTemplate) => {
  return `
Dear Alderwoman ${template.aldermanName},

I am Gabriel Mendoza, a resident at 3310 W. Pershing Road...
[Dynamic content based on template]
`;
};
🗺️ Interactive Features
Safety Map Component

Display Pershing Road with incident markers
Click markers to add to email
Visual evidence for ward office

Progress Tracker

Number of emails sent
Community participation rate
Success milestones

Real-time Updates

Ward office responses
Project status updates
Community achievements

🚀 User Flow
Primary Path (30 seconds or less)

Landing Page: User sees the problem and solution
Address Input: Quick ward lookup
One-Click Email: Button opens pre-filled email
Send & Track: Email sent, submission tracked

Advanced Path

Add Personal Details: Custom message, contact info
Select Incidents: Choose specific safety concerns
Review Email: Preview before sending
Send & Share: Email + social media sharing

📊 Data Models
Ward Information
typescriptinterface WardInfo {
  number: number;
  aldermanName: string;
  email: string;
  phone: string;
  address: string;
  websiteUrl?: string;
}
Request Tracking
typescriptinterface SpeedBumpRequest {
  id: string;
  userAddress: string;
  wardNumber: number;
  timestamp: Date;
  emailSent: boolean;
  incidentsIncluded: string[];
  followUpNeeded?: boolean;
}
Safety Incident Data
typescriptinterface IncidentData {
  date: string;
  location: string;
  type: 'speeding' | 'gang_activity' | 'vehicle_chase' | 'pedestrian_safety';
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}
🎨 UI/UX Design
Landing Page Layout
┌─────────────────────────────────────┐
│ 🚧 URGENT: SPEED BUMPS NEEDED 🚧   │
│                                     │
│ [Problem Description with Map]      │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Enter Your Address              │ │
│ │ [_______________] [Lookup Ward] │ │
│ └─────────────────────────────────┘ │
│                                     │
│ [🚨 SEND EMAIL TO ALDERMAN NOW 🚨] │
│                                     │
│ Community Impact: X emails sent    │
└─────────────────────────────────────┘
Email Button States

Default: "🚨 SEND EMAIL TO ALDERMAN NOW"
Loading: "Looking up your ward..."
Ready: "📧 SEND TO ALDERWOMAN RAMIREZ"
Sent: "✅ EMAIL SENT! Share with neighbors"

🔗 API Endpoints
Ward Lookup
typescript// /api/ward-lookup
POST /api/ward-lookup
Body: { address: string }
Response: { wardInfo: WardInfo, success: boolean }
Submit Request
typescript// /api/submit-request
POST /api/submit-request
Body: { userAddress: string, wardNumber: number }
Response: { success: boolean, requestId: string }
Get Statistics
typescript// /api/stats
GET /api/stats
Response: { totalRequests: number, wardBreakdown: object }
📱 Mobile Optimization
Responsive Design

Mobile-first approach
Large touch targets for buttons
Fast loading on mobile networks
PWA capabilities for app-like experience

Mobile Email Integration

iOS Mail app integration
Gmail app deep links
Fallback to web email clients

🔒 Privacy & Security
Data Collection

Minimal data collection (address, timestamp)
No personal information stored permanently
GDPR-compliant data handling

Rate Limiting

Prevent spam submissions
IP-based throttling
Ward-specific limits

📈 Analytics & Tracking
Key Metrics

Email open rates (if possible)
Ward response rates
User engagement time
Conversion rate (address → email sent)

Success Metrics

Speed bump installations achieved
Community participation growth
Ward office responsiveness improvement

🚀 Deployment Strategy
Vercel Configuration
javascript// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://speed-bumps-pershing.vercel.app"
  }
}
Environment Variables
bash# .env.local
DATABASE_URL=postgresql://...
NEXT_PUBLIC_WARD_API_KEY=...
ANALYTICS_ID=...
🔄 Future Enhancements
Phase 2 Features

Multi-language Support: Spanish, Chinese
Petition Signatures: Digital signature collection
Calendar Integration: Ward meeting reminders
SMS Notifications: Text updates on progress

Phase 3 Features

Neighborhood Network: Connect with other streets
Success Replication: Template for other areas
Policy Tracking: Monitor city council votes
Media Kit: Press release templates

💡 Technical Implementation Notes
Email Client Compatibility
typescriptconst detectEmailClient = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('mobile')) {
    // Mobile-specific mailto handling
    return 'mobile';
  }
  
  // Desktop email client detection
  return 'desktop';
};
Error Handling
typescriptconst handleEmailError = (error: Error) => {
  // Fallback to web-based email
  // Show alternative contact methods
  // Provide manual email template
};
Performance Optimization

Static generation for ward data
Image optimization for maps
Lazy loading for non-critical components
CDN caching for static assets

🎯 Success Criteria
Technical Goals

⚡ Page load time < 2 seconds
📱 Perfect mobile experience
🔄 99.9% uptime
♿ Full accessibility compliance

Impact Goals

📧 50+ emails sent in first week
🏘️ 80% of Pershing Road residents engaged
🏛️ Ward office response within 48 hours
🚧 Speed bumps installed within 6 months
