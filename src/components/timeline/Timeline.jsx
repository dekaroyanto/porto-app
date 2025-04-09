import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";

function Timeline() {
  return (
    <VerticalTimeline>
      {/* CV FIRMOS */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "rgb(10, 61, 89)",
          color: "#fff",
          textAlign: "left",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 89, 134)" }}
        date="Oktober 2023 - Februari 2024"
        iconStyle={{ background: "rgb(18, 107, 155)", color: "#fff" }}
        icon={<MdOutlineMapsHomeWork />}
      >
        <h3 className="vertical-timeline-element-title mb-2">
          Web Development - Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          CV FIRMOS | Purbalingga, Central Java
        </h4>
        <ul className="list-disc jus">
          <li>
            Developed a database system for customer archiving and order
            delivery tracking.
          </li>
          <li>Designed user interfaces for internal web applications. </li>
          <li>
            Produced custom banner designs according to client specifications.
          </li>
        </ul>
      </VerticalTimelineElement>
      {/* END CV FIRMOS */}

      {/* PT TRI */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "rgb(10, 61, 89)",
          color: "#fff",
          textAlign: "left",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 89, 134)" }}
        date="Oktober 2023 - Februari 2024"
        iconStyle={{ background: "rgb(18, 107, 155)", color: "#fff" }}
        icon={<MdOutlineMapsHomeWork />}
      >
        <h3 className="vertical-timeline-element-title mb-2">
          IT APPLICATION - Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          PT TRANS RETAIL INDONESIA | Jakarta
        </h4>
        <ul className="list-disc">
          <li>Developed APIs to connect backend and frontend applications.</li>
          <li>
            Implemented designs for both internal and public applications.
          </li>
          <li>Integrated APIs to enable dynamic application functionality.</li>
          <li>
            Collaborated with the team to complete complex tasks efficiently.
          </li>
        </ul>
      </VerticalTimelineElement>
      {/* END PT TRI */}

      {/* PT COLUMBUS */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "rgb(10, 61, 89)",
          color: "#fff",
          textAlign: "left",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 89, 134)" }}
        date="Oktober 2023 - Februari 2024"
        iconStyle={{ background: "rgb(18, 107, 155)", color: "#fff" }}
        icon={<MdOutlineMapsHomeWork />}
      >
        <h3 className="vertical-timeline-element-title mb-2">
          WEB DEVELOPER - Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          PT COLUMBUS | Cirebon
        </h4>
        <ul className="list-disc">
          <li>Designed an application for automated salary calculation.</li>
          <li>
            Developed a decision support system for new employee selection.
          </li>
          <li>Handled employee salary data entry and reporting.</li>
        </ul>
      </VerticalTimelineElement>
      {/* END PT COLUMBUS */}

      {/* Nafast Media */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "rgb(10, 61, 89)",
          color: "#fff",
          textAlign: "left",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 89, 134)" }}
        date="November 2024 - Now"
        iconStyle={{ background: "rgb(18, 107, 155)", color: "#fff" }}
        icon={<MdOutlineMapsHomeWork />}
      >
        <h3 className="vertical-timeline-element-title mb-2">WEB DEVELOPER</h3>
        <h4 className="vertical-timeline-element-subtitle">
          NAFAST MEDIA | Cirebon
        </h4>
        <ul className="list-disc">
          <li>
            Developed applications for internal operations and brand management.
          </li>
          <li>Handled employee payroll data entry and reporting.</li>
          <li>Managed input and recap of affiliate performance data.</li>
        </ul>
      </VerticalTimelineElement>
      {/* END Nafast Media */}
    </VerticalTimeline>
  );
}

export default Timeline;
