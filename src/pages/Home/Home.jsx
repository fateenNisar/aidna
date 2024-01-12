import React, { useEffect, useRef } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Home.css";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { Insights } from "../../components/insights/Insights";
import { Hero } from "../../components/hero/Hero";
import { TiltCard } from "../../components/TiltCards/TiltCard";
import { Title } from "../../components/title/Title";
import { ScrollableSection } from "../../components/scrollable/Scrollable";
import { ClientLogo } from "../ClientLogos/ClientLogo";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tabs } from "../../components/tabs/Tabs";

export const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const videRef = useRef(null);
  return (
    <div>
      <div
        onClick={() => {
          videRef.current.play();
        }}
        className="home-container  "
      >
        <div className="video-background">
          {/* <Navbar /> */}
          <video
            playsInline
            ref={videRef}
            autoPlay
            muted
            loop
            className="video   "
          >
            <source src="digitial.mp4" type="video/mp4" />
          </video>

          <Hero
            title={
              "      Your Data | Your AI   Your IT Security "
            }
            subtitle={
              "Own them all with AIDNA’s Data Intelligence and AI Products."
            }
          />
        </div>
      </div>

      <div></div>
      <div data-aos="fade-right" data-aos-duration="1000">
        <Insights />
      </div>
      {/* <Title heading={"What We Do"}  subheading={"We are purpose led global business and technology company specializing in our cutting-edge digital products, solutions and consulting services"} >  */}
      {/* </Title> */}
      <div data-aos="fade-up" data-aos-duration="2000">
        <Title
          subheading={
            "We are purpose led global technology company with cutting-edge digital intelligence platform, products, solutions and consulting services. "
          }
        />
        <div className="flex gap-8 mx-auto w-[90%] mt-10 max-md:flex-col">
          <TiltCard
            subtitle={
              "AIDNA brings intelligence to the core of everything that matters to your organization. Activate your Data, Analytics and Security  with dynamic end-to-end integrated product and AI at its core"
            }
          />
          <TiltCard
            subtitle={
              "  One Platform - Global Impact. Inbuilt products and features helpto unlock your business value. Innovative cutting-edge algorithmsand Data models operations, designed to solve the most critical  business problems with Data Analysis and AI."
            }
          />
          <TiltCard
            subtitle={
              "              We recognize that in the time of unprecedented disruption driven by technology advancements, our customers' existential needs are more than incremental efficiencies. "
            }
          />
        </div>
      </div>

      <div data-aos="flip-right" data-aos-duration="1000">
        <div className="mt-10"></div>

        <Title heading={"Discover AIDNA"}  icon={true}/>

        <Title
          subheading={
            "Our innovative enterprise technology platform, products, and solutions re-define enterprise operations and unlock the potential with Data Intelligence and Generative AI  "
          }
        />
        <ScrollableSection
          data={[
            {
              title: "Business Context",
              img:"images/purplescroll.avif",
              content:
                " We provide visibility into your organization’s environment. Build data-driven-models to prepare a single source of truth to eliminate risks and increase resilience of products, services, and systems.",
            },
            {
              title: "Prevent Blind-Spots",
              img:"images/3.png",
              content:
                "With our biometric real-time authentication and authorization product, AIDNA capture telescopic view of everything – users, systems, applications, data, insights, analytics, and risks. Our Adaptive AI platform address gaps in real-time and effective manner.             ",
            },
            {
              title: "Unlock Value",
              img:"images/2.png",
              content:
                "Turns insights into action. Unlock the potential value of your digital universe with our Data Intelligence and AI Platform. AI powered Operations for every business decision",
            },

          ]}
        />
      </div>

      <div data-aos="fade-left" data-aos-duration="1000">
        <Title heading={"Trusted By"} />

        <ClientLogo />
      </div>

      <div></div>
    </div>
  );
};
