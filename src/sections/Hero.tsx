import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Container } from "../components/Container";
import { OrderButtons } from "../components/OrderButtons";
import { useTilt } from "../hooks/useTilt";
import { staggerContainer, fadeUp } from "../animations/variants";
import { cn } from "../utils/cn";
import sileneSticker from "../assets/brand/silene-sticker.png";
import type { BusinessInfo, MenuItem } from "../types/content";

interface HeroProps {
  business: BusinessInfo;
  heroItem: MenuItem;
  heroImage: string;
}

const EMBERS = [
  { top: "18%", left: "62%", size: 5, duration: 7, delay: 0 },
  { top: "32%", left: "84%", size: 3, duration: 5.5, delay: 0.6 },
  { top: "58%", left: "70%", size: 4, duration: 6.5, delay: 1.2 },
  { top: "74%", left: "90%", size: 3, duration: 5, delay: 0.3 },
  { top: "46%", left: "56%", size: 2, duration: 6, delay: 1.6 },
];

export function Hero({ business, heroItem, heroImage }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const tilt = useTilt(6);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 [@media(max-height:640px)]:min-h-0 [@media(max-height:640px)]:pt-24 [@media(max-height:640px)]:pb-12"
    >
      <motion.div
        aria-hidden="true"
        style={shouldReduceMotion ? undefined : { y: backgroundY }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(225,29,42,0.35),transparent_55%),radial-gradient(circle_at_10%_80%,rgba(225,29,42,0.15),transparent_45%)]"
      />

      {!shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {EMBERS.map((ember, index) => (
            <span
              key={index}
              className="absolute animate-float rounded-full bg-brand/70 blur-[2px]"
              style={{
                top: ember.top,
                left: ember.left,
                width: ember.size,
                height: ember.size,
                animationDuration: `${ember.duration}s`,
                animationDelay: `${ember.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
          style={
            shouldReduceMotion
              ? undefined
              : { y: contentY, opacity: contentOpacity }
          }
          className="text-center lg:text-left"
        >
          <motion.h1
            variants={staggerContainer}
            className="relative mx-auto mt-6 w-fit text-left font-display text-5xl uppercase leading-[1.15] text-cream sm:text-6xl lg:mx-0 lg:w-auto lg:text-7xl"
          >
            <img
              src={sileneSticker}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-10 -right-10 w-32 -rotate-6 drop-shadow-[0_10px_16px_rgba(0,0,0,0.5)] xl:hidden"
            />
            <img
              src={sileneSticker}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-[68px] right-[112px] hidden w-40 -rotate-6 drop-shadow-[0_16px_24px_rgba(0,0,0,0.5)] xl:block"
            />
            <motion.span variants={fadeUp} className="block">
              Hambúrguer
            </motion.span>
            <motion.span variants={fadeUp} className="block text-brand">
              bem-feito,
            </motion.span>
            <motion.span variants={fadeUp} className="block">
              do jeitinho
            </motion.span>
            <motion.span variants={fadeUp} className="block">
              que você <span className="text-brand">gosta</span>
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-lg text-pretty text-lg leading-relaxed text-cream/70 lg:mx-0"
          >
            Blend na medida, chapa quente e ingredientes frescos todos os dias.
            A Silene's Truck é parada obrigatória em Paulista para quem leva
            hambúrguer a sério.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            <OrderButtons
              business={business}
              size="large"
              showSeparators={false}
              stackOnMobile
              hideWhatsapp
              className="mx-auto max-w-sm justify-center lg:mx-0 lg:max-w-none lg:justify-center"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          onMouseMove={tilt.handleMouseMove}
          onMouseLeave={tilt.handleMouseLeave}
          style={{ perspective: 1000 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 animate-breathe rounded-full bg-brand/30 blur-3xl"
          />
          <div
            className={cn(
              "relative z-10 h-full w-full",
              !shouldReduceMotion && "animate-float",
            )}
          >
            <motion.img
              style={
                shouldReduceMotion
                  ? undefined
                  : { rotateX: tilt.rotateX, rotateY: tilt.rotateY }
              }
              src={heroImage}
              alt={`${heroItem.name}, hambúrguer artesanal da Silene's Truck`}
              width={900}
              height={817}
              className="h-full w-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
