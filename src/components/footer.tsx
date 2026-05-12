import FadeIn from './fade-in'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <FadeIn>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-medium">Signal</span>
                <span className="text-sm text-muted-foreground">/studio</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Conversion-focused creative for paid acquisition teams. Ads, landing pages, and campaign assets built to perform.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-3">Navigate</p>
              <ul className="space-y-1.5 text-sm">
                <li><a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</a></li>
                <li><a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</a></li>
                <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
                <li><a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Process</a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-3">Contact</p>
              <ul className="space-y-1.5 text-sm">
                <li><a href="mailto:hello@signalstudio.co.uk" className="text-muted-foreground hover:text-foreground transition-colors">hello@signalstudio.co.uk</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
              </ul>
            </div>

            {/* CTA reminder */}
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-3">Ready?</p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-foreground text-background text-xs font-medium px-4 py-2 rounded-full hover:bg-foreground/90 transition">
                Request a Fit Review
              </a>
              <p className="text-xs text-muted-foreground mt-3">Reply within 24 hours. No pressure.</p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">&copy; 2018 Signal Studio. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">Independent creative studio &middot; Manchester, UK</p>
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}
