import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarWidget } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Users, Phone, Mail, MapPin, TruckIcon, Home as HomeIcon,
  Calendar, ArrowRight, CheckCircle2, Shield, Star, Clock
} from "lucide-react";

interface ServiceQuoteFormProps {
  defaultService?: string;
  serviceName?: string;
}

export default function ServiceQuoteForm({ defaultService = "Moving", serviceName }: ServiceQuoteFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    movingFrom: "",
    movingTo: "",
    moveDate: "",
    moveSize: "",
    service: defaultService
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const quoteMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("POST", "/api/quote-request", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        moveDate: data.moveDate,
        moveSize: data.moveSize,
        originCity: data.movingFrom,
        destinationCity: data.movingTo,
        serviceType: data.service || "Moving"
      });
    },
    onSuccess: () => {
      setFormSubmitted(true);
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 24 hours with your free estimate.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, phone, and email.",
        variant: "destructive",
      });
      return;
    }
    quoteMutation.mutate(formData);
  };

  return (
    <section className="py-20 bg-[#1A2332] relative overflow-hidden" data-testid="section-service-quote-form">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#C5A572] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A572] rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="text-quote-heading">
              Get Your Free {serviceName || "Moving"} Quote
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Fill out the form and we'll get back to you within 24 hours with a personalized estimate. No obligation, no hidden fees.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C5A572]/20 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-[#C5A572]" />
                </div>
                <div>
                  <p className="text-white font-semibold">Fast Response</p>
                  <p className="text-white/50 text-sm">Quote within 1 hour during business hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C5A572]/20 flex items-center justify-center shrink-0">
                  <Shield className="h-5 w-5 text-[#C5A572]" />
                </div>
                <div>
                  <p className="text-white font-semibold">Fully Insured & WSIB Certified</p>
                  <p className="text-white/50 text-sm">Your belongings are protected every step of the way</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C5A572]/20 flex items-center justify-center shrink-0">
                  <Star className="h-5 w-5 text-[#C5A572]" />
                </div>
                <div>
                  <p className="text-white font-semibold">337+ Five-Star Reviews</p>
                  <p className="text-white/50 text-sm">Trusted by thousands of families across Ottawa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A2332] mb-2" data-testid="text-quote-success">Quote Request Sent!</h3>
                <p className="text-gray-500 mb-6">We'll contact you within 24 hours with your free estimate.</p>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", movingFrom: "", movingTo: "", moveDate: "", moveSize: "", service: defaultService });
                    setSelectedDate(undefined);
                  }}
                  className="text-primary"
                  data-testid="button-submit-another-service"
                >
                  Submit Another Quote
                </Button>
              </div>
            ) : (
              <>
                <div className="text-center mb-5">
                  <h3 className="text-xl font-bold text-[#1A2332] mb-1">Request a Free Quote</h3>
                  <p className="text-gray-400 text-sm">No obligation — we'll get back to you fast</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative group">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                    <Input
                      type="text"
                      placeholder="Full Name"
                      className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      data-testid="input-service-quote-name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative group">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                      <Input
                        type="tel"
                        placeholder="Phone"
                        className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        data-testid="input-service-quote-phone"
                      />
                    </div>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                      <Input
                        type="email"
                        placeholder="Email"
                        className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        data-testid="input-service-quote-email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative group">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                      <Input
                        type="text"
                        placeholder="Moving From"
                        className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                        value={formData.movingFrom}
                        onChange={(e) => setFormData(prev => ({ ...prev, movingFrom: e.target.value }))}
                        data-testid="input-service-quote-from"
                      />
                    </div>
                    <div className="relative group">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                      <Input
                        type="text"
                        placeholder="Moving To"
                        className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                        value={formData.movingTo}
                        onChange={(e) => setFormData(prev => ({ ...prev, movingTo: e.target.value }))}
                        data-testid="input-service-quote-to"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <TruckIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none z-10" />
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                    >
                      <SelectTrigger className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm" data-testid="select-service-quote-type">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Residential Moving">Residential Moving</SelectItem>
                        <SelectItem value="Commercial Moving">Commercial Moving</SelectItem>
                        <SelectItem value="Long Distance Moving">Long Distance Moving</SelectItem>
                        <SelectItem value="Packing Services">Packing Services</SelectItem>
                        <SelectItem value="Moving Supplies">Moving Supplies</SelectItem>
                        <SelectItem value="Student Moving">Student Moving</SelectItem>
                        <SelectItem value="Storage Solutions">Storage Solutions</SelectItem>
                        <SelectItem value="Piano Moving">Piano Moving</SelectItem>
                        <SelectItem value="Specialty Item Moving">Specialty Item Moving</SelectItem>
                        <SelectItem value="Antique Moving">Antique Moving</SelectItem>
                        <SelectItem value="Senior Moving">Senior Moving</SelectItem>
                        <SelectItem value="Military Moving">Military Moving</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <HomeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none z-10" />
                      <Select
                        value={formData.moveSize}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, moveSize: value }))}
                      >
                        <SelectTrigger className="h-10 pl-10 bg-gray-50/80 border-gray-200 rounded-lg text-sm" data-testid="select-service-quote-size">
                          <SelectValue placeholder="Move Size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Studio">Studio</SelectItem>
                          <SelectItem value="1 Bedroom">1 Bedroom</SelectItem>
                          <SelectItem value="2 Bedroom">2 Bedroom</SelectItem>
                          <SelectItem value="3 Bedroom">3 Bedroom</SelectItem>
                          <SelectItem value="4+ Bedroom">4+ Bedroom</SelectItem>
                          <SelectItem value="Office">Office</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="h-10 w-full flex items-center gap-2 pl-3 pr-3 bg-gray-50/80 border border-gray-200 rounded-lg text-sm text-left hover:bg-white hover:border-primary transition-all focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20"
                          data-testid="input-service-quote-date"
                        >
                          <Calendar className="h-4 w-4 text-gray-400 shrink-0" />
                          <span className={selectedDate ? "text-foreground" : "text-gray-500"}>
                            {selectedDate ? format(selectedDate, "MMM d, yyyy") : "Move Date"}
                          </span>
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarWidget
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => {
                            setSelectedDate(date);
                            if (date) {
                              setFormData(prev => ({ ...prev, moveDate: format(date, "yyyy-MM-dd") }));
                            }
                            setCalendarOpen(false);
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <Button
                    type="submit"
                    className="w-full font-bold h-11 rounded-lg shadow-lg shadow-primary/30 transition-all duration-200 group text-base"
                    disabled={quoteMutation.isPending}
                    data-testid="button-service-quote-submit"
                  >
                    {quoteMutation.isPending ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Get Free Estimate
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-4 text-[10px] text-gray-400">
                  <div className="flex items-center gap-1">
                    <Shield className="h-3 w-3 text-primary/70" />
                    <span>Insured</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-primary/70" />
                    <span>5.0 Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-primary/70" />
                    <span>24hr Response</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
