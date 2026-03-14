import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about">
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="hero-sparkles">✨</div>
        <h1>ABOUT OUR COUNSELLING SESSIONS</h1>
        <p>We provide professional mindset development counselling designed to help individuals heal emotionally, rebuild confidence, and transform their thinking patterns.</p>
        
        <!-- Value Pills -->
        <div class="value-pills">
          <span class="pill" *ngFor="let value of values">{{ value }}</span>
        </div>
      </section>

      <!-- Struggles Section -->
      <section class="struggles-section">
        <h2>Who These Sessions Are For</h2>
        <p class="section-subtitle">
          Our sessions are designed for individuals who may be struggling emotionally, mentally, or spiritually and need structured guidance, support, and restoration.
        </p>
        
        <div class="struggles-grid">
          <div class="struggle-card" *ngFor="let struggle of struggles">
            <span class="check-icon">✓</span>
            <span class="struggle-text">{{ struggle }}</span>
          </div>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="mission-section">
        <div class="mission-icon">🤝</div>
        <h2>Our Mission</h2>
        <p>
          We aim to help individuals break free from limiting beliefs, destructive thinking patterns, and emotional pain — guiding them toward healing, clarity, purpose, confidence, and lasting transformation.
        </p>
      </section>

      <!-- Confidentiality Strip -->
      <div class="confidentiality-strip">
        <span class="check-icon">✓</span>
        All sessions are private, confidential, and professionally guided
      </div>
    </div>
  `,
  styles: [`
    .about {
      margin-top: 70px;
    }
    
    /* Hero Section */
    .about-hero {
      background: linear-gradient(135deg, #0f2a44, #1a3e5f);
      color: white;
      padding: 100px 20px;
      text-align: center;
      position: relative;
    }
    
    .hero-sparkles {
      position: absolute;
      top: 30px;
      right: 30px;
      font-size: 5rem;
      opacity: 0.1;
    }
    
    .about-hero h1 {
      font-size: 3rem;
      font-weight: 800;
      margin: 0 0 20px 0;
    }
    
    .about-hero > p {
      max-width: 800px;
      margin: 0 auto 30px;
      font-size: 1.1rem;
      line-height: 1.6;
    }
    
    .value-pills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-top: 30px;
    }
    
    .pill {
      padding: 10px 20px;
      border: 2px solid #f2c94c;
      color: #f2c94c;
      border-radius: 30px;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    
    .pill:hover {
      background: #f2c94c;
      color: #0f2a44;
    }
    
    /* Struggles Section */
    .struggles-section {
      padding: 80px 20px;
      background: #f5f5f5;
    }
    
    .struggles-section h2 {
      text-align: center;
      color: #0f2a44;
      font-size: 2.2rem;
      margin-bottom: 20px;
    }
    
    .section-subtitle {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 40px;
      color: #555;
      font-size: 1rem;
      line-height: 1.6;
    }
    
    .struggles-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
      max-width: 1100px;
      margin: 0 auto;
    }
    
    .struggle-card {
      background: white;
      padding: 25px;
      border-radius: 16px;
      border-left: 6px solid #b30000;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      display: flex;
      align-items: center;
      gap: 12px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .struggle-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
    }
    
    .struggle-card .check-icon {
      color: #b30000;
      font-size: 1.3rem;
      font-weight: 900;
      flex-shrink: 0;
    }
    
    .struggle-text {
      color: #0f2a44;
      font-weight: 500;
      font-size: 0.95rem;
    }
    
    /* Mission Section */
    .mission-section {
      padding: 80px 20px;
      text-align: center;
      background: white;
    }
    
    .mission-icon {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }
    
    .mission-section h2 {
      color: #0f2a44;
      font-size: 2rem;
      margin: 20px 0;
    }
    
    .mission-section p {
      max-width: 800px;
      margin: 20px auto 0;
      font-size: 1.05rem;
      color: #555;
      line-height: 1.7;
    }
    
    /* Confidentiality Strip */
    .confidentiality-strip {
      background: #b30000;
      color: white;
      padding: 20px;
      text-align: center;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    
    .confidentiality-strip .check-icon {
      font-size: 1.2rem;
      font-weight: 900;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .about-hero h1 {
        font-size: 2rem;
      }
      
      .hero-sparkles {
        font-size: 3rem;
        top: 20px;
        right: 20px;
      }
      
      .struggles-grid {
        grid-template-columns: 1fr;
      }
      
      .mission-section h2 {
        font-size: 1.6rem;
      }
    }
  `]
})
export class AboutComponent {
  values = ['HEALING', 'RESTORATION', 'TRANSFORMATION', 'GROWTH', 'THRIVING'];
  
  struggles = [
    'Anger',
    'Depression',
    'Rejection',
    'Low self-esteem',
    'Suicidal thoughts',
    'Procrastination',
    'Anxiety',
    'Negative thinking',
    'Inferiority complex',
    'Backsliding (for Christians)',
    'Lack of self-confidence',
    'Having many goals and dreams but unable to achieve them'
  ];
}
