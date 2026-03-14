import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="testimonials">
      <!-- Hero Section -->
      <section class="testimonials-hero">
        <div class="container">
          <h1 class="fade-in-up">Client Success Stories</h1>
          <p class="lead fade-in-up">Hear from people who have transformed their lives through mindset coaching</p>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-card" *ngFor="let stat of stats">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Grid -->
      <section class="testimonials-section">
        <div class="container">
          <h2 class="section-title">What My Clients Say</h2>
          <div class="testimonials-grid">
            <div class="testimonial-card" *ngFor="let testimonial of testimonials">
              <div class="rating">
                <span *ngFor="let star of [1,2,3,4,5]">⭐</span>
              </div>
              <p class="testimonial-text">"{{ testimonial.text }}"</p>
              <div class="testimonial-author">
                <div class="author-avatar">{{ testimonial.initial }}</div>
                <div class="author-info">
                  <h4>{{ testimonial.name }}</h4>
                  <p>{{ testimonial.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Video Testimonials -->
      <section class="video-testimonials">
        <div class="container">
          <h2 class="section-title">Video Testimonials</h2>
          <p class="section-subtitle">Watch these inspiring transformation stories</p>
          <div class="video-grid">
            <div class="video-card" *ngFor="let video of videoTestimonials">
              <div class="video-placeholder">
                <div class="play-button">▶️</div>
                <span class="video-emoji">{{ video.emoji }}</span>
              </div>
              <h3>{{ video.title }}</h3>
              <p>{{ video.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Results Section -->
      <section class="results-section">
        <div class="container">
          <h2 class="section-title">Client Results</h2>
          <div class="results-grid">
            <div class="result-card" *ngFor="let result of results">
              <div class="result-icon">{{ result.icon }}</div>
              <h3>{{ result.title }}</h3>
              <p>{{ result.description }}</p>
              <div class="result-stat">{{ result.stat }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Write Your Success Story?</h2>
            <p>Join hundreds of successful clients who have transformed their lives through coaching.</p>
            <a routerLink="/contact" class="btn btn-primary">Start Your Journey</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .testimonials {
      margin-top: 70px;
    }
    
    .testimonials-hero {
      padding: 6rem 0 4rem;
      background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
      text-align: center;
    }
    
    .testimonials-hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .lead {
      font-size: 1.25rem;
      color: var(--text-light);
      max-width: 700px;
      margin: 0 auto;
    }
    
    .stats-section {
      padding: 4rem 0;
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
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }
    
    .stat-label {
      color: var(--text-light);
      font-size: 1.1rem;
    }
    
    .testimonials-section {
      padding: 6rem 0;
      background: var(--light-color);
    }
    
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }
    
    .testimonial-card {
      background: white;
      padding: 2.5rem;
      border-radius: 20px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .testimonial-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 50px rgba(99, 102, 241, 0.15);
    }
    
    .rating {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    
    .testimonial-text {
      color: var(--text-color);
      line-height: 1.8;
      margin-bottom: 2rem;
      font-size: 1.05rem;
      font-style: italic;
    }
    
    .testimonial-author {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    
    .author-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 700;
      flex-shrink: 0;
    }
    
    .author-info h4 {
      margin-bottom: 0.25rem;
      font-size: 1.1rem;
    }
    
    .author-info p {
      color: var(--text-light);
      font-size: 0.9rem;
    }
    
    .video-testimonials {
      padding: 6rem 0;
      background: white;
    }
    
    .video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .video-card {
      text-align: center;
    }
    
    .video-placeholder {
      position: relative;
      width: 100%;
      aspect-ratio: 16/9;
      background: linear-gradient(135deg, #f0f9ff, #e0e7ff);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      cursor: pointer;
      transition: transform 0.3s ease;
      font-size: 4rem;
    }
    
    .video-placeholder:hover {
      transform: scale(1.05);
    }
    
    .play-button {
      position: absolute;
      font-size: 3rem;
      background: white;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
    
    .video-card h3 {
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
    }
    
    .video-card p {
      color: var(--text-light);
    }
    
    .results-section {
      padding: 6rem 0;
      background: var(--light-color);
    }
    
    .results-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }
    
    .result-card {
      background: white;
      padding: 2.5rem;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    .result-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .result-card h3 {
      margin-bottom: 0.75rem;
      font-size: 1.5rem;
    }
    
    .result-card p {
      color: var(--text-light);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .result-stat {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-color);
    }
    
    .cta {
      padding: 6rem 0;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
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
      background: white;
      color: var(--primary-color);
    }
    
    .cta .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 768px) {
      .testimonials-hero h1 {
        font-size: 2.5rem;
      }
      
      .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class TestimonialsComponent {
  stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '95%', label: 'Success Rate' },
    { number: '10+', label: 'Years Experience' }
  ];

  testimonials = [
    {
      initial: 'S',
      name: 'Sarah Mitchell',
      title: 'Entrepreneur',
      text: 'Working with this coach has been life-changing. I went from feeling stuck and overwhelmed to confident and in control of my business and personal life. The strategies I learned have helped me triple my income while maintaining work-life balance.'
    },
    {
      initial: 'M',
      name: 'Michael Chen',
      title: 'Software Engineer',
      text: 'I was skeptical about coaching at first, but the results speak for themselves. I overcame my imposter syndrome, got promoted, and most importantly, I finally believe in myself. This investment has paid off tenfold.'
    },
    {
      initial: 'E',
      name: 'Emily Rodriguez',
      title: 'Marketing Director',
      text: 'The mindset tools I gained through coaching have been invaluable. I now handle stress better, make decisions with confidence, and lead my team more effectively. My only regret is not starting sooner!'
    },
    {
      initial: 'D',
      name: 'David Thompson',
      title: 'Business Owner',
      text: 'After years of trying to figure things out on my own, coaching provided the clarity and accountability I needed. My business has grown by 200%, and I feel more fulfilled than ever. Highly recommend!'
    },
    {
      initial: 'J',
      name: 'Jennifer Lee',
      title: 'Teacher',
      text: 'The transformation I experienced was incredible. I went from burned out and questioning my career choice to feeling passionate and energized again. The techniques I learned have improved every aspect of my life.'
    },
    {
      initial: 'R',
      name: 'Robert Williams',
      title: 'Sales Executive',
      text: 'This coaching program exceeded all my expectations. I not only achieved my professional goals but also improved my relationships and overall happiness. The ROI has been tremendous in every area of my life.'
    }
  ];

  videoTestimonials = [
    {
      emoji: '🎯',
      title: 'From Stuck to Successful',
      description: 'How Sarah transformed her career in 6 months'
    },
    {
      emoji: '💪',
      title: 'Overcoming Self-Doubt',
      description: 'Michael\'s journey to confidence and leadership'
    },
    {
      emoji: '✨',
      title: 'Finding Work-Life Balance',
      description: 'Emily shares her transformation story'
    }
  ];

  results = [
    {
      icon: '📈',
      title: 'Career Growth',
      description: 'Average salary increase for clients',
      stat: '+45%'
    },
    {
      icon: '😊',
      title: 'Happiness Score',
      description: 'Improvement in life satisfaction',
      stat: '+80%'
    },
    {
      icon: '🎯',
      title: 'Goal Achievement',
      description: 'Clients who reach their goals',
      stat: '95%'
    },
    {
      icon: '⭐',
      title: 'Client Satisfaction',
      description: 'Would recommend to others',
      stat: '99%'
    }
  ];
}
