import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Target, Zap, TrendingUp, MessageSquare, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"


const GOOGLE_CALENDAR_LINK = "https://calendly.com/michaelogaje033/30min";
const WHATSAPP_NUMBER = "2348142878380"; // Replace with full number (no +)
const WHATSAPP_MESSAGE = "Hello! I'd like to learn how your client acquisition system works.";



export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="font-bold text-xl">Genesis</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#results"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Results
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >

            </Link>
          </nav>
          <Link href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Book a Call
          </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Trusted by 100+ B2B Companies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              How My Clients Are Booking{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                30+ Calls
              </span>{" "}
              & Closing{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                $100K+ Deals
              </span>{" "}
              in Weeks
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
            <strong>2,000+</strong> qualified calls. <strong>$1.2M</strong> closed.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed">
            Data shows that agencies using automation boosts revenue by 40%. Don’t get left behind.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
          <Link href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer">

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg h-14 px-8"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Call
              </Button>
              </Link>
              <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold">500+ Calls Booked</div>
                <div className="text-muted-foreground">This month alone</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center">
              <img src="/leadsdashboard.jpg" alt="Dashboard Preview" className="rounded-lg shadow-2xl" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">+47 New Leads</div>
                  <div className="text-sm text-muted-foreground">Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="features" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Real Reason You're Not Scaling Faster</h2>
            <p className="text-lg text-muted-foreground">
              Most founders struggle with the same critical issues that prevent growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Inconsistent Lead Flow",
                description: "One week you’re busy, the next you’re dry.",
              },
              {
                icon: MessageSquare,
                title: "Cold Outreach Ignored",
                description: "Your emails sound like everyone else’s… or worse, they never even reach the inbox. Most founders don’t realize it.",
              },
              {
                icon: Target,
                title: "No Follow-Up Systems",
                description: "Leads slip away because there’s no consistent nurturing.",
              },
              {
                icon: Zap,
                title: "Manual Lead Generation",
                description: " Time lost is revenue lost. You’re still hunting for leads manually while competitors are automating.",
              },
            ].map((pain, index) => (
              <Card key={index} className="border-border/50 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <pain.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-lg">{pain.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center">
                <img src="/workflow.jpg" alt="System Workflow" className="rounded-lg shadow-xl" />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">A Smarter Way to Get Clients</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We built a simple system that scrapes and verifies leads from Google Maps, LinkedIn, and niche sites —
                then runs GPT-powered personalized outreach and follow-ups automatically.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It runs 24/7, booking calls and bringing in new clients — even when you’re offline.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "1000+ verified leads weekly sourced from Linkedin, Google maps, niche sites",
                  "AI-powered personalized outreach at scale trained on winning templates",
                  "Smart follow-up sequences that convert",
                  "Real-time tracking so you can see exactly what’s converting",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              {/*
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="results" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results. Real Revenue.</h2>
            <p className="text-lg text-muted-foreground">
              This system has helped agency founders and B2B SaaS leaders close deals worth $100K+ in just weeks.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "1000 Leads",
                timeframe: "in 7 Days",
                result: "Achieved 70% reply rate and $100K+ in new deals",
                image: "leads.jpg",
              },
              {
                metric: "30+ Calls",
                timeframe: "per Week",
                result: "Consistent pipeline of qualified prospects ready to buy",
                image: "/Google-calendar-inspo.jpeg",
              },
              {
                metric: "$120K Revenue",
                timeframe: "in 90 Days",
                result: "From zero to six figures with automated outreach",
                image: "/revenue3.jpg",
              },
            ].map((study, index) => (
              <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <img
                      src={study.image.startsWith('/') ? study.image : `/${study.image}`}
                      alt={study.metric}
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />

                </div>
                <CardContent className="p-6 space-y-3">
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {study.metric}
                    </div>
                    <div className="text-sm text-muted-foreground">{study.timeframe}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{study.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
        <Link href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer">

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Book a Call to Build Yours
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Hear from founders who transformed their lead generation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "This system completely changed how we acquire clients. We went from 2-3 calls per month to 20+ qualified calls. The ROI is insane.",
                author: "Sarah Chen",
                role: "Founder, TechScale Agency",
              },
              {
                quote:
                  "I was skeptical at first, but the results speak for themselves. $75K in new deals in the first 60 days. The automation is flawless.",
                author: "Michael Rodriguez",
                role: "CEO, CloudSync Solutions",
              },
              {
                quote:
                  "Finally, a system that actually works. No more manual prospecting. Just consistent, high-quality leads flowing in every single day.",
                author: "Emily Thompson",
                role: "Founder, Growth Labs",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl text-blue-600">"</div>
                  <p className="text-muted-foreground leading-relaxed italic">{testimonial.quote}</p>
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section
      <section id="pricing" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Choose the plan that fits your growth goals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$997",
                period: "/month",
                description: "Perfect for testing the waters",
                features: [
                  "Up to 500 leads/month",
                  "Basic email outreach",
                  "Standard follow-ups",
                  "Email support",
                  "Monthly reporting",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Growth",
                price: "$2,497",
                period: "/month",
                description: "For serious scaling",
                features: [
                  "Up to 2,000 leads/month",
                  "Multi-channel outreach",
                  "AI-powered personalization",
                  "Priority support",
                  "Weekly strategy calls",
                  "Custom integrations",
                ],
                cta: "Book a Call",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For established businesses",
                features: [
                  "Unlimited leads",
                  "Full automation suite",
                  "Dedicated account manager",
                  "24/7 priority support",
                  "Custom workflows",
                  "White-label options",
                ],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-blue-600 shadow-lg scale-105" : "border-border/50"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
        */}


      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white">
            <CardContent className="p-12 md:p-16 text-center space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                Want to book more calls and close more deals?
              </h2>
              <p className="text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed">
                  Let’s build a predictable, scalable client acquisition system that runs on autopilot 😉
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noopener noreferrer">

                <Button size="lg" variant="secondary" className="text-lg h-14 px-8">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Call
                </Button>
                </Link>
                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg h-14 px-8 bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="font-bold text-xl">Genesis</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Helping B2B founders generate predictable revenue through automated outreach systems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#results" className="hover:text-foreground transition-colors">
                    Case Studies
                  </Link>
                </li>
                {/*
                <li>
                  <Link href="#pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                */}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Genesis Systems. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
