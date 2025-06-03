import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { validateLogin, validateSignup } from "@/utils/validation";

function ToletuLogo() {
  return (
    <div className="text-3xl text-center font-bold text-[#38b6ff] mb-4 select-none tracking-wider md:tracking-widest">
      Toletu
      <p className="text-center text-xs text-gray-400 md:tracking-widest">
        Login or signup to get started
      </p>
    </div>
  );
}

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [signupStep, setSignupStep] = useState(0);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");

  const {
    login,
    startSignup,
    verifySignupOtp,
    completeSignupAndLogin,
    isAuthenticated,
  } = useAuth();
  const navigate = useNavigate();

  // Redirect if logged in
  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  // Login handler
  const handleLogin = async () => {
    const valid = validateLogin({ phone, password });
    if (valid !== true) {
      toast.error(valid);
      return;
    }
    try {
      await login({ phone, password });
      console.log(phone,password)
      toast.success("Logged in successfully");
      console.log(phone,password)
    } catch {
      toast.error("Invalid phone number or password");
    }
  };

  // Send OTP handler (signup step 0)
  const handleSendOtp = async () => {
    if (!/^\d{10}$/.test(phone)) {
      toast.error("Enter a valid 10-digit phone number");
      return;
    }
    try {
      // Use the startSignup function from useAuth
      await startSignup(phone);
      toast.success("OTP sent to your phone");
      setSignupStep(1);
    } catch (error: any) {
      if (error.message === "Phone number already registered") {
        toast.error("Phone number already registered. Please login.");
        setIsLogin(true);
      } else {
        toast.error("Failed to send OTP. Try again.");
      }
    }
  };

  // Verify OTP handler (signup step 1)
  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      toast.error("Enter a valid 6-digit OTP");
      return;
    }
    try {
      const verified = await verifySignupOtp(phone, otp);
      if (!verified) {
        toast.error("Invalid OTP");
        return;
      }
      toast.success("OTP verified");
      setSignupStep(2);
    } catch {
      toast.error("Verification failed. Try again.");
    }
  };

  // Signup handler (signup step 2)
  const handleSignup = async () => {
    const valid = validateSignup({ phone, password, confirmPassword, otp });
    if (valid !== true) {
      toast.error(valid);
      return;
    }
    try {
      await completeSignupAndLogin({ phone, password, username, otp });
      toast.success("Signup successful. Logged in.");

      // Reset all states and switch to dashboard
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setOtp("");
      setUsername("");
      setSignupStep(0);
      setIsLogin(true);
      navigate("/dashboard");
    } catch {
      toast.error("Signup failed. Try again.");
    }
  };

  // Reset form when toggling between login/signup
  const resetForm = () => {
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setOtp("");
    setUsername("");
    setSignupStep(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e6f0fb] p-4">
      <ToletuLogo />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md overflow-hidden p-6 space-y-4 relative min-h-[400px]">
        {isLogin ? (
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-2xl font-semibold text-center text-[#38b6ff]">
              Login
            </h1>
            <Input
              placeholder="Phone Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              onClick={handleLogin}
              className="w-full bg-[#38b6ff] hover:bg-[#2c90e8]"
            >
              Login
            </Button>
            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <button
                className="text-[#38b6ff] font-semibold hover:underline"
                onClick={() => {
                  setIsLogin(false);
                  resetForm();
                }}
              >
                Sign up
              </button>
            </p>
          </div>
        ) : (
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-2xl font-semibold text-center text-[#38b6ff]">
              Sign Up - Step {signupStep + 1}
            </h1>

            {signupStep === 0 && (
              <>
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                />
                <Button
                  onClick={handleSendOtp}
                  className="w-full bg-[#38b6ff] hover:bg-[#2c90e8]"
                >
                  Send OTP
                </Button>
              </>
            )}

            {signupStep === 1 && (
              <>
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup className="ml-2 md:ml-6 lg:ml-22">
                    {[...Array(6)].map((_, i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
                <Button
                  onClick={handleVerifyOtp}
                  className="w-full bg-[#38b6ff] hover:bg-[#2c90e8]"
                >
                  Verify OTP
                </Button>
              </>
            )}

            {signupStep === 2 && (
              <>
                <Input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button
                  onClick={handleSignup}
                  className="w-full bg-[#38b6ff] hover:bg-[#2c90e8]"
                >
                  Sign Up
                </Button>
              </>
            )}

            <p className="text-center text-sm text-gray-500 mt-2">
              Already have an account?{" "}
              <button
                className="text-[#38b6ff] font-semibold hover:underline"
                onClick={() => {
                  setIsLogin(true);
                  resetForm();
                }}
              >
                Log in
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
