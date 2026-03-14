import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="services">
      <!-- Hero Section -->
      <section class="services-hero">
        <div class="hero-sparkles">✨</div>
        <h1>OUR SERVICES</h1>
        <p class="lead">
          Explore our range of coaching programs designed to empower your mindset,
          boost confidence, and achieve your goals.
        </p>
        
        <div class="pillars">
          <span class="pillar" *ngFor="let pillar of pillars">{{ pillar }}</span>
        </div>
      </section>

      <!-- Confidentiality Banner -->
      <div class="confidentiality-banner">
        <span class="check-icon">✓</span>
        Sessions are private, confidential and professional
      </div>

      <!-- Services Grid -->
      <section class="services-section">
        <h2>Coaching Programs</h2>
        
        <div class="services-grid">
          <div class="service-card" *ngFor="let service of services">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <p class="service-duration"><strong>Duration:</strong> {{ service.duration }}</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .services {
      margin-top: 70px;
      font-family: 'Inter', 'Poppins', Arial, sans-serif;
    }
    
    /* Hero Section */
    .services-hero {
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
    
    .services-hero h1 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1rem;
      color: white;
    }
    
    .lead {
      max-width: 700px;
      margin: 20px auto;
      font-size: 1.1rem;
      color: white;
      line-height: 1.6;
    }
    
    .pillars {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-top: 30px;
    }
    
    .pillar {
      padding: 10px 20px;
      border: 2px solid #f2c94c;
      color: #f2c94c;
      border-radius: 30px;
      font-weight: 600;
      cursor: default;
      transition: all 0.3s ease;
    }
    
    .pillar:hover {
      background: #f2c94c;
      color: #0f2a44;
    }
    
    /* Confidentiality Banner */
    .confidentiality-banner {
      background: #f2c94c;
      color: #0f2a44;
      padding: 15px;
      text-align: center;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    
    .check-icon {
      font-size: 1.2rem;
      font-weight: 900;
    }
    .check-icon {
      font-size: 1.2rem;
      font-weight: 900;
    }
    
    /* Services Section */
    .services-section {
      padding: 80px 20px;
      background: #f5f5f5;
    }
    
    .services-section h2 {
      text-align: center;
      color: #0f2a44;
      font-size: 2.2rem;
      margin-bottom: 40px;
      font-weight: 700;
    }
    
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 28px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .service-card {
      background: white;
      padding: 30px;
      border-radius: 16px;
      border-top: 6px solid #b30000;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: default;
    }
    
    .service-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    }
    
    .service-icon {
      font-size: 2.5rem;
      color: #b30000;
      margin-bottom: 10px;
    }
    
    .service-card h3 {
      margin-top: 20px;
      color: #0f2a44;
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    
    .service-description {
      margin-top: 10px;
      margin-bottom: 15px;
      color: #0f2a44;
      font-size: 0.95rem;
      line-height: 1.6;
    }
    
    .service-duration {
      font-weight: 600;
      color: #b30000;
      margin: 0;
    }
    
    .service-duration strong {
      font-weight: 600;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .services-hero h1 {
        font-size: 2rem;
      }
      
      .hero-sparkles {
        font-size: 3rem;
      }
      
      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent {
  pillars = ['HEALING', 'RESTORATION', 'TRANSFORMATION', 'GROWTH', 'THRIVING'];
  
  services = [
    {
      icon: '👤',
      title: '1-on-1 Mindset Coaching',
      description: 'Personalized coaching sessions to help you overcome limiting beliefs and build confidence.',
      duration: '60 mins'
    },
    {
      icon: '❤️',
      title: 'Career Clarity Coaching',
      description: 'Guidance to help you find your purpose and direction.',
      duration: '45 mins'
    },
    {
      icon: '🏠',
      title: 'Confidence Building Program',
      description: 'Structured sessions focused on self-esteem and personal growth.',
      duration: '4 weeks'
    },
    {
      icon: '👥',
      title: 'Goal Setting & Accountability',
      description: 'Set clear goals and track your progress with weekly check-ins.',
      duration: '30 mins weekly'
    }
  ];
}
