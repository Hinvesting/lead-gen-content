import { useState } from "react";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.us1.make.com/43i0zrryriegg6grhe995mveumvpwi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email
        })
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your Multi-Content Generator is being sent to your email.",
        });
        setEmail("");
        onClose();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setEmail("");
    onClose();
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
                  onChange={(e) => setEmail(e.target.value)}
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
