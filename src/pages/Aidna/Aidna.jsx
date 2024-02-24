import React from "react";
import { Tabs } from "../../components/tabs/Tabs";
import { Hero } from "../../components/hero/Hero";
import { Title } from "../../components/title/Title";
import { ScrollableSection } from "../../components/scrollable/Scrollable";
import { TiltCard } from "../../components/TiltCards/TiltCard";
import { NavLink } from "react-router-dom";

export const Aidna = () => {
  return (
    <div>
      <div className="solutions-container h-screen  ">
        <Hero
          title={"AIDNA - Artificial Intelligence Digital Network Algorithms"}
          subtitle={
            "AIDNA’s lineage, quality, control, data privacy and security that embodies trust, integrity, performance, and resilience. "
          }
        />
      </div>

      <Title
        subheading={
          "‘AIDNA’ - The Data Intelligence and AI Product designed for hybrid and cross-cloud visibility with ultra-fast decision capabilities and operational actionability for a global enterprise environment"
        }
      />

      <ScrollableSection
        data={[
          {
            title: "Visualization and Mapping ",
            img:"newimages/visual.png",
            content:
              "Understand the data sets, relationships, trust boundaries and context between your assets through our aGraph™ powered asset relationship mapping",
            },
          {
            title: "Security Gaps & Inconsistencies",
            img:"newimages/security1.png",

            content:
              "Real-time biometric facial recognition processing backed with AI capabilities, rapidly identifies security gaps, vulnerabilities, and data inconsistencies",
          },

          {
            title: "Data Integrations",
            img:"newimages/business2.jpg",

            content:
              "Being a cross-cloud platform, data flow and API integrations bedrocks for custom workflows models without compromising performance, data privacy and IP control.",
          },
          {
            title: "Insights and Automate",
            img:"newimages/insights2.jpg",

            content:
              "Data and insights are at the core of AIDNA, with Custom workflows, allowing to automate the existing operations with adaptive learning capabilities to enhance productivity.             ",
          },
          {
            title: "Improve & Report",
            img:"newimages/improve.jpg",

            content:
              "AI driven operational insights and data hygiene provide security compliance and real-time reporting. ",
          },
        ]}
      />

      <Title
        subheading={
          "AIDNA is the Data Intelligent Platform for your entire enterprise to capitalize on Data & AI. Build on open-data-lake, to embody an open and unified foundation for all data and governance. It is powered by Data Intelligence Engine (AI) to digest, process and action on the uniqueness of your enterprise data."
        }
      />

      <Tabs
        data={[
          {
            btnTitle: "Customized Use Case",
            img:"images/aidna.svg",
            content: (
              <div>
                Scalable AI applications with cloud-native development and use
                of data-centric approach. Applying right data foundation and
                data models for machine learning and automation to business
                workflows while ensuring data quality, compliance, and
                transparency within the AI systems.
                
              </div>
            ),
          },
          {
            btnTitle: "Governance",
            img:"images/purpleaidna.svg",
            content: (
              <div>
                Unifying observability and governance for data, analytics, and
                AI. Unique data governance mode for structured and unstructured
                data with end-to-end compliant view of your data estate.
                <ul>
                  <li>AI powered Observability.</li>
                  <li>
                    Single & secure permission models for data, insights, and
                    AI.
                  </li>
                  <li>
                    Context awareness across the digital environment provides
                    real-time visibility.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            btnTitle: "Data Warehousing",
            img:"images/yellowaidna.svg",
            content: (
              <div>
                Cloud Native operations and AI optimized query execution
                simplifies complexity for open formats and API integrations.
                <ul>
                  <li>Complexity Simplified.</li>
                  <li>AI optimized operations.</li>
                  <li>Open API integrations to avoid lock-in.</li>
                </ul>
              </div>
            ),
          },
          {
            btnTitle: "ETL and Data Sharing",
            img:"images/greenaidna.svg",
            content: (
              <div>
                Adaptive Intelligence data processing – batch and real-time. AI
                automation helps switch between batch/real-time based on use
                case.
                <ul>
                  <li>End-to-End data pipeline observability.</li>
                  <li>Scaled optimization with reliability.</li>
                  <li>Simplification of workflows for batch & streaming.</li>
                </ul>
              </div>
            ),
          },
          {
            btnTitle: "Data Sharing and Orchestrations",
            img:"images/teal.svg",
            content: (
              <div>
                Data Sharing made easy with secure live shares for data sets,
                models, and dashboards etc. Data-pipelines and execution
                optimization to address budgets and deadline requirements.
                <ul>
                  <li>Intelligent compute-time selection.</li>
                  <li>Simplified ETL’s for workload specific autoscaling.</li>
                  <li>
                    Knowing what and where data lives and how it moves in your
                    digital universe.
                  </li>
                </ul>
              </div>
            ),
          },
          // {
          //   btnTitle: "Security & Vulnerability Management",
          //   content: (
          //     <div>
          //       Access data-driven insights, combat threats, timely and
          //       effective mitigation of risk incidents at scale backed by the
          //       SOCs intelligence ability about assets across digital
          //       environments provides real-time visibility into your attack
          //       surface. Identifying risks to all key assets requires proactive
          //       measures across your complete enterprise digital universe.
          //       <ul>
          //         <li>
          //           Providing end-to-end visibility and intelligence. Delivers
          //           elite visibility to minimize misconfigured scanners and
          //           ineffective remediation prioritization.
          //         </li>
          //         <li>
          //           AI driven Un-Parallel visibility to identify Digital Blind
          //           Spots
          //         </li>
          //       </ul>
          //     </div>
          //   ),
          // },
        ]}
      />

<div className="mt-10 ">.</div>
      <Title
        heading={"WHY AIDNA"}
        subheading={
          "AIDNA is cloud native Platform with insights for exabyte-scale of data analytics across hybrid clouds digital echo-system for search, analytics, and visualization for actionable intelligence. "
        }
      />
      <div className="flex-row md:flex gap-7 mx-3">
        <TiltCard
        classes={"text-xl"}
          title={"Intelligent"}
          subtitle={
            "Our generative AI combined with the unique fusion benefit of open-data-lake to fuel the Data Intelligence Engine that understands and processes the unique semantics of your enterprise data. "
          }
        />
        <TiltCard
        classes={"text-xl"}
          title={"Simple"}
          subtitle={
            "AIDNA’s user experience is enhanced by Natural Language processing. The real-time biometric image processing seamlessly keeps running without disrupting user productivity or performance. Data Intelligence Also, the AI engine understands, processes and adapts to your enterprises language and data to make search, discovery of new data as easy. "
          }
        />
        <TiltCard
        classes={"text-xl"}
          title={"Robust"}
          subtitle={
            "Robust Security and Governance are integral virtues of AIDNA to master Data and- AI applications. This helps our platform deliver end-to-end MLOps and AI applications solutions with unified data governance and observability..             "
          }
        />
      </div>

      {/* <div className="mt-22" >s</div> */}
      <Title  subtitleStyle={{marginBottom:20}} subheading={"AIDNA comes in two modes"} />
      <div className="h-[3px] w-24 text-center flex mx-auto  bg-[#DA2E2F]"></div>

      <div className="gap-0 md:flex  ">
        <NavLink  className={"w-full"} to={"/udos"}>
          <TiltCard
                    classes={"text-2xl mb-3"}

            title={"üDOS – Universal Digital Observability & Security."}
            subtitle={
              "DOS is a Next-Gen Digital Immune System for AI-TRiSM  üDOS is a data driven and biometric authentication and authorization system with AI at its core. It is real-time and continuous in nature with an absolutely negligible technological footprint."
            }
            
          />
        </NavLink>
        <NavLink  className={"w-full"} to={"/ucdp"}>
          <TiltCard
          classes={"text-2xl mb-3"}
            title={"üCDP : Cross-Cloud Data Intelligence Product."}
            subtitle={
              "üCDP brings AI to your data & Insights.Designed for hybrid and cross-cloud visibility with ultra-fast decision capabilities and operational actionability for a global enterprise environment."
            }
          />
        </NavLink>
      </div>

            <div className="mt-20" ></div>
      <Title heading={"Explore AIDNA"} icon={true}  />
    </div>
  );
};
