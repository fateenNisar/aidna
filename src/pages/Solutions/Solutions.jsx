import React from "react";
import { Hero } from "../../components/hero/Hero";
import { TiltCard } from "../../components/TiltCards/TiltCard";
import { Title } from "../../components/title/Title";
import { ScrollableSection } from "../../components/scrollable/Scrollable";
import { Tabs } from "../../components/tabs/Tabs";

export const Solutions = () => {
  return (
    <div>
      <div className="solutions-container h-screen  ">
        <Hero
          title={"Go beyond the expected."}
          subtitle={
            "AIDNA redefines what’s possible and give share to the future and evolve in tandem to your business strategy. "
          }
        />
      </div>

      <div className="flex gap-8 mx-auto w-[90%] mt-10 max-md:flex-col">
        <TiltCard
        classes={"text-xl"}
          title={"Innovate"}
          subtitle={
            "Innovation happens at light speed. We need to be faster. Built with years of IT Technology and Industry experience, the AIDNA ethos is steeped in technology. We have a full arsenal of cutting-edge IT technology, applications, tools and services of ultra-new technologies that provides continual real-time, secure and scalable capabilities. "
          }
        />
        <TiltCard
        classes={"text-xl"}
          title={"Strategize "}
          subtitle={
            "A sound IT Technology Program goes beyond the technology and digital implications necessary to operate and be functional. AIDNA team works with each client to provide a bespoke Technology Program to create a culture of IT preparedness that works symbiotically with the underlying technology solutions."
          }
        />
        <TiltCard
        classes={"text-xl"}
          title={"Technologize "}
          subtitle={
            "It takes more than purchasing a black box and a boilerplate written policy to create a meaningful Technology Program that effectively cascades through the enterprise and fully integrates your risk management objectives. As a necessary process we at AIDNA empower and provide accountability with state-of-the-art technology"
          }
        />
      </div>
      <ScrollableSection
        data={[
          {
            title: "Data & Analytics for intelligent workflows",
            img:"newimages/dataanalytics.png",
            content: (
              <div>
                We modernize, collect, organize, analyse and infuse data and
                sights to the ladder of AI.
                <ul className=" mt-3">
                  <li>Collect Data: Make your data samples accessible</li>
                  <li>
                    Organize: Make your data to create a business-ready analysis
                    foundation
                  </li>
                  <li>
                    Modernize Data: Make your data ready for an AI and hybrid
                    cloud world
                  </li>
                </ul>
              </div>
            ),
          },
          {
            title: "Business Continuity & Resilience",
            img:"newimages/kiwi.jpg",

            content: (
              <div>
                We enable the resilient models to migrate risk and ensures
                business continuity.
                <ul className="mt-3">
                  <li>
                    AI-TRiSM: Model Monitoring, ModelOps, AI Application
                    Security
                  </li>
                  <li>Privacy, Confidentiality and Compliance</li>
                  <li>Biometric SSO with Cloud-based generative AI</li>
                </ul>
              </div>
            ),
          },
          {
            title: "AI and Machine Learning",
            img:"newimages/machine.png",

            content: (
              <div>
                Transform your business into cognitive enterprise
                <ul className=" mt-3">
                  <li>
                    AI-TRiSM: Model Monitoring, ModelOps, AI Application
                    Security
                  </li>
                  <li>Privacy, Confidentiality and Compliance</li>
                  <li>Biometric SSO with Cloud-based generative AI</li>
                </ul>
              </div>
            ),
          },
        ]}
      />

      <Tabs
        data={[
          {
            btnTitle: "Innovate",
            img:"images/purpleaidna.svg",

            content: (
              <div>
                Business moves fast, industry disrupts & customers move. We
                specialize in working through change
                <ul className="text-lg">
                  <li className="mt-4">Process Automation</li>
                  <li>Business Model change</li>
                  <li>Cloud Transformation</li>
                  <li>Agile Transformation</li>
                </ul>
              </div>
            ),
          },
          {
            btnTitle: "Strategize",
            img:"images/yellowaidna.svg",

            content: (
              <div>
                Build New Capabilities with Ambition. Redefine what can be
                achieved, conceptualize the target future and stride with our
                expertise
                <ul className="  text-lg">
                  <li className="mt-4">Future Innovation</li>
                  <li>New Business Model & Concept Development</li>
                  <li>Concept -to-commercialization </li>
                  <li>Product Strategy</li>
                </ul>
              </div>
            ),
          },
          {
            btnTitle:"Technologize",
            img:"images/aidna.svg",

            content: (
              <div>
              Access, Architect, and Co-Create.


              <ul className="  text-lg">
                <li className="mt-4">Cloud Architecture</li>
                <li>DevOps & Security</li>
                <li>Product Engineering</li>
                <li>CRM & CDP </li>
                <li>UX/UI design</li>
                <li>Data Architecture</li>
              </ul>
            </div>
            )
          },
          {
            btnTitle: "Unlock Potential",
            img:"images/teal.svg",

            content: (
              <div>

Unlock the potential of your enterprise data,


              <ul className="    text-lg">
                <li className="mt-4">Data Sharing</li>
                <li>Data Engineering</li>
                <li>Data Governance</li>
                <li>Data Warehousing</li>
                <li>Aritifical Intelligence</li>
              </ul>
            </div>
            )
          }
        ]}
      />
    </div>
  );
};
