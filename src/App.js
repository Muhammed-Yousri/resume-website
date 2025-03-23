
import React from "react";

const resume = {
  name: "Muhammed Yousri Sherif",
  contact: {
    location: "Cairo, Egypt",
    phone: "+201140611051",
    email: "Muhammed.Yousri.Sherif@gmail.com",
    linkedin: "https://www.linkedin.com/in/muhammed-yousri-41366b57"
  },
  professional_summary:
    "Accomplished Senior Wireless Product Engineer with 12+ years of experience leading complex telecom projects...",
  core_expertise: [
    "5G NSA/SA Deployment",
    "RAN Network Modernization",
    "Network Design (LLD/HLD)",
    "OSS/BSC/RNC/Site Integration",
    "Remote Delivery & Project Management",
    "Cross-functional Team Leadership",
    "Rural Connectivity Solutions (RuralStar)",
    "Network Software Upgrades",
    "Cloud Technologies (AWS, Kubernetes)",
    "Automation & Programming (Python, C/C++)",
    "Network Security & Change Management",
    "3GPP Specifications & Technical Reports",
    "Open RAN & ORAN Alliance Standards"
  ],
  professional_experience: [
    {
      title: "RAN Wireless Team Leader",
      company: "Huawei Technologies",
      location: "Celtiis Benin",
      duration: "Jan 2023 - Present",
      responsibilities: [
        "Led design and deployment of the first 5G NSA network in Benin",
        "Delivered RuralStar solutions to 150+ villages",
        "Implemented OSS/BSC/RNC network software upgrades"
      ]
    },
    {
      title: "RAN Wireless Team Leader",
      company: "Huawei Technologies",
      location: "Orange Congo DRC",
      duration: "Sep 2020 - Dec 2022",
      responsibilities: [
        "Managed large-scale network modernization and expansion projects",
        "Provided structured training to enhance team productivity"
      ]
    },
    {
      title: "RAN Wireless Technical Lead",
      company: "Huawei Technologies",
      location: "Remote Delivery (GSC India)",
      duration: "Jun 2020 - Aug 2020",
      responsibilities: [
        "Executed remote software upgrades for 15,000+ sites in Cameroon and Morocco",
        "Developed tailored training programs"
      ]
    },
    {
      title: "Wireless Project Engineer / Leader",
      company: "Huawei Technologies",
      location: "Various Countries",
      duration: "2014 - 2020",
      responsibilities: [
        "Led and supported wireless project delivery across Botswana (BTCL), Ghana (MTN), Uganda (MTN), South Africa (Vodacom), Mali (Sotelma), Saudi Arabia (STC), and Egypt (Vodafone)",
        "Contributed to planning, integration, and modernization of RAN networks in diverse environments"
      ]
    }
  ],
  education: {
    degree: "Bachelor of Electronics and Communication Engineering",
    institution: "Faculty of Electronics Engineering, Egypt",
    duration: "2006 - 2011"
  },
  awards: [
    "GTS President Award (2024 & earlier)",
    "Quality Star Award (2023, 2024)",
    "Outstanding Mentor Award (Huawei GSC)"
  ],
  certifications: [
    "C&Q Level 4 Wireless Product Technology Certification (Huawei)",
    "Open RAN System Integration (Apis Training, 2025)",
    "Amazon EC2 Getting Started (AWS Training, 2025)"
  ],
  technical_skills: {
    telecom: ["U2020", "MAE", "CME"],
    cloud_containers: ["AWS EC2", "Kubernetes", "Docker"],
    programming: ["Python"],
    software: ["MS Office Suite"]
  },
  languages: {
    Arabic: "Native",
    English: "Fluent"
  }
};

export default function ResumeWebsite() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{resume.name}</h1>
        <p>{resume.contact.location} | {resume.contact.phone} | <a href={`mailto:${resume.contact.email}`} style={{ color: 'blue' }}>{resume.contact.email}</a></p>
        <a href={resume.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>LinkedIn</a>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <p>{resume.professional_summary}</p>
      </section>

      <section>
        <h2>Core Expertise</h2>
        <ul>
          {resume.core_expertise.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Professional Experience</h2>
        {resume.professional_experience.map((job, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <h3>{job.title} @ {job.company}</h3>
            <p><i>{job.location} | {job.duration}</i></p>
            <ul>
              {job.responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        <p>{resume.education.degree} - {resume.education.institution} ({resume.education.duration})</p>
      </section>

      <section>
        <h2>Awards & Achievements</h2>
        <ul>
          {resume.awards.map((award, index) => (
            <li key={index}>{award}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          {resume.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Technical Skills</h2>
        {Object.entries(resume.technical_skills).map(([category, skills], index) => (
          <div key={index}>
            <h4>{category.replace('_', ' ')}</h4>
            <ul>
              {skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Languages</h2>
        <ul>
          {Object.entries(resume.languages).map(([lang, level], index) => (
            <li key={index}>{lang}: {level}</li>
          ))}
        </ul>
      </section>

      <footer style={{ textAlign: 'center', fontSize: '0.875rem', color: 'gray', marginTop: '2rem' }}>
        <p>© {new Date().getFullYear()} Muhammed Yousri Sherif. All rights reserved.</p>
      </footer>
    </div>
  );
}
