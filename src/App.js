
import React, { useState, useEffect } from "react";
import './App.css';

export default function ResumeWebsite() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`container ${theme}`}>
      <header className="hero">
        <img src="/profile.jpg" alt="Profile" className="profile-photo" />
        <h1>Muhammed Yousri Sherif</h1>
        <h2>Senior Wireless Product Engineer</h2>
        <p>12+ years leading telecom projects across Africa, Europe & the Middle East</p>
        <div className="hero-buttons">
          <a href="/Muhammed_Yousri_Sherif_CV_2025.pdf" download className="button">📄 Download CV</a>
          <a href="https://wa.me/201140611051" target="_blank" rel="noopener noreferrer" className="button secondary">💬 Contact via WhatsApp</a>
        </div>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <p>Accomplished Senior Wireless Product Engineer with 12+ years of experience leading large-scale RAN and 5G deployment projects across Africa, Europe, and the Middle East.</p>
      </section>

      <section>
        <h2>Core Expertise</h2>
        <ul>
          <li>5G NSA/SA Deployment</li>
          <li>Network Modernization & Rural Connectivity</li>
          <li>OSS/BSC/RNC Software Upgrades</li>
          <li>Huawei & Multi-Vendor Project Leadership</li>
          <li>Cloud (AWS, Kubernetes), Python, ORAN</li>
        </ul>
      </section>

      <section>
        <h2>Selected Experience</h2>
        <div className="card">
          <h3>Benin – RAN Wireless Team Leader (2023–Now)</h3>
          <ul>
            <li>Led design & deployment of first 5G NSA network</li>
            <li>150+ RuralStar village sites connected</li>
            <li>OSS/BSC software modernization</li>
          </ul>
        </div>
        <div className="card">
          <h3>Congo DRC – RAN Wireless Team Leader (2020–2022)</h3>
          <ul>
            <li>Managed nationwide modernization & expansion</li>
            <li>Delivered 1,000 sites in 2.5 months (Ruwenzori Project)</li>
          </ul>
        </div>
        <div className="card">
          <h3>Remote Delivery – GSC India (2020)</h3>
          <ul>
            <li>Upgraded 15,000+ sites remotely (Morocco & Cameroon)</li>
            <li>Trained engineers across regions</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Certifications & Awards</h2>
        <ul>
          <li>Huawei C&Q Level 4 Wireless Tech Cert</li>
          <li>Open RAN Integration (2025)</li>
          <li>AWS EC2 | Python | Kubernetes</li>
          <li>GTS President Award • Mentor Award • Quality Star</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p>Bachelor of Electronics & Communication Engineering, Egypt (2006–2011)</p>
      </section>

      <section>
        <h2>Languages</h2>
        <p>Arabic: Native • English: Fluent</p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Muhammed Yousri Sherif</p>
      </footer>
    </div>
  );
}
