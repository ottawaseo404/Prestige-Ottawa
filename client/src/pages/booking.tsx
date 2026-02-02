import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { insertBookingSchema, moveSizeOptions, serviceTypeOptions } from "@shared/schema";
import { CalendarIcon, ArrowLeft, ArrowRight, CheckCircle, MapPin, Phone, Home as HomeIcon, Truck, Calendar as CalendarIconLucide } from "lucide-react";
import { format } from "date-fns";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Helmet } from "react-helmet";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";

const bookingFormSchema = insertBookingSchema.extend({
  moveDate: z.date().min(new Date(), "Move date must be in the future"),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function Booking() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      phoneType: "Mobile",
      moveDate: undefined,
      moveSize: "",
      serviceType: "Moving",
      originStreet: "",
      originCity: "Ottawa",
      originProvince: "ON",
      originPostalCode: "",
      originStairs: 0,
      destinationStreet: "",
      destinationCity: "Ottawa",
      destinationProvince: "ON",
      destinationPostalCode: "",
      destinationStairs: 0,
      packageType: "Premium",
      notes: "",
      referralSource: "Google",
      status: "pending",
    },
  });

  const createBookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      return apiRequest("POST", "/api/bookings", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 1 hour with your personalized quote.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Submission failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: BookingFormData) => {
    createBookingMutation.mutate(data);
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof BookingFormData)[] = [];
    
    if (step === 1) {
      fieldsToValidate = ["moveDate", "moveSize", "serviceType"];
    } else if (step === 2) {
      fieldsToValidate = ["originStreet", "originCity", "originProvince", "originPostalCode"];
    } else if (step === 3) {
      fieldsToValidate = ["destinationStreet", "destinationCity", "destinationProvince", "destinationPostalCode"];
    } else if (step === 4) {
      fieldsToValidate = ["firstName", "lastName", "email", "phone"];
    }

    const result = await form.trigger(fieldsToValidate);
    if (result) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl">Quote Request Submitted!</CardTitle>
            <CardDescription>
              Thank you for choosing Prestige Moving. We've received your request.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-accent/50 p-4 rounded-md space-y-2 text-sm">
              <p className="font-medium">What's next?</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>✓ You'll receive a confirmation email shortly</li>
                <li>✓ Our team will call you within 1 hour with your quote</li>
                <li>✓ We'll answer any questions about your move</li>
              </ul>
            </div>
            <Link href="/">
              <Button variant="default" className="w-full" data-testid="button-back-home">
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Book Your Move - Prestige Moving Ottawa",
    "provider": {
      "@type": "MovingCompany",
      "name": "Prestige Moving Ottawa",
      "telephone": "613-555-1234"
    },
    "areaServed": {
      "@type": "City",
      "name": "Ottawa"
    },
    "description": "Book your professional move with Prestige Moving Ottawa. Easy online booking, instant quotes, and reliable service."
  };

  const stepLabels = ['Move Details', 'From', 'To', 'Contact', 'Review'];

  return (
    <>
      <Helmet>
        <title>Get a Free Quote | Moving Quote Ottawa | Prestige Moving</title>
        <meta name="description" content="Get your free moving quote in minutes. Ottawa's top-rated movers. Residential, commercial, long-distance moves. WSIB certified, 5-star rated. Call 613-555-1234!" />
        <meta name="keywords" content="book moving Ottawa, moving quote Ottawa, hire movers ON, schedule move Ottawa, online moving booking, Ottawa mover estimate" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Get a Free Quote | Prestige Moving Ottawa" />
        <meta property="og:description" content="Get your free moving quote online. Easy process, fast response, trusted Ottawa movers." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://ottawa.prestigemoving.ca/og-image.png" />
        <link rel="canonical" href="https://ottawa.prestigemoving.ca/book" />
        <script type="application/ld+json">{JSON.stringify(bookingSchema)}</script>
      </Helmet>

    <div className="min-h-screen bg-accent/20">
      <SharedNavigation />
      
      {/* Progress Header */}
      <div className="bg-background border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Get a Free Quote</span>
            </div>
            <Badge variant="secondary" data-testid="badge-step">Step {step} of 5</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    s < step ? 'bg-primary text-primary-foreground' :
                    s === step ? 'bg-primary text-primary-foreground ring-4 ring-primary/20' :
                    'bg-muted text-muted-foreground'
                  }`}
                  data-testid={`progress-step-${s}`}
                >
                  {s < step ? <CheckCircle className="h-5 w-5" /> : s}
                </div>
                <span className="text-xs text-muted-foreground hidden sm:block font-medium">
                  {stepLabels[s - 1]}
                </span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden mt-4">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {step === 1 && <><CalendarIconLucide className="h-5 w-5 text-primary" /> Move Details</>}
                  {step === 2 && <><MapPin className="h-5 w-5 text-primary" /> Where are you moving from?</>}
                  {step === 3 && <><HomeIcon className="h-5 w-5 text-primary" /> Where are you moving to?</>}
                  {step === 4 && <><Phone className="h-5 w-5 text-primary" /> Your Contact Information</>}
                  {step === 5 && <><CheckCircle className="h-5 w-5 text-primary" /> Review Your Details</>}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Tell us when and what you're moving"}
                  {step === 2 && "Enter your current address"}
                  {step === 3 && "Enter your new address"}
                  {step === 4 && "How can we reach you with your quote?"}
                  {step === 5 && "Make sure everything looks correct"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Move Details */}
                {step === 1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="moveDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>When do you want to move? *</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={`w-full justify-start text-left font-normal h-12 ${!field.value && "text-muted-foreground"}`}
                                  data-testid="button-date-picker"
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {field.value ? format(field.value, "PPP") : "Select your move date"}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="moveSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What size is your move? *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12" data-testid="select-move-size">
                                <SelectValue placeholder="Select your move size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {moveSizeOptions.map((size) => (
                                <SelectItem key={size} value={size}>
                                  {size}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What type of service do you need? *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12" data-testid="select-service-type">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {serviceTypeOptions.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type.replace(/([A-Z])/g, ' $1').trim()}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {/* Step 2: Origin Address */}
                {step === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="originStreet"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address *</FormLabel>
                          <FormControl>
                            <Input className="h-12" placeholder="123 Main St, Unit 101" {...field} data-testid="input-origin-street" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="originCity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City *</FormLabel>
                            <FormControl>
                              <Input className="h-12" placeholder="Ottawa" {...field} data-testid="input-origin-city" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="originProvince"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Province *</FormLabel>
                            <FormControl>
                              <Input className="h-12" placeholder="ON" {...field} data-testid="input-origin-province" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="originPostalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postal Code *</FormLabel>
                            <FormControl>
                              <Input className="h-12" placeholder="K1A 0A1" {...field} data-testid="input-origin-postal" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="originStairs"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Floors/Stairs</FormLabel>
                            <Select onValueChange={(val) => field.onChange(parseInt(val))} value={field.value?.toString()}>
                              <FormControl>
                                <SelectTrigger className="h-12" data-testid="select-origin-stairs">
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[0, 1, 2, 3, 4].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num === 0 ? 'Ground Floor / Elevator' : `${num} Flight${num > 1 ? 's' : ''} of Stairs`}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                )}

                {/* Step 3: Destination Address */}
                {step === 3 && (
                  <>
                    <FormField
                      control={form.control}
                      name="destinationStreet"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address *</FormLabel>
                          <FormControl>
                            <Input className="h-12" placeholder="456 Oak Ave, Suite 200" {...field} data-testid="input-destination-street" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="destinationCity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City *</FormLabel>
                            <FormControl>
                              <Input className="h-12" placeholder="Ottawa" {...field} data-testid="input-destination-city" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="destinationProvince"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Province *</FormLabel>
                            <FormControl>
                              <Input className="h-12" placeholder="ON" {...field} data-testid="input-destination-province" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="destinationPostalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postal Code *</FormLabel>
                            <FormControl>
                              <Input className="h-12" placeholder="K2P 2A2" {...field} data-testid="input-destination-postal" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="destinationStairs"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Floors/Stairs</FormLabel>
                            <Select onValueChange={(val) => field.onChange(parseInt(val))} value={field.value?.toString()}>
                              <FormControl>
                                <SelectTrigger className="h-12" data-testid="select-destination-stairs">
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[0, 1, 2, 3, 4].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num === 0 ? 'Ground Floor / Elevator' : `${num} Flight${num > 1 ? 's' : ''} of Stairs`}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                )}

                {/* Step 4: Contact Information */}
                {step === 4 && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input className="h-12" placeholder="John" {...field} data-testid="input-first-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input className="h-12" placeholder="Smith" {...field} data-testid="input-last-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input className="h-12" type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input className="h-12" type="tel" placeholder="604-123-4567" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phoneType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12" data-testid="select-phone-type">
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Mobile">Mobile</SelectItem>
                                <SelectItem value="Home">Home</SelectItem>
                                <SelectItem value="Office">Office</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Anything else we should know?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Special items, access issues, specific timing needs..." 
                              className="resize-none" 
                              rows={3}
                              {...field}
                              value={field.value ?? ""}
                              data-testid="textarea-notes"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {/* Step 5: Review */}
                {step === 5 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-accent/50 p-5 rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <CalendarIconLucide className="h-4 w-4 text-primary" />
                          Move Details
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Date:</span>
                            <span className="font-medium" data-testid="review-date">{form.watch("moveDate") ? format(form.watch("moveDate")!, "PPP") : "-"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Move Size:</span>
                            <span className="font-medium" data-testid="review-size">{form.watch("moveSize")}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Service:</span>
                            <span className="font-medium">{form.watch("serviceType")?.replace(/([A-Z])/g, ' $1').trim()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-accent/50 p-5 rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          Contact
                        </h4>
                        <div className="space-y-1 text-sm">
                          <p className="font-medium" data-testid="review-name">{form.watch("firstName")} {form.watch("lastName")}</p>
                          <p className="text-muted-foreground" data-testid="review-email">{form.watch("email")}</p>
                          <p className="text-muted-foreground" data-testid="review-phone">{form.watch("phone")}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-accent/50 p-5 rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          Moving From
                        </h4>
                        <p className="text-sm" data-testid="review-origin">
                          {form.watch("originStreet")}<br />
                          {form.watch("originCity")}, {form.watch("originProvince")} {form.watch("originPostalCode")}
                          {form.watch("originStairs") ? <><br /><span className="text-muted-foreground">{form.watch("originStairs")} flight(s) of stairs</span></> : null}
                        </p>
                      </div>

                      <div className="bg-accent/50 p-5 rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <HomeIcon className="h-4 w-4 text-primary" />
                          Moving To
                        </h4>
                        <p className="text-sm" data-testid="review-destination">
                          {form.watch("destinationStreet")}<br />
                          {form.watch("destinationCity")}, {form.watch("destinationProvince")} {form.watch("destinationPostalCode")}
                          {form.watch("destinationStairs") ? <><br /><span className="text-muted-foreground">{form.watch("destinationStairs")} flight(s) of stairs</span></> : null}
                        </p>
                      </div>
                    </div>

                    {form.watch("notes") && (
                      <div className="bg-accent/50 p-5 rounded-lg">
                        <h4 className="font-semibold mb-2">Additional Notes</h4>
                        <p className="text-sm text-muted-foreground">{form.watch("notes")}</p>
                      </div>
                    )}

                    <div className="bg-primary/10 border border-primary/20 p-5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Truck className="h-8 w-8 text-primary" />
                        <div>
                          <h4 className="font-semibold">What happens next?</h4>
                          <p className="text-sm text-muted-foreground">
                            We'll call you within 1 hour with a personalized quote based on your move details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1 h-12"
                  data-testid="button-previous"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              )}
              {step < 5 && (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 h-12"
                  data-testid="button-next"
                >
                  Continue
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
              {step === 5 && (
                <Button
                  type="submit"
                  className="flex-1 h-12 text-lg"
                  disabled={createBookingMutation.isPending}
                  data-testid="button-submit"
                >
                  {createBookingMutation.isPending ? "Submitting..." : "Get My Free Quote"}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
      <SharedFooter />
    </div>
    </>
  );
}
