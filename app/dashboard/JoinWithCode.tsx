import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const JoinWithCode = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>Join with Code</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[475px]">
        <DialogHeader>
          <DialogTitle>Join with Code</DialogTitle>
          <DialogDescription>
            Enter the correct the code to join the Session
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <InputOTP maxLength={10}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={6} />
                <InputOTPSlot index={7} />
                <InputOTPSlot index={8} />
                <InputOTPSlot index={9} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Join</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JoinWithCode;
