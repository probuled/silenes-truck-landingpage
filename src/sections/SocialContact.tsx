import { motion } from "motion/react";
import { Container } from "../components/Container";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import {
  ArrowUpRightIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "../components/icons";
import { fadeUp, staggerContainer } from "../animations/variants";
import { cn } from "../utils/cn";
import type { BusinessInfo } from "../types/content";

interface SocialContactProps {
  business: BusinessInfo;
}

interface ContactChannel {
  key: string;
  href: string;
  label: string;
  value: string;
  description: string;
  icon: typeof WhatsAppIcon;
  iconWrapClassName: string;
  glowClassName: string;
  hoverBorderClassName: string;
}

export function SocialContact({ business }: SocialContactProps) {
  const channels: ContactChannel[] = [
    {
      key: "whatsapp",
      href: business.whatsappUrl,
      label: "WhatsApp",
      value: business.phoneDisplay,
      description:
        "Fala direto com a gente para tirar dúvidas ou fazer seu pedido.",
      icon: WhatsAppIcon,
      iconWrapClassName: "bg-whatsapp/15 text-whatsapp",
      glowClassName: "bg-whatsapp/25",
      hoverBorderClassName: "hover:border-whatsapp/50",
    },
    {
      key: "instagram",
      href: business.instagramUrl,
      label: "Instagram",
      value: business.instagramHandle,
      description:
        "Acompanha as novidades, promoções e os bastidores da chapa.",
      icon: InstagramIcon,
      iconWrapClassName:
        "bg-gradient-to-tr from-instagram-start via-instagram-mid to-instagram-end text-cream",
      glowClassName: "bg-instagram-mid/25",
      hoverBorderClassName: "hover:border-instagram-mid/50",
    },
  ];

  return (
    <section
      id="redes-sociais"
      className="py-24 sm:py-32"
      aria-labelledby="redes-sociais-heading"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Fale com a gente"
            title={<span id="redes-sociais-heading">Onde nos encontrar</span>}
            description="Escolha o canal que preferir, a gente responde rapidinho."
            align="center"
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2"
        >
          {channels.map(
            ({
              key,
              href,
              label,
              value,
              description,
              icon: Icon,
              iconWrapClassName,
              glowClassName,
              hoverBorderClassName,
            }) => (
              <motion.a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-colors duration-300",
                  hoverBorderClassName,
                )}
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute -right-10 -top-10 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                    glowClassName,
                  )}
                />

                <div className="relative flex items-center justify-between">
                  <span
                    className={cn(
                      "flex size-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                      iconWrapClassName,
                    )}
                  >
                    <Icon className="size-7" />
                  </span>
                  <ArrowUpRightIcon className="size-5 text-cream/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cream" />
                </div>

                <div className="relative">
                  <h3 className="font-display text-2xl uppercase text-cream">
                    {label}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-cream/70">
                    {value}
                  </p>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-cream/60">
                    {description}
                  </p>
                </div>
              </motion.a>
            ),
          )}
        </motion.div>
      </Container>
    </section>
  );
}
