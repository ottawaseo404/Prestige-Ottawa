import { useState } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  Phone, Mail, User, MapPin, Truck, Home, Calendar,
  ArrowRight, Shield, Star, Clock, X, CheckCircle2
} from "lucide-react";

interface QuoteForm {
  name: string;
  phone: string;
  email: string;
  movingFrom: string;
  movingTo: string;
  service: string;
  moveSize: string;
  moveDate: string;
}

const EMPTY: QuoteForm = {
  name: "", phone: "", email: "",
  movingFrom: "", movingTo: "",
  service: "", moveSize: "", moveDate: "",
};

export function FloatingCTA() {
  const [location] = useLocation();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<QuoteForm>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  if (location.startsWith("/admin") || location === "/login") return null;

  const set = (field: keyof QuoteForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }));

  const quoteMutation = useMutation({
    mutationFn: () =>
      apiRequest("POST", "/api/quote-request", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        moveDate: form.moveDate,
        moveSize: form.moveSize,
        originCity: form.movingFrom,
        destinationCity: form.movingTo,
        serviceType: form.service || "Moving",
      }),
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: () => {
      toast({
        title: "Submission failed",
        description: "Please try again or call us at (613) 600-4000.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast({
        title: "Missing information",
        description: "Please fill in your name, phone, and email.",
        variant: "destructive",
      });
      return;
    }
    quoteMutation.mutate();
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => { setForm(EMPTY); setSubmitted(false); }, 300);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        data-testid="floating-button-estimate"
        className="fixed bottom-6 right-6 z-[9998] group flex items-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-3.5 rounded-full shadow-[0_8px_32px_rgba(197,165,114,0.45)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(197,165,114,0.65)] hover:-translate-y-1 active:translate-y-0 cursor-pointer border-0"
      >
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25 pointer-events-none" />
        <Phone className="h-4 w-4 shrink-0" />
        <span className="text-sm tracking-wide whitespace-nowrap">FREE ESTIMATE</span>
      </button>

      {/* Quote modal */}
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="p-0 gap-0 max-w-md w-full sm:rounded-2xl overflow-hidden border-0 shadow-2xl" data-testid="modal-quote">
          {submitted ? (
            <div className="flex flex-col items-center justify-center px-8 py-14 text-center gap-4" data-testid="success-state">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-black text-foreground">You're all set!</h2>
              <p className="text-muted-foreground text-sm max-w-xs">
                We'll review your request and contact you within 24 hours with your free estimate.
              </p>
              <div className="text-sm text-muted-foreground">
                Questions now? Call us at{" "}
                <a href="tel:613-600-4000" className="font-semibold text-primary hover:underline">(613) 600-4000</a>
              </div>
              <Button onClick={handleClose} className="mt-2 w-full" data-testid="button-close-success">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} data-testid="form-quote">
              {/* Header */}
              <div className="bg-white px-6 pt-6 pb-4 border-b">
                {/* Contact us link */}
                <a
                  href="tel:613-600-4000"
                  className="flex items-center justify-center gap-2 w-full border border-gray-200 rounded-xl py-3 text-primary font-semibold text-sm hover:bg-gray-50 transition-colors mb-4"
                  data-testid="link-contact-phone"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
                <div className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-4">
                  or get a free quote
                </div>
                <h2 className="text-2xl font-black text-foreground text-center leading-tight">
                  Get Your Free Quote
                </h2>
                <p className="text-center text-muted-foreground text-sm mt-1">
                  We'll contact you within 24 hours
                </p>
              </div>

              {/* Fields */}
              <div className="bg-white px-6 py-4 space-y-3">
                {/* Full Name */}
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Full Name"
                    value={form.name}
                    onChange={set("name")}
                    className="pl-10 rounded-xl border-gray-200 h-12"
                    data-testid="input-name"
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Phone"
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      className="pl-10 rounded-xl border-gray-200 h-12"
                      data-testid="input-phone"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      className="pl-10 rounded-xl border-gray-200 h-12"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                {/* Moving From + To */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Moving From"
                      value={form.movingFrom}
                      onChange={set("movingFrom")}
                      className="pl-10 rounded-xl border-gray-200 h-12"
                      data-testid="input-moving-from"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Moving To"
                      value={form.movingTo}
                      onChange={set("movingTo")}
                      className="pl-10 rounded-xl border-gray-200 h-12"
                      data-testid="input-moving-to"
                    />
                  </div>
                </div>

                {/* Select Service */}
                <Select value={form.service} onValueChange={v => setForm(p => ({ ...p, service: v }))}>
                  <SelectTrigger className="rounded-xl border-gray-200 h-12 pl-10 relative" data-testid="select-service">
                    <Truck className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Residential Moving">Residential Moving</SelectItem>
                    <SelectItem value="Commercial Moving">Commercial Moving</SelectItem>
                    <SelectItem value="Long Distance Moving">Long Distance Moving</SelectItem>
                    <SelectItem value="Packing Services">Packing Services</SelectItem>
                    <SelectItem value="Storage Solutions">Storage Solutions</SelectItem>
                    <SelectItem value="Student Moving">Student Moving</SelectItem>
                    <SelectItem value="Senior Moving">Senior Moving</SelectItem>
                    <SelectItem value="Piano Moving">Piano Moving</SelectItem>
                    <SelectItem value="Specialty Item Moving">Specialty Item Moving</SelectItem>
                    <SelectItem value="Junk Removal">Junk Removal</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>

                {/* Move Size + Move Date */}
                <div className="grid grid-cols-2 gap-3">
                  <Select value={form.moveSize} onValueChange={v => setForm(p => ({ ...p, moveSize: v }))}>
                    <SelectTrigger className="rounded-xl border-gray-200 h-12 pl-10 relative" data-testid="select-move-size">
                      <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <SelectValue placeholder="Move Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Studio / Bachelor">Studio / Bachelor</SelectItem>
                      <SelectItem value="1 Bedroom">1 Bedroom</SelectItem>
                      <SelectItem value="2 Bedrooms">2 Bedrooms</SelectItem>
                      <SelectItem value="3 Bedrooms">3 Bedrooms</SelectItem>
                      <SelectItem value="4+ Bedrooms">4+ Bedrooms</SelectItem>
                      <SelectItem value="Office / Commercial">Office / Commercial</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
                    <Input
                      type="date"
                      value={form.moveDate}
                      onChange={set("moveDate")}
                      className="pl-10 rounded-xl border-gray-200 h-12"
                      data-testid="input-move-date"
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full h-14 rounded-xl text-base font-bold tracking-wide"
                  disabled={quoteMutation.isPending}
                  data-testid="button-submit-quote"
                >
                  {quoteMutation.isPending ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Get Free Estimate
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  )}
                </Button>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-5 pt-1 pb-2 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Shield className="h-3.5 w-3.5 text-primary/60" />
                    Insured
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                    5.0 Rating
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-primary/60" />
                    Fast
                  </span>
                </div>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
