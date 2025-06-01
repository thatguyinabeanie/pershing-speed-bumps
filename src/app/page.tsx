"use client";

import { useState } from "react";

type Language = "en" | "es" | "zh";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [residentName, setResidentName] = useState("");
  const [language, setLanguage] = useState<Language>("en");
  const [showEmail, setShowEmail] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showWhyItMatters, setShowWhyItMatters] = useState(false);
  
  const emailTo = "ward12@cityofchicago.org";
  const emailSubject = "Request for Speed Bumps - Pershing Road Safety Concerns";
  
  const translations = {
    en: {
      title: "Request Speed Bumps for Pershing Road",
      subtitle: "Join Your Neighbors in Making Our Street Safer",
      urgentTitle: "Dangerous Speeding on Pershing Road",
      urgentSubtitle: "Help us get traffic calming measures installed between Kedzie and St. Louis",
      criticalIssue: "Safety Issues Between Kedzie and St. Louis",
      mainDescription: "Pershing Road between Kedzie and St. Louis has experienced gang-related violence involving high-speed vehicle chases. Residents are organizing to request immediate safety improvements through proper traffic calming measures.",
      documentedConcerns: "Documented Safety Concerns:",
      concerns: {
        gang: "Gang-related high-speed vehicle chases",
        criminal: "Criminal activity involving dangerous driving",
        modified: "Modified vehicle owners speeding at random hours of the day and night",
        daily: "Daily excessive speeding on residential street",
        children: "Children and families at risk",
        nearMiss: "Multiple near-miss incidents with pedestrians"
      },
      whyUrgent: "Why Speed Bumps Are Needed",
      whyUrgentText: "Speed bumps are a proven traffic calming measure that reduce vehicle speeds and improve safety for all residents.",
      sendEmail: "Send Email to Alderwoman Ramirez (Ward 12)",
      yourName: "Your Name:",
      to: "To:",
      subject: "Subject:",
      message: "Message:",
      showEmail: "📖 Show Email Content",
      hideEmail: "📖 Hide Email Content",
      copyButton: "📋 Copy Email Text",
      copiedButton: "✅ Copied! Now paste into your email",
      openInApp: "Or open directly in your email app:",
      instructions: "Step 1: Copy the email text above, then Step 2: Click an email app button, then Step 3: Paste and send",
      quickInstructions: "📝 Quick Instructions:",
      instructionSteps: [
        "Enter your name above to personalize the email",
        "Click 'Copy Email Text' button",
        "Click your preferred email app button below",
        "Paste the copied text into the email body",
        "Send the email to make your voice heard!"
      ],
      successMessage: "🎯 Every email counts! You're helping make Pershing Road safer for families.",
      detailsTitle: "How This Works - Why Speed Bumps Matter",
      fhwaLink: "FHWA: Traffic Calming for Public Safety",
      cdotLink: "Chicago DOT: Emergency Speed Hump Process",
      howItWorks: "How This Works - Simple Steps",
      steps: [
        "Read about the safety problem on our street",
        "Enter your name in the form below",
        "Click a button to send the email",
        "Your voice joins with neighbors to request speed bumps",
        "Together we make our street safer"
      ],
      whyItMatters: "Why Your Email Matters",
      whyItMattersText: "When many neighbors contact the alderman about the same issue, it shows this is a real community priority. Speed bumps need community support to get approved.",
      whatNext: "What Happens Next",
      nextSteps: [
        "The alderman's office receives your email",
        "They see multiple residents are concerned",
        "Our organized effort shows we're serious",
        "Speed bumps get prioritized for installation"
      ]
    },
    es: {
      title: "Solicitar Topes para Pershing Road",
      subtitle: "Únase a Sus Vecinos para Hacer Nuestra Calle Más Segura",
      urgentTitle: "Exceso de Velocidad Peligroso en Pershing Road",
      urgentSubtitle: "Ayúdenos a instalar medidas de moderación del tráfico entre Kedzie y St. Louis",
      criticalIssue: "Problemas de Seguridad Entre Kedzie y St. Louis",
      mainDescription: "Pershing Road entre Kedzie y St. Louis ha experimentado violencia relacionada con pandillas que involucra persecuciones vehiculares a alta velocidad. Los residentes se están organizando para solicitar mejoras de seguridad inmediatas mediante medidas adecuadas de moderación del tráfico.",
      documentedConcerns: "Preocupaciones de Seguridad Documentadas:",
      concerns: {
        gang: "Persecuciones vehiculares a alta velocidad relacionadas con pandillas",
        criminal: "Actividad criminal que involucra conducción peligrosa",
        modified: "Propietarios de vehículos modificados que aceleran a horas aleatorias del día y la noche",
        daily: "Exceso de velocidad diario en calle residencial",
        children: "Niños y familias en riesgo",
        nearMiss: "Múltiples incidentes de casi accidentes con peatones"
      },
      whyUrgent: "Por Qué Se Necesitan Topes",
      whyUrgentText: "Los topes son una medida comprobada de moderación del tráfico que reduce la velocidad de los vehículos y mejora la seguridad para todos los residentes.",
      sendEmail: "Enviar Correo a la Concejala Ramirez (Distrito 12)",
      yourName: "Su Nombre:",
      to: "Para:",
      subject: "Asunto:",
      message: "Mensaje:",
      showEmail: "📖 Mostrar Contenido del Correo",
      hideEmail: "📖 Ocultar Contenido del Correo",
      copyButton: "📋 Copiar Texto del Correo",
      copiedButton: "✅ ¡Copiado! Ahora pegue en su correo",
      openInApp: "O abrir directamente en su aplicación de correo:",
      instructions: "Paso 1: Copie el texto del correo arriba, luego Paso 2: Haga clic en un botón de aplicación de correo, luego Paso 3: Pegue y envíe",
      quickInstructions: "📝 Instrucciones Rápidas:",
      instructionSteps: [
        "Ingrese su nombre arriba para personalizar el correo",
        "Haga clic en el botón 'Copiar Texto del Correo'",
        "Haga clic en su botón de aplicación de correo preferido abajo",
        "Pegue el texto copiado en el cuerpo del correo",
        "¡Envíe el correo para que su voz sea escuchada!"
      ],
      successMessage: "🎯 ¡Cada correo cuenta! Está ayudando a hacer Pershing Road más seguro para las familias.",
      detailsTitle: "Cómo Funciona - Por Qué los Topes Son Importantes",
      fhwaLink: "FHWA: Medidas de Calma de Tráfico para Seguridad Pública",
      cdotLink: "Chicago DOT: Proceso de Emergencia para Topes",
      howItWorks: "Cómo Funciona - Pasos Simples",
      steps: [
        "Lea sobre el problema de seguridad en nuestra calle",
        "Ingrese su nombre en el formulario a continuación",
        "Haga clic en un botón para enviar el correo",
        "Su voz se une con los vecinos para solicitar topes",
        "Juntos hacemos nuestra calle más segura"
      ],
      whyItMatters: "Por Qué Su Correo Importa",
      whyItMattersText: "Cuando muchos vecinos contactan al concejal sobre el mismo problema, muestra que es una prioridad real de la comunidad. Los topes necesitan apoyo comunitario para ser aprobados.",
      whatNext: "Qué Pasa Después",
      nextSteps: [
        "La oficina del concejal recibe su correo",
        "Ven que múltiples residentes están preocupados",
        "Nuestro esfuerzo organizado muestra que somos serios",
        "Los topes se priorizan para instalación"
      ]
    },
    zh: {
      title: "申请Pershing路减速带",
      subtitle: "与邻居一起让我们的街道更安全",
      urgentTitle: "Pershing路危险超速问题",
      urgentSubtitle: "帮助我们在Kedzie和St. Louis之间安装交通缓和措施",
      criticalIssue: "Kedzie和St. Louis之间的安全问题",
      mainDescription: "Kedzie和St. Louis之间的Pershing路发生了涉及高速车辆追逐的帮派暴力事件。居民正在组织要求通过适当的交通缓和措施立即改善安全。",
      documentedConcerns: "记录在案的安全问题：",
      concerns: {
        gang: "与帮派有关的高速车辆追逐",
        criminal: "涉及危险驾驶的犯罪活动",
        modified: "改装车主在白天和夜晚的随机时间超速行驶",
        daily: "住宅街道每日超速",
        children: "儿童和家庭面临风险",
        nearMiss: "与行人多次险些发生事故"
      },
      whyUrgent: "为什么需要减速带",
      whyUrgentText: "减速带是一种经过验证的交通缓和措施，可以降低车速并提高所有居民的安全。",
      sendEmail: "向Ramirez议员发送邮件（第12区）",
      yourName: "您的姓名：",
      to: "收件人：",
      subject: "主题：",
      message: "信息：",
      showEmail: "📖 显示邮件内容",
      hideEmail: "📖 隐藏邮件内容",
      copyButton: "📋 复制邮件文本",
      copiedButton: "✅ 已复制！现在粘贴到您的邮件中",
      openInApp: "或直接在您的邮件应用中打开：",
      instructions: "步骤1：复制上面的邮件文本，然后步骤2：点击邮件应用按钮，然后步骤3：粘贴并发送",
      quickInstructions: "📝 快速指南：",
      instructionSteps: [
        "在上面输入您的姓名以个性化邮件",
        "点击‘复制邮件文本’按钮",
        "点击下面您首选的邮件应用按钮",
        "将复制的文本粘贴到邮件正文中",
        "发送邮件让您的声音被听到！"
      ],
      successMessage: "🎯 每一封邮件都很重要！您正在帮助Pershing路对家庭更安全。",
      detailsTitle: "如何运作 - 为什么减速带很重要",
      fhwaLink: "FHWA: 公共安全交通缓和措施",
      cdotLink: "芝加哥交通部：紧急减速带流程",
      howItWorks: "如何运作 - 简单步骤",
      steps: [
        "了解我们街道的安全问题",
        "在下面的表格中输入您的姓名",
        "点击按钮发送邮件",
        "您的声音与邻居一起请求减速带",
        "我们共同让街道更安全"
      ],
      whyItMatters: "为什么您的邮件很重要",
      whyItMattersText: "当许多邻居就同一问题联系议员时，这表明这是社区的真正优先事项。减速带需要社区支持才能获得批准。",
      whatNext: "接下来会发生什么",
      nextSteps: [
        "议员办公室收到您的邮件",
        "他们看到多位居民都在关注",
        "我们的组织努力表明我们是认真的",
        "减速带优先安装"
      ]
    }
  };
  
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
        </div>

        {/* Collapsible Why Speed Bumps Matter Section */}
        <div className="bg-blue-50 rounded-lg shadow-sm border border-blue-200 mb-8">
          <button 
            onClick={() => setShowWhyItMatters(!showWhyItMatters)}
            className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-100 transition-colors"
          >
            <h3 className="text-xl font-semibold text-blue-900">
              Why Speed Bumps Matter
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
              Having issues with this website?
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
              Submit an Issue
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
