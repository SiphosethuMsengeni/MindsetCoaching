import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer">
      <p>&copy; {{ currentYear }} Mindset Coaching. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    .footer {
      padding: 20px;
      background: #111;
      color: #fff;
      margin-top: 40px;
      text-align: center;
    }
    
    .footer p {
      margin: 0;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
