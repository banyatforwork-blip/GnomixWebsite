import { useState, useEffect, useRef } from "react";
import { Download, Shield, Sparkles, Zap, Github, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { SiSourceforge } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import gnomixIcon from "@assets/icon_1762664084612_1763294693618.png";
import laptopImage from "@assets/stock_images/modern_laptop_comput_f461d808.jpg";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const mouseEnter = () => setCursorVariant("hover");
  const mouseLeave = () => setCursorVariant("default");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        className="cursor-dot"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      <div
        className={`cursor-outline ${cursorVariant === "hover" ? "cursor-hover" : ""}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Animated Dot Grid Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="dot-grid" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-chart-3/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-chart-2/20 rounded-full blur-3xl animate-float-slow" />
        
        {/* Floating Particles */}
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
        <div className="particle particle-5" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 animate-slide-down-nav">
        <div className="glass-nav backdrop-blur-2xl bg-background/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3 animate-fade-in">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-3 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 opacity-70 group-hover:opacity-100 animate-pulse-glow" />
                  <img 
                    src={gnomixIcon} 
                    alt="Gnomix" 
                    className="w-10 h-10 rounded-2xl relative z-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" 
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Gnomix
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6 animate-fade-in-delayed">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 relative nav-link"
                  data-testid="link-features"
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("download")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 relative nav-link"
                  data-testid="link-download"
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                >
                  Download
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 relative nav-link"
                  data-testid="link-faq"
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                >
                  FAQ
                </button>
                <Button 
                  size="sm" 
                  className="glow-button relative overflow-hidden group"
                  data-testid="button-download-nav" 
                  onClick={() => scrollToSection("download")}
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                >
                  <span className="relative z-10 flex items-center">
                    <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Download
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-chart-3 to-primary bg-[length:200%_100%] animate-shimmer" />
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover-glow"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu-toggle"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 glass-card backdrop-blur-2xl animate-slide-down" data-testid="mobile-menu">
              <div className="px-4 py-4 space-y-3">
                <button
                  onClick={() => scrollToSection("features")}
                  className="block w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-all duration-300 hover:translate-x-2"
                  data-testid="link-features-mobile"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("download")}
                  className="block w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-all duration-300 hover:translate-x-2"
                  data-testid="link-download-mobile"
                >
                  Download
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="block w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-all duration-300 hover:translate-x-2"
                  data-testid="link-faq-mobile"
                >
                  FAQ
                </button>
                <Button
                  className="w-full glow-button"
                  size="sm"
                  data-testid="button-download-mobile"
                  onClick={() => scrollToSection("download")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-chart-3 to-chart-2 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 animate-pulse-glow" />
                <img 
                  src={gnomixIcon} 
                  alt="Gnomix Icon" 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl relative z-10 shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                  data-testid="img-hero-icon"
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                />
              </div>
            </div>

            <Badge className="glass-badge backdrop-blur-xl border-white/20 text-sm px-6 py-2 animate-float-badge" data-testid="badge-beta">
              <span className="relative z-10">Beta - Active Development</span>
            </Badge>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-gradient-text"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="text-hero-title"
            >
              <span className="bg-gradient-to-r from-primary via-chart-3 to-chart-2 bg-clip-text text-transparent text-glow">
                Ubuntu Without
                <br />
                The ~~Bullshit~~
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up-delayed" data-testid="text-hero-subtitle">
              Experience pure, stock GNOME on Ubuntu. No Canonical modifications, no custom themes, no bloat. Just clean, beautiful Linux.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up-extra-delayed">
              <Button
                size="lg"
                className="glow-button-lg text-lg px-10 py-7 h-auto group relative overflow-hidden"
                data-testid="button-download-hero"
                onClick={() => scrollToSection("download")}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Gnomix
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-chart-3 to-primary bg-[length:200%_100%] animate-shimmer" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-button text-lg px-10 py-7 h-auto backdrop-blur-xl border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:scale-105"
                data-testid="button-learn-more"
                onClick={() => scrollToSection("features")}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-8 h-8 text-primary/70" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="text-features-title"
            >
              Why Gnomix?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-subtitle">
              Built for those who want the stability of Ubuntu with the purity of upstream GNOME
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Stock GNOME",
                description: "Pure GNOME desktop environment, exactly as upstream intended. No modifications, no compromises.",
                color: "from-primary/20 to-chart-3/20",
                testId: "card-feature-1"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Snap-Free",
                description: "Built on Ubuntu's solid foundation, minus the Snap's ecosystem. No snap store, no telemetry.",
                color: "from-chart-2/20 to-primary/20",
                testId: "card-feature-2"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "No Ubuntu Themes",
                description: "Clean, vanilla GNOME aesthetics. Experience GNOME the way it was designed to look and feel.",
                color: "from-chart-3/20 to-chart-2/20",
                testId: "card-feature-3"
              },
              {
                icon: <Github className="w-6 h-6" />,
                title: "Active Development",
                description: "Currently in beta and actively maintained. Regular updates bringing the latest GNOME improvements.",
                color: "from-primary/20 to-chart-1/20",
                testId: "card-feature-4"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card glass-card p-6 rounded-2xl border border-white/10 backdrop-blur-xl hover:border-white/30 transition-all duration-500 group animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={feature.testId}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <div className={`relative mb-4 inline-block`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100`} />
                  <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary/10 to-chart-3/10 rounded-xl flex items-center justify-center text-primary border border-white/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="text-screenshot-title"
            >
              Beautiful by Default
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-screenshot-subtitle">
              Pure GNOME aesthetics without the clutter
            </p>
          </div>
          <div 
            className="relative group animate-fade-in-up"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-chart-3 to-chart-2 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-30 group-hover:opacity-50 animate-pulse-slow" />
            <div className="relative glass-card rounded-2xl overflow-hidden border border-white/20 group-hover:scale-[1.02] transition-all duration-500">
              <img
                src={laptopImage}
                alt="Gnomix Desktop"
                className="w-full h-auto"
                data-testid="img-screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 sm:py-32 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="text-download-title"
            >
              Get Started
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-download-subtitle">
              Download the latest beta release and experience GNOME as it should be
            </p>
          </div>

          <div className="relative group animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-chart-3 to-chart-2 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-20 group-hover:opacity-40 animate-pulse-slow" />
            <Card className="relative glass-card backdrop-blur-2xl border-white/20 rounded-2xl overflow-hidden" data-testid="card-download">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8 space-y-4">
                  <Badge variant="secondary" className="glass-badge backdrop-blur-xl border-white/20 mb-4 animate-float-badge-slow" data-testid="badge-version">
                    Latest: gnomix-beta-2025.11.05
                  </Badge>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Gnomix Beta
                  </h3>
                  <p className="text-muted-foreground">ISO Size: ~5.5 GB | AMD64 Architecture</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button
                      size="lg"
                      className="glow-button-lg text-lg px-10 py-7 h-auto relative overflow-hidden group"
                      asChild
                      data-testid="button-download-sourceforge"
                      onMouseEnter={mouseEnter}
                      onMouseLeave={mouseLeave}
                    >
                      <a
                        href="https://sourceforge.net/projects/gubuntu-desktop/files/latest/download"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="relative z-10 flex items-center">
                          <Download className="w-5 h-5 mr-2" />
                          Download from SourceForge
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-chart-3 to-primary bg-[length:200%_100%] animate-shimmer" />
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="glass-button text-lg px-10 py-7 h-auto backdrop-blur-xl border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300"
                      asChild
                      data-testid="button-view-github"
                      onMouseEnter={mouseEnter}
                      onMouseLeave={mouseLeave}
                    >
                      <a
                        href="https://github.com/gubuntu-dev-icebear/Gubuntu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8">
                  <h4 className="font-semibold mb-6 text-lg">System Requirements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    {[
                      { label: "Processor", value: "2 GHz dual-core or better" },
                      { label: "Memory", value: "4 GB RAM minimum (8 GB recommended)" },
                      { label: "Storage", value: "25 GB available disk space" },
                      { label: "Display", value: "1024×768 resolution or higher" }
                    ].map((req, index) => (
                      <div 
                        key={index} 
                        className="glass-card p-4 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: `${index * 50}ms` }}
                        onMouseEnter={mouseEnter}
                        onMouseLeave={mouseLeave}
                      >
                        <p className="text-muted-foreground mb-1 text-xs">{req.label}</p>
                        <p className="font-medium text-foreground">{req.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 sm:py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="text-faq-title"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-faq-subtitle">
              Everything you need to know about Gnomix
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4 animate-fade-in-up">
            {[
              {
                question: "What is Gnomix?",
                answer: "Gnomix is a Linux distribution based on Ubuntu that delivers a pure, stock GNOME desktop experience. It removes Snap's modifications and custom themes, giving you GNOME exactly as the upstream developers intended.",
                testId: "1"
              },
              {
                question: "Why choose Gnomix over Ubuntu?",
                answer: "If you love Ubuntu's stability and package ecosystem but prefer vanilla GNOME over Canonical's customizations, Gnomix is perfect for you. No snap store, no Ubuntu themes, no telemetry—just clean GNOME on Ubuntu's foundation.",
                testId: "2"
              },
              {
                question: "Is Gnomix stable for daily use?",
                answer: "Gnomix is currently in beta status and under active development. While it's built on Ubuntu's stable base, we recommend advanced users or those comfortable with beta software use it. Always backup your data before installation.",
                testId: "3"
              },
              {
                question: "How do I install Gnomix?",
                answer: "Download the ISO from SourceForge, create a bootable USB drive using tools like Rufus (Windows) or dd (Linux), boot from the USB, and follow the installation wizard. The process is similar to installing standard Ubuntu.",
                testId: "4"
              },
              {
                question: "Can I still use Ubuntu packages and PPAs?",
                answer: "Yes! Gnomix maintains full compatibility with Ubuntu packages and PPAs. You can use apt, install .deb packages, and add repositories just like you would on Ubuntu. We simply remove Snap-specific components.",
                testId: "5"
              },
              {
                question: "How often are updates released?",
                answer: "Gnomix is actively developed with regular updates. As we're in beta, update frequency varies as we refine the system. Follow our GitHub repository and join our Discord community for the latest release information and development updates.",
                testId: "6"
              }
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index + 1}`} 
                className="glass-card backdrop-blur-xl border border-white/10 rounded-xl px-6 overflow-hidden hover:border-white/30 transition-all duration-300 animate-fade-in-up hover:scale-[1.02]"
                style={{ animationDelay: `${index * 50}ms` }}
                data-testid={`accordion-item-${faq.testId}`}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <AccordionTrigger 
                  className="hover:no-underline py-4 text-left font-medium"
                  data-testid={`accordion-trigger-${faq.testId}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up space-y-8">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              data-testid="text-community-title"
            >
              Join Our Community
            </h2>
            <p className="text-lg text-muted-foreground mb-12" data-testid="text-community-subtitle">
              Connect with other Gnomix users, get support, and stay updated on development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="glow-button-lg text-lg px-10 py-7 h-auto relative overflow-hidden group" 
                asChild 
                data-testid="button-discord"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <a href="https://discord.gg/RHS3NptNpc" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Join Discord Server
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-chart-3 to-primary bg-[length:200%_100%] animate-shimmer" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-button text-lg px-10 py-7 h-auto backdrop-blur-xl border-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300" 
                asChild 
                data-testid="button-github-community"
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <a href="https://github.com/gubuntu-dev-icebear/Gubuntu" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Contribute on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-xl bg-card/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-chart-3 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 opacity-70 animate-pulse-glow" />
                  <img 
                    src={gnomixIcon} 
                    alt="Gnomix" 
                    className="w-10 h-10 rounded-2xl relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" 
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                  />
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Gnomix</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ubuntu without the bullshit. Stock GNOME, Canonical-free.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://github.com/gubuntu-dev-icebear/Gubuntu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                    data-testid="link-footer-github"
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://sourceforge.net/projects/gubuntu-desktop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                    data-testid="link-footer-sourceforge"
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                  >
                    <SiSourceforge className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    SourceForge Project
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/RHS3NptNpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                    data-testid="link-footer-discord"
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                  >
                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Discord Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Credits</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Website created by{" "}
                <span className="text-primary font-medium glow-text">@chichbo</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Distribution developed by the Gnomix community
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Gnomix Project. Not affiliated with Snap or Ubuntu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
