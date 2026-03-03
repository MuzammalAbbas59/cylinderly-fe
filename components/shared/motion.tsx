'use client';

/**
 * Shared Framer Motion animation wrappers.
 * Import these to avoid repeating animation config across sections.
 *
 * Usage:
 *   <FadeUp>  <h2>Title</h2>  </FadeUp>
 *   <StaggerContainer>
 *     <StaggerItem> ... </StaggerItem>
 *   </StaggerContainer>
 */

import { motion, type MotionProps, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type DivProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;

// Consistent easing used throughout the app
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// ----- Variants -----

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT_EXPO, delay },
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

// ----- Components -----

interface FadeUpProps extends DivProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Fades in + slides up on scroll. `once: true` so it only fires once. */
export function FadeUp({ children, delay = 0, className, ...rest }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      custom={delay}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends DivProps {
  children: ReactNode;
  className?: string;
}

/** Stagger-animates its direct children. Wrap StaggerItem inside. */
export function StaggerContainer({ children, className, ...rest }: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends DivProps {
  children: ReactNode;
  className?: string;
}

/** A single item inside a StaggerContainer. */
export function StaggerItem({ children, className, ...rest }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={staggerItemVariants} {...rest}>
      {children}
    </motion.div>
  );
}

interface ScaleInProps extends DivProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Scales in from 90% on scroll (good for illustrations / cards). */
export function ScaleIn({ children, delay = 0, className, ...rest }: ScaleInProps) {
  return (
    <motion.div
      className={className}
      variants={scaleInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ ...scaleInVariants.visible, delay } as never}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Animated CTA button with scale + lift on hover, compress on tap. */
export function AnimatedButton({
  children,
  className,
  ...rest
}: DivProps & { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
