import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contact">
      <!-- Hero Section -->
      <section class="contact-hero">
        <h1>CONTACT US</h1>
        <p>Get in touch to begin your journey toward healing, restoration and transformation.</p>
      </section>

      <!-- Confidentiality Banner -->
      <div class="confidentiality-banner">
        <span class="check-icon">✓</span>
        Sessions are private, confidential and professional
      </div>

      <!-- Contact Cards Section -->
      <section class="contact-cards-section">
        <div class="contact-cards-grid">
          <!-- Phone Card -->
          <div class="contact-card">
            <div class="card-icon">📞</div>
            <h3>Phone</h3>
            <p>
              <a href="tel:+27815837623">081 583 7623</a>
            </p>
          </div>

          <!-- Email Card -->
          <div class="contact-card">
            <div class="card-icon">✉️</div>
            <h3>Email</h3>
            <p>
              <a href="mailto:kgaole27@iCloud.com">kgaole27&#64;iCloud.com</a>
            </p>
          </div>
        </div>
      </section>

      <!-- Bank Details Section -->
      <section class="bank-details-section">
        <h2>Bank Details</h2>
        <div class="bank-details-card">
          <p><span class="detail-icon">🏛️</span> <strong>Bank:</strong> FNB</p>
          <p><span class="detail-icon">🏢</span> <strong>Account Holder:</strong> Mindset Development Institute</p>
          <p><span class="detail-icon">#️⃣</span> <strong>Account Number:</strong> 62895767758</p>
          <p><span class="detail-icon">💳</span> <strong>Account Type:</strong> Cheque Account</p>
          <p><span class="detail-icon">📍</span> <strong>Branch Code:</strong> 250655</p>
          <p><span class="detail-icon">🌐</span> <strong>Swift Code:</strong> FIRNZAJJ</p>
        </div>
      </section>

      <!-- Contact Strip -->
      <section class="contact-strip">
        HEALING | RESTORATION | TRANSFORMATION | GROWTH | THRIVING
      </section>
    </div>
  `,
  styles: [`
    .contact {
      margin-top: 70px;
    }
    
    /* Hero Section */
    .contact-hero {
      background: linear-gradient(135deg, #0f2a44, #1a3e5f);
      color: white;
      padding: 100px 20px;
      text-align: center;
    }
    
    .contact-hero h1 {
      font-size: 3rem;
      font-weight: 800;
      margin: 0;
    }
    
    .contact-hero p {
      max-width: 700px;
      margin: 20px auto 0;
      font-size: 1rem;
      line-height: 1.6;
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
    
    /* Contact Cards Section */
    .contact-cards-section {
      padding: 80px 20px;
      background: #f5f5f5;
    }
    
    .contact-cards-grid {
      max-width: 1000px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }
    
    .contact-card {
      background: white;
      padding: 30px;
      border-radius: 16px;
      border-top: 6px solid #b30000;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .contact-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    }
    
    .card-icon {
      font-size: 2rem;
      margin-bottom: 0;
    }
    
    .contact-card h3 {
      margin-top: 15px;
      color: #0f2a44;
      font-size: 1.3rem;
      margin-bottom: 10px;
    }
    
    .contact-card p {
      margin: 0;
    }
    
    .contact-card a {
      color: #b30000;
      font-weight: 600;
      text-decoration: none;
      transition: opacity 0.3s ease;
    }
    
    .contact-card a:hover {
      opacity: 0.8;
    }
    
    /* Bank Details Section */
    .bank-details-section {
      padding: 80px 20px;
      background: white;
    }
    
    .bank-details-section h2 {
      text-align: center;
      color: #0f2a44;
      font-size: 2rem;
      margin-bottom: 40px;
    }
    
    .bank-details-card {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      border-top: 6px solid #b30000;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    }
    
    .bank-details-card p {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 15px 0;
      color: #0f2a44;
      font-size: 1rem;
      line-height: 1.6;
    }
    
    .detail-icon {
      font-size: 1.1rem;
      flex-shrink: 0;
    }
    
    .bank-details-card strong {
      font-weight: 600;
      margin-right: 5px;
    }
    
    /* Contact Strip */
    .contact-strip {
      background: #b30000;
      color: white;
      text-align: center;
      padding: 60px 20px;
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 1px;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
      .contact-hero h1 {
        font-size: 2rem;
      }
      
      .contact-cards-grid {
        grid-template-columns: 1fr;
      }
      
      .bank-details-card {
        padding: 30px 20px;
      }
      
      .contact-strip {
        font-size: 0.9rem;
        padding: 40px 20px;
      }
    }
  `]
})
export class ContactComponent {
}
