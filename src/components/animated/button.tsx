import { BitButtonProps, Button } from "@/components/ui/8bit/button";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

// Create motion-enabled version
export default function AnimatedButton({
  children,
  motionProps,
  buttonProps
}: { buttonProps: BitButtonProps, motionProps: MotionProps, children: React.ReactNode }) {
  return (
    //@ts-ignore
    <motion.div
      style={{ display: "inline-block" }}
      {...motionProps}
    >
      <Button {...buttonProps}>{children}</Button>
    </motion.div>
  );
}
