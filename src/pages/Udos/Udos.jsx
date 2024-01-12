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
export const Udos = () => {
  return (
    <div className="">
      <div className="h-screen">
        <Hero
          title={"üDOS is a Next-Gen Digital Immune System for AI-TRiSM"}
          subtitle={
            "üDOS is a data driven and biometric authentication and authorization system with AI at its core. It is real-time and continuous in nature with an absolutely negligible technological footprint."
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
            title: "Continuous Biometric Security",
            img:"/src/assets/images/2.png",
            content:
              "Utilizing well defined existing security mechanisms to bring together assets and pinpoint risks all over your network for effortless",
          },
          {
            title: "  Model Management & Data Protection",
            img:"/src/assets/images/5.png",

            content:
              "DOS aggregates data from your entire tech stack, generating a comprehensive asset inventory with more biometric intelligence than any single security tool can provide – predicting any misconfigurations or deficiencies in your technology operations.",
          },
          {
            title: "Real Time Intelligence",
            img:"/src/assets/images/4.png",

            content:
              "ntegrated with your existing infrastructure and data sources, üDOS provides a high-value intelligence with minimal effort. With scaling IT infrastructure in size and complexity, our platform provides up-to-date sources of truth as essential necessity.",
          },
          {
            title: "Mission Control",
            img:"/src/assets/images/3.png",
            content:
              "Unify Observability and bring order to the chaos for your data operations. Enhance digital performance with end-to-end data analytics, tagging and monitoring. Predictive analytics and proactive monitoring detect, investigate and respond to threats from one modern and unified work surface. ",
          },
        ]}
      />

      <div>
        <Title
          subheading={
            "ÜDOS is a Digital Immune Technology that provides data driven and AI modelling based end-to-end observability  across your entire technology domain. "
          }
        />

        <Slider {...settings} className="flex flex-col">
          <TiltCard
          classes={"text-xl"}
            title={"Application Performance Monitoring "}
            subtitle={
              "Gets insights into cloud-native, microservices and monolithic applications, with No Sample distributed tracking and code-level visibility. "
            }
          />
          <TiltCard
                    classes={"text-xl"}

            title={"Continuous Infrastructure Monitoring "}
            subtitle={
              " Improve hybrid cloud performance with instant visibility and real-time alerts. Discover the rich set of content within your organization, as well as data and apps. available on AIDNA platform."
            }
          />
          <TiltCard
                    classes={"text-xl"}

            title={"Biometric Services Intelligence"}
            subtitle={
              "Ensure services performance with full visibility, AIOps and incident intelligence. Use natural language powered by LLMs to easily interact with and query data using AIDNA platform"
            }
          />

          <TiltCard
                    classes={"text-xl"}

            title={"Real-Time Stream Data Protection"}
            subtitle={
              "Find and fix streaming data issues across web and mobile with full visibility into end-user experience.                "
            }
          />

          <TiltCard
                    classes={"text-xl"}

            title={"Synthetic Monitoring"}
            subtitle={
              "Proactively find and fix performance issues across users , business transactions and API’s                "
            }
          />

          <TiltCard
                    classes={"text-xl"}

            title={"Classify, Share and Discover "}
            subtitle={
              "Classify, share, discover and immediately act on data, apps and more across regions and clouds. Identify and track sensitive data with built-in Automatic Classification, Custom Classification and Object Tagging.                 "
            }
          />
        </Slider>
      </div>
    </div>
  );
};
