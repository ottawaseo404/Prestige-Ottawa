import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { insertBookingSchema, moveSizeOptions, serviceTypeOptions, packageTypes, type PackageType } from "@shared/schema";
import { CalendarIcon, ArrowLeft, ArrowRight, CheckCircle, MapPin, Phone, Mail, Home as HomeIcon } from "lucide-react";
import { format } from "date-fns";
import { Link, useLocation } from "wouter";
import logoUrl from "@assets/f_1763665441943.png";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { SharedNavigation } from "@/components/shared-navigation";
import { SharedFooter } from "@/components/shared-footer";

const bookingFormSchema = insertBookingSchema.extend({
  moveDate: z.date().min(new Date(), "Move date must be in the future"),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function Booking() {
  const [, setLocation] = useLocation();
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
      originCity: "Vancouver",
      originProvince: "BC",
      originPostalCode: "",
      originStairs: 0,
      destinationStreet: "",
      destinationCity: "Vancouver",
      destinationProvince: "BC",
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
        title: "Booking submitted successfully!",
        description: "We'll contact you shortly to confirm your move details.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Booking failed",
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
      fieldsToValidate = ["moveDate", "moveSize", "serviceType", "packageType"];
    } else if (step === 2) {
      fieldsToValidate = ["originStreet", "originCity", "originProvince", "originPostalCode", "originStairs"];
    } else if (step === 3) {
      fieldsToValidate = ["destinationStreet", "destinationCity", "destinationProvince", "destinationPostalCode", "destinationStairs"];
    } else if (step === 4) {
      fieldsToValidate = ["firstName", "lastName", "email", "phone", "phoneType"];
    }

    const result = await form.trigger(fieldsToValidate);
    if (result) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const selectedPackage = form.watch("packageType") as PackageType;
  const packageInfo = packageTypes[selectedPackage || "Premium"];
  const estimatedCost = packageInfo.minimumHours * packageInfo.hourlyRate + packageInfo.travelFee;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-2xl">Booking Submitted!</CardTitle>
            <CardDescription>
              Thank you for choosing Prestige Moving. We've received your booking request.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-accent/50 p-4 rounded-md space-y-2 text-sm">
              <p className="font-medium">What's next?</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>✓ You'll receive a confirmation email shortly</li>
                <li>✓ Our team will contact you within 24 hours</li>
                <li>✓ We'll finalize your moving details and schedule</li>
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

  return (
    <div className="min-h-screen bg-accent/20">
      {/* Navigation */}
      <SharedNavigation />
      
      {/* Progress Header */}
      <div className="bg-background border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Book Your Move</span>
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
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    s < step ? 'bg-primary text-primary-foreground' :
                    s === step ? 'bg-primary text-primary-foreground ring-4 ring-primary/20' :
                    'bg-muted text-muted-foreground'
                  }`}
                  data-testid={`progress-step-${s}`}
                >
                  {s < step ? <CheckCircle className="h-5 w-5" /> : s}
                </div>
                <span className="text-xs text-muted-foreground hidden sm:block">
                  {s === 1 ? 'Details' : s === 2 ? 'Origin' : s === 3 ? 'Destination' : s === 4 ? 'Contact' : 'Review'}
                </span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
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
                <CardTitle>
                  {step === 1 && "Move Details"}
                  {step === 2 && "Origin Address"}
                  {step === 3 && "Destination Address"}
                  {step === 4 && "Contact Information"}
                  {step === 5 && "Review & Submit"}
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Tell us about your move"}
                  {step === 2 && "Where are you moving from?"}
                  {step === 3 && "Where are you moving to?"}
                  {step === 4 && "How can we reach you?"}
                  {step === 5 && "Review your booking details"}
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
                          <FormLabel>Move Date *</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={`w-full justify-start text-left font-normal ${!field.value && "text-muted-foreground"}`}
                                  data-testid="button-date-picker"
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {field.value ? format(field.value, "PPP") : "Select a date"}
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
                          <FormLabel>Move Size *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-move-size">
                                <SelectValue placeholder="Select move size" />
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
                          <FormLabel>Service Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-service-type">
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

                    <FormField
                      control={form.control}
                      name="packageType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Package *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-package">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {(Object.keys(packageTypes) as PackageType[]).map((key) => (
                                <SelectItem key={key} value={key}>
                                  {packageTypes[key].name} - ${packageTypes[key].hourlyRate}/hr
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            {packageInfo.description}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="bg-primary/5 p-4 rounded-md">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Estimated Starting Cost:</span>
                        <span className="text-2xl font-bold text-primary" data-testid="text-estimated-cost">
                          ${estimatedCost}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Based on {packageInfo.minimumHours} hours minimum + ${packageInfo.travelFee} travel fee
                      </p>
                    </div>
                  </>
                )}

                {/* Step 2: Origin Address */}
                {step === 2 && (
                  <>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="h-5 w-5" />
                      <span className="text-sm font-medium">Moving From</span>
                    </div>

                    <FormField
                      control={form.control}
                      name="originStreet"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St" {...field} data-testid="input-origin-street" />
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
                              <Input placeholder="Vancouver" {...field} data-testid="input-origin-city" />
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
                              <Input placeholder="BC" {...field} data-testid="input-origin-province" />
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
                              <Input placeholder="V6B 1A1" {...field} data-testid="input-origin-postal" />
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
                            <FormLabel>Number of Stairs *</FormLabel>
                            <Select onValueChange={(val) => field.onChange(parseInt(val))} value={field.value?.toString()}>
                              <FormControl>
                                <SelectTrigger data-testid="select-origin-stairs">
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[0, 1, 2, 3, 4].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num === 0 ? 'Ground Floor' : `${num} Flight${num > 1 ? 's' : ''}`}
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
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <HomeIcon className="h-5 w-5" />
                      <span className="text-sm font-medium">Moving To</span>
                    </div>

                    <FormField
                      control={form.control}
                      name="destinationStreet"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="456 Oak Ave" {...field} data-testid="input-destination-street" />
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
                              <Input placeholder="Vancouver" {...field} data-testid="input-destination-city" />
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
                              <Input placeholder="BC" {...field} data-testid="input-destination-province" />
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
                              <Input placeholder="V6B 2A2" {...field} data-testid="input-destination-postal" />
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
                            <FormLabel>Number of Stairs *</FormLabel>
                            <Select onValueChange={(val) => field.onChange(parseInt(val))} value={field.value?.toString()}>
                              <FormControl>
                                <SelectTrigger data-testid="select-destination-stairs">
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {[0, 1, 2, 3, 4].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num === 0 ? 'Ground Floor' : `${num} Flight${num > 1 ? 's' : ''}`}
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
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Phone className="h-5 w-5" />
                      <span className="text-sm font-medium">Your Information</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} data-testid="input-first-name" />
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
                              <Input placeholder="Smith" {...field} data-testid="input-last-name" />
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
                            <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
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
                              <Input type="tel" placeholder="604-123-4567" {...field} data-testid="input-phone" />
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
                            <FormLabel>Phone Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-phone-type">
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
                      name="referralSource"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How did you hear about us? *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-referral">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Google">Google</SelectItem>
                              <SelectItem value="Social Media">Social Media</SelectItem>
                              <SelectItem value="Word of Mouth">Word of Mouth</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any special requirements or items that need extra care?" 
                              className="resize-none" 
                              rows={4}
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
                    <div className="bg-accent/50 p-6 rounded-md space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Move Details</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-muted-foreground">Date:</span>
                          <span data-testid="review-date">{form.watch("moveDate") ? format(form.watch("moveDate")!, "PPP") : "-"}</span>
                          <span className="text-muted-foreground">Size:</span>
                          <span data-testid="review-size">{form.watch("moveSize")}</span>
                          <span className="text-muted-foreground">Package:</span>
                          <span data-testid="review-package">{form.watch("packageType")}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">From</h4>
                        <p className="text-sm" data-testid="review-origin">
                          {form.watch("originStreet")}<br />
                          {form.watch("originCity")}, {form.watch("originProvince")} {form.watch("originPostalCode")}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">To</h4>
                        <p className="text-sm" data-testid="review-destination">
                          {form.watch("destinationStreet")}<br />
                          {form.watch("destinationCity")}, {form.watch("destinationProvince")} {form.watch("destinationPostalCode")}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Contact</h4>
                        <div className="text-sm space-y-1">
                          <p data-testid="review-name">{form.watch("firstName")} {form.watch("lastName")}</p>
                          <p data-testid="review-email">{form.watch("email")}</p>
                          <p data-testid="review-phone">{form.watch("phone")}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-md">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold">Estimated Cost:</span>
                        <span className="text-3xl font-bold text-primary">${estimatedCost}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Final cost may vary based on actual time and services required
                      </p>
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
                  className="flex-1"
                  data-testid="button-previous"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
              )}
              {step < 5 && (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1"
                  data-testid="button-next"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
              {step === 5 && (
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={createBookingMutation.isPending}
                  data-testid="button-submit"
                >
                  {createBookingMutation.isPending ? "Submitting..." : "Submit Booking"}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
      <SharedFooter />
    </div>
  );
}
