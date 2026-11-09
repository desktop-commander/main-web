/**
 * "Trouble connecting?" line under the setup sections, linking to the two
 * Help center articles people need most while connecting a computer.
 */
const SetupHelpLink = ({ className = "" }: { className?: string }) => (
  <p className={`text-center text-sm text-muted-foreground ${className}`}>
    Trouble connecting? Read{" "}
    <a href="/help/devices/connect-computer" className="text-primary hover:underline">
      how to connect a computer
    </a>{" "}
    or{" "}
    <a href="/help/troubleshooting/remote-cant-find-computer" className="text-primary hover:underline">
      why your computer isn't found
    </a>
    .
  </p>
);

export default SetupHelpLink;
