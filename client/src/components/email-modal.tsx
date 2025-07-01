import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Log modal state changes
  useEffect(() => {
    if (isOpen) {
      console.log('[EmailModal] Modal opened');
    } else {
      console.log('[EmailModal] Modal closed');
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('[EmailModal] Form submission started', { email: email.substring(0, 3) + '...' });
    
    if (!email || !email.includes('@')) {
      console.warn('[EmailModal] Invalid email format:', { emailLength: email.length, hasAt: email.includes('@') });
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log('[EmailModal] Starting webhook request');

    try {
      const requestPayload = { email: email };
      console.log('[EmailModal] Sending request to webhook', { 
        url: 'https://hook.us1.make.com/43i0zrryriegg6grhe995mveumvpwi',
        payload: { email: email.substring(0, 3) + '...' }
      });

      const response = await fetch('https://hook.us1.make.com/43i0zrryriegg6grhe995mveumvpwi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload)
      });

      console.log('[EmailModal] Webhook response received', { 
        status: response.status, 
        statusText: response.statusText,
        ok: response.ok 
      });

      if (response.ok) {
        const responseData = await response.text();
        console.log('[EmailModal] Success response data:', responseData);
        
        toast({
          title: "Success!",
          description: "Your Multi-Content Generator is being sent to your email.",
        });
        setEmail("");
        onClose();
        console.log('[EmailModal] Form submission completed successfully');
      } else {
        const errorText = await response.text();
        console.error('[EmailModal] Webhook returned error', { 
          status: response.status, 
          statusText: response.statusText,
          errorBody: errorText 
        });
        throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`);
      }
    } catch (error) {
      console.error('[EmailModal] Error during form submission:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        type: typeof error,
        timestamp: new Date().toISOString()
      });
      
      toast({
        title: "Error",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      console.log('[EmailModal] Form submission process completed');
    }
  };

  const handleClose = () => {
    console.log('[EmailModal] Closing modal and clearing email');
    setEmail("");
    onClose();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    console.log('[EmailModal] Email input changed', { length: newEmail.length, hasAt: newEmail.includes('@') });
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-midnight-blue border-2 border-vibrant-gold max-w-md w-full mx-4">
        <div className="relative">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="absolute -top-2 -right-2 text-light-gray hover:text-white transition-colors duration-300"
          >
            <X className="w-6 h-6" />
          </Button>
          
          <div className="p-2">
            <h3 className="font-montserrat font-bold text-2xl mb-4 text-center text-white">Get Your Free Tool</h3>
            <p className="text-light-gray text-center mb-6">Enter your email to download the Multi-Content Generator instantly.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-light-gray focus:border-vibrant-gold focus:outline-none transition-colors duration-300"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-vibrant-gold text-midnight-blue font-montserrat font-bold py-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Download Free Generator"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
