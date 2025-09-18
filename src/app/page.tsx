"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'highlight' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={40}
          buttonText="Get Started"
          onButtonClick={() => {}}
          className="!text-black"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to PulseFlow"
          subtitle="Your seamless SaaS experience"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => {}}
          onSecondaryButtonClick={() => {}}
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="About PulseFlow"
          descriptions={["We provide a seamless SaaS solution that enhances productivity.", "Join thousands of users who trust us."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Purchase"
          steps={[
            { title: "Step 1", description: "Register an account", image: "", position: "left", isCenter: false },
            { title: "Step 2", description: "Choose a plan", image: "", position: "center", isCenter: true },
            { title: "Step 3", description: "Make your payment", image: "", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="Understand the financials behind PulseFlow"
          kpiItems={[
            { value: "100M", description: "Total Supply", icon: Coin },
            { value: "55M", description: "Circulating Supply", icon: Wallet },
            { value: "45M", description: "Reserved for Development", icon: Graph }
          ]}
        />
      </div>
      <div id="faq" data-section="faq">
        <BentoFAQ
          items={[
            { title: "What is PulseFlow?", content: "PulseFlow is a SaaS platform that simplifies project management." },
            { title: "How do I register?", content: "You can register through our main page by clicking on the 'Get Started' button." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="PulseFlow Logo"
          logoText="PulseFlow"
          className="text-center"
          columns={[
            { title: "Resources", items: [{ label: "Blog", onClick: () => {} }] },
            { title: "Company", items: [{ label: "About", onClick: () => {} }] },
            { title: "Support", items: [{ label: "FAQ", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 PulseFlow. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
