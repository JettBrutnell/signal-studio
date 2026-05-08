import FadeIn from './fade-in'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <FadeIn>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="text-sm font-medium">Signal</span>
              <span className="text-sm text-muted-foreground">
                &mdash; Independent Design Studio
              </span>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              &copy; 2018 Signal Studio. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <a href="mailto:hello@signalstudio.co.uk" className="hover:text-foreground transition-colors duration-300">
                Email
              </a>
              <a href="#" className="hover:text-foreground transition-colors duration-300">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground transition-colors duration-300">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}
