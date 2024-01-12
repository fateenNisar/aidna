import React from "react";
import { Hero } from "../../components/hero/Hero";
import { Title } from "../../components/title/Title";
import { TiltCard } from "../../components/TiltCards/TiltCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
};
import { ScrollableSection } from "../../components/scrollable/Scrollable";
export const Udcp = () => {
  return (
    <div className="">
      <div className="h-screen">
        <Hero
          title={"üCDP : Cross-Cloud Data Intelligence Product. "}
          subtitle={
            "üCDP brings AI to your data & Insights. Designed for hybrid and cross-cloud visibility with ultra-fast decision capabilities and operational actionability for a global enterprise environment"
          }
        />
      </div>

      <Title
        subheading={
          "üDOS solves problems in real-time with full-stack, analytical insights powered and Open Telemetry-native observability solutions."
        }
      />

      <ScrollableSection
        data={[
          {
            title: "Gain Value From Your Data, All in One Platform ",
            img:"/src/assets/images/2.png",
            content:
              "An Open/Secure/Zero-Copy for all data. Seamlessly use unstructured, semi-structured and structured data together, irrespective of where it’s stored i.e. on-prem, cloud: private or public, optimized or managed.             ",
          },
          {
            title: "  Protect Your Data with built-in Unified Governance",
            img:"/src/assets/images/5.png",

            content:
              "Secure your data lake, analytics and AI models with detailed, out-of-the-box metadata, granular and consistent access controls, and telemetry to monitor ongoing usage            ",
          },
          {
            title: "Real-Time Analytics",
            img:"/src/assets/images/3.png",

            content:
              "Real-time analytics, AI applications made simple by training and deploying custom-build secure generative AI models through ETL, data pipelines and Orchestration for batch and streaming data",
          },
          {
            title: "Multi-Cloud Collaborations and Operations",
            img:"/src/assets/images/4.png",

            content:
              "Instantly discover, access, and share data, services and apps across multi-clouds and regions without ETL. Flexible policies, tags, and lineage for observability to follow the data for consistent governance across users, workloads, clouds, and regions. Unparallel resiliency to avoid disruptions, comply with changing regulations or cross-cloud migration between clouds. Interconnect your business’ ecosystems across regions and clouds with a cross-cloud technology layer that lets you operate at global scale.",
          },
        ]}
      />

      <div>
        <Title
          subheading={
            "Built-in governance solution with a unified set of compliance, security, privacy, interoperability and access capabilities in the Data Cloud."
          }
        />

        <Slider {...settings} className="flex flex-col">
          <TiltCard
            title={"Unified Customer Data"}
            subtitle={
              "Out of box identity resolution for multi-cloud and hybrid operations. Create a 360 degree of customer data by collecting customer events from various sources i.e. onsite, mobile apps’, & multiple clouds) through data management, analytics and modeling. Industry specific custom build data activation for audience and data match.                "
            }
          />
          <TiltCard
            title={"In-build Unity Crystal (cleanrooms)"}
            subtitle={
              "ÜCDP leverages the hybrid multi-cloud and cross-cloud data operations to generate unique cleanroom (unity-crystal) capability. It allows for measurement and analytics, optimized marketing, enhanced advertising experience and improves reporting for batch and streaming data.   "
            }
          />
          <TiltCard
            title={"Universal Integrations"}
            subtitle={
              "Easy ingest, transform and orchestrate data from anywhere. Turnkey capabilities allow analysts and analytic engineers to easily ingest data from anything like cloud storage to enterprise applications across multiple cross cloud platforms and echo-systems. It’s just one click away.               "
            }
          />

          <TiltCard
            title={"Dynamic Operational Connectivity"}
            subtitle={
              "ÜCDP integrates the semantic, kinetic, and dynamic elements of your business — empowering your teams to harmonize and automate data, analytics and decision-making in complex settings.              "
            }
          />

          <TiltCard
            title={"Compliance"}
            subtitle={
              "and audit your data with compliance, business continuity, data quality monitoring and lineage. Secure data on a platform with comprehensive compliance certifications. Replicate and failover databases, shares, role-based access control, Protect governance policies, compute resources, network policies, and more across cloudsMonitor data quality with both out-of-the-box and custom metricsAudit data usage access history & schema Change trackingUnderstand data flow, object dependencies, and lineage."
            }
          />

          <TiltCard
            title={" Meaningful Visualization           "}
            subtitle={
              "üDOS integrates all relevant tech, data, logic, and models into a digital representation of your organization, and allows organizations to visualize the findings that make up their technology universe and predict future state models.              "
            }
          />
        </Slider>
      </div>
    </div>
  );
};
