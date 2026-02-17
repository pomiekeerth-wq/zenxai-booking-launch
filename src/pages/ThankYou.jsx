import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const ThankYou = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="text-center space-y-6 max-w-md mx-auto">
                <div className="flex justify-center">
                    <CheckCircle2 className="w-24 h-24 text-primary animate-bounce" />
                </div>
                <h1 className="text-4xl font-bold text-foreground">Booking Confirmed!</h1>
                <p className="text-xl text-muted-foreground">
                    Thank you for scheduling a consultation with us. We've sent a confirmation email with the details.
                </p>
                <div className="pt-6">
                    <Link to="/">
                        <Button size="lg" className="font-bold">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
