import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="home">
      <!-- Hero Section -->
      <section class="hero">
        <div class="container">
          <div class="hero-content fade-in-up">
            <h1 class="hero-title">E.M.E.L.D.T</h1>
            <p class="hero-subtitle">A guided process that helps you understand your thinking patterns, break limiting beliefs, and build strong mindsets that lead to confidence, resilience, and lasting success.</p>
            <p class="hero-tagline">Understand yourself and your relationships better to manage and make better decisions.</p>
            <div class="pillars">
              <div class="pillar" *ngFor="let pillar of pillars">{{ pillar }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Confidentiality Banner -->
      <section class="confidentiality-banner">
        <div class="container">
          <p><span class="icon">🔒</span> Sessions are private, confidential and professional</p>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features">
        <div class="container">
          <h2 class="section-title">Why Choose Mindset Coaching?</h2>
          <p class="section-subtitle">Discover the benefits of working with a professional mindset coach</p>
          
          <div class="features-grid">
            <div class="feature-card" *ngFor="let feature of features">
              <div class="feature-icon">{{ feature.icon }}</div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="process">
        <div class="container">
          <h2 class="section-title">How It Works</h2>
          <p class="section-subtitle">A simple, proven process to help you achieve lasting change</p>
          
          <div class="process-steps">
            <div class="process-step" *ngFor="let step of processSteps; let i = index">
              <div class="step-number">{{ i + 1 }}</div>
              <div class="step-content">
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Transform Your Life?</h2>
            <p>Take the first step towards achieving your goals. Schedule your free consultation today.</p>
            <a routerLink="/contact" class="btn btn-primary">Book Free Consultation</a>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-card" *ngFor="let stat of stats">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home {
      margin-top: 70px;
    }
    
    /* Hero Section */
    .hero {
      padding: 8rem 0 6rem;
      background: linear-gradient(135deg, #1a3a52 0%, #0d2438 100%);
      text-align: center;
    }
    
    .hero .container {
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .hero-title {
      font-size: 6rem;
      margin-bottom: 2rem;
      line-height: 1.2;
      color: #2ecc71;
      letter-spacing: 0.2em;
      font-weight: 700;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      color: white;
      margin-bottom: 1.5rem;
      line-height: 1.8;
      max-width: 900px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .hero-tagline {
      font-size: 1.15rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 3rem;
      font-style: italic;
      line-height: 1.6;
    }
    
    .pillars {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 3rem;
    }
    
    .pillar {
      padding: 0.875rem 2rem;
      border: 2px solid var(--gold-color);
      border-radius: 30px;
      color: var(--gold-color);
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.05em;
      transition: all 0.3s ease;
      cursor: default;
    }
    
    .pillar:hover {
      background: var(--gold-color);
      color: var(--dark-color);
      transform: translateY(-3px);
    }
    
    .confidentiality-banner {
      background: var(--gold-color);
      padding: 1.5rem 0;
      text-align: center;
    }
    
    .confidentiality-banner p {
      color: var(--dark-color);
      font-weight: 600;
      font-size: 1.1rem;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    
    .confidentiality-banner .icon {
      font-size: 1.3rem;
    }
    
    /* Features Section */
    .features {
      padding: 6rem 0;
      background: white;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    
    .feature-card {
      padding: 2rem;
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
      border: 2px solid transparent;
    }
    
    .feature-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 40px rgba(26, 58, 82, 0.2);
      border-color: var(--gold-color);
    }
    
    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .feature-card h3 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      color: var(--dark-color);
    }
    
    .feature-card p {
      color: var(--text-light);
      line-height: 1.6;
    }
    
    /* Process Section */
    .process {
      padding: 6rem 0;
      background: var(--light-color);
    }
    
    .process-steps {
      display: grid;
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .process-step {
      display: flex;
      gap: 2rem;
      align-items: flex-start;
    }
    
    .step-number {
      flex-shrink: 0;
      width: 60px;
      height: 60px;
      background: var(--gold-color);
      color: var(--dark-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    .step-content h3 {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      color: var(--dark-color);
    }
    
    .step-content p {
      color: var(--text-light);
      line-height: 1.6;
    }
    
    /* CTA Section */
    .cta {
      padding: 6rem 0;
      background: linear-gradient(135deg, #1a3a52, #0d2438);
      color: white;
      text-align: center;
    }
    
    .cta-content h2 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .cta-content p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
    
    .cta .btn-primary {
      background: var(--gold-color);
      color: var(--dark-color);
    }
    
    .cta .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(244, 197, 66, 0.4);
      background: #ffd152;
    }
    
    /* Stats Section */
    .stats {
      padding: 6rem 0;
      background: white;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 3rem;
      text-align: center;
    }
    
    .stat-number {
      font-size: 3rem;
      font-weight: 700;
      color: var(--gold-color);
      margin-bottom: 0.5rem;
    }
    
    .stat-label {
      color: var(--text-light);
      font-size: 1.1rem;
    }
    
    /* Responsive */
    @media (max-width: 968px) {
      .hero-title {
        font-size: 3.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.1rem;
      }
      
      .pillars {
        gap: 1rem;
      }
      
      .pillar {
        font-size: 0.9rem;
        padding: 0.75rem 1.5rem;
      }
      
      .process-step {
        flex-direction: column;
        text-align: center;
        align-items: center;
      }
    }
  `]
})
export class HomeComponent {
  pillars = ['HEALING', 'RESTORATION', 'TRANSFORMATION', 'GROWTH', 'THRIVING'];
  
  features = [
    {
      icon: '🎯',
      title: 'Goal Setting',
      description: 'Define clear, achievable goals and create actionable plans to reach them.'
    },
    {
      icon: '💪',
      title: 'Build Confidence',
      description: 'Develop unshakable self-confidence and overcome limiting beliefs.'
    },
    {
      icon: '🧠',
      title: 'Mental Clarity',
      description: 'Gain clarity of thought and make better decisions in all areas of life.'
    },
    {
      icon: '⚡',
      title: 'Breakthrough Results',
      description: 'Achieve breakthrough results faster than you ever thought possible.'
    },
    {
      icon: '🌱',
      title: 'Personal Growth',
      description: 'Continuous development and growth in all aspects of your life.'
    },
    {
      icon: '🤝',
      title: 'Accountability',
      description: 'Stay on track with regular check-ins and personalized support.'
    }
  ];

  processSteps = [
    {
      title: 'Discovery Call',
      description: 'We start with a free consultation to understand your goals, challenges, and where you want to be.'
    },
    {
      title: 'Create Your Plan',
      description: 'Together, we develop a personalized coaching plan tailored to your specific needs and objectives.'
    },
    {
      title: 'Take Action',
      description: 'Begin implementing strategies and techniques in your daily life with my guidance and support.'
    },
    {
      title: 'Track Progress',
      description: 'Regular sessions to monitor progress, celebrate wins, and adjust strategies as needed.'
    },
    {
      title: 'Achieve Results',
      description: 'Experience lasting transformation and achieve the goals you set out to accomplish.'
    }
  ];

  stats = [
    { number: '500+', label: 'Clients Coached' },
    { number: '95%', label: 'Success Rate' },
    { number: '10+', label: 'Years Experience' },
    { number: '1000+', label: 'Lives Changed' }
  ];
}
