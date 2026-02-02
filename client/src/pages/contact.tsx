import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Star } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Prestige Moving Ottawa | Get a Free Quote</title>
        <meta name="description" content="Contact Prestige Moving Ottawa for a free moving quote. Call (613) 600-4000 or fill out our contact form. Available 7 days a week for all your moving needs." />
        <meta name="keywords" content="contact movers Ottawa, moving quote Ottawa, Ottawa moving company phone, Prestige Moving contact" />
        <meta property="og:title" content="Contact Prestige Moving Ottawa" />
        <meta property="og:description" content="Get in touch with Ottawa's most trusted moving company. Free quotes, 7-day availability. Call (613) 600-4000." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://ottawa.prestigemoving.ca/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <SharedNavigation />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1A2332] via-[#1A2332] to-[#2a3a52] pt-32 md:pt-36 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              <MessageSquare className="h-3 w-3 mr-1" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Contact <span className="text-primary">Prestige Moving</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ready to start your move? Get in touch with Ottawa's most trusted moving company. We're here to help 7 days a week.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center justify-center gap-3 text-[#1A2332]">
                <div className="h-12 w-12 rounded-full bg-[#1A2332] flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Call Us</div>
                  <a href="tel:613-600-4000" className="hover:underline">(613) 600-4000</a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-[#1A2332]">
                <div className="h-12 w-12 rounded-full bg-[#1A2332] flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Email Us</div>
                  <a href="mailto:ottawa@prestigemoving.ca" className="hover:underline">ottawa@prestigemoving.ca</a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-[#1A2332]">
                <div className="h-12 w-12 rounded-full bg-[#1A2332] flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Location</div>
                  <span>Ottawa & Area</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-[#1A2332]">
                <div className="h-12 w-12 rounded-full bg-[#1A2332] flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Hours</div>
                  <span>7 Days a Week</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          data-testid="input-contact-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="613-XXX-XXXX"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          data-testid="input-contact-phone"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-testid="input-contact-email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}>
                        <SelectTrigger data-testid="select-contact-subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quote">Request a Quote</SelectItem>
                          <SelectItem value="residential">Residential Moving</SelectItem>
                          <SelectItem value="commercial">Commercial Moving</SelectItem>
                          <SelectItem value="long-distance">Long Distance Moving</SelectItem>
                          <SelectItem value="packing">Packing Services</SelectItem>
                          <SelectItem value="storage">Storage Solutions</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your moving needs..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        data-testid="input-contact-message"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full font-bold"
                      disabled={isSubmitting}
                      data-testid="button-contact-submit"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info Side */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Why Contact Prestige Moving?</h2>
                  <p className="text-muted-foreground mb-6">
                    Whether you're planning a local move across Ottawa or a long-distance relocation across Canada, our team is ready to provide you with exceptional service and a stress-free moving experience.
                  </p>
                </div>

                <Card className="bg-[#1A2332] text-white border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-5 w-5 text-primary fill-primary" />
                      <Star className="h-5 w-5 text-primary fill-primary" />
                      <Star className="h-5 w-5 text-primary fill-primary" />
                      <Star className="h-5 w-5 text-primary fill-primary" />
                      <Star className="h-5 w-5 text-primary fill-primary" />
                      <span className="ml-2 font-bold">5.0 Google Rating</span>
                    </div>
                    <p className="text-white/80 italic mb-4">
                      "Prestige Moving made our cross-city move incredibly easy. The team was professional, efficient, and took great care of all our belongings. Highly recommend!"
                    </p>
                    <p className="text-primary font-semibold">— Sarah M., Ottawa</p>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Quick Response Guarantee</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-black text-primary">30 min</div>
                      <div className="text-sm text-muted-foreground">Quote Response</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-black text-primary">24 hrs</div>
                      <div className="text-sm text-muted-foreground">Email Response</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary to-amber-500 rounded-xl p-6 text-[#1A2332]">
                  <h3 className="text-xl font-bold mb-2">Prefer to Talk?</h3>
                  <p className="mb-4">Our friendly team is standing by to answer your questions and provide instant quotes.</p>
                  <a href="tel:613-600-4000">
                    <Button variant="secondary" size="lg" className="bg-[#1A2332] text-white hover:bg-[#2a3a52] font-bold">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (613) 600-4000
                    </Button>
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Ottawa", "Kanata", "Orleans", "Nepean", "Barrhaven", "Gloucester", "Gatineau", "Stittsville", "Manotick", "Rockland"].map((area) => (
                      <Badge key={area} variant="outline" className="text-sm">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1A2332] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get your free, no-obligation moving quote today and experience the Prestige difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="font-bold text-lg px-8">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/calculator">
                <Button size="lg" variant="outline" className="font-bold text-lg px-8 border-white text-white hover:bg-white hover:text-[#1A2332]">
                  Moving Calculator
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <SharedFooter />
      </div>
    </>
  );
}
