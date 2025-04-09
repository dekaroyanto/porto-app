import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineMapsHomeWork } from "react-icons/md";

export const Timeline2 = () => {
  return (
    <VerticalTimeline>
      {/* PT COLUMBUS */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(10, 61, 89)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 89, 134)" }}
        date="Maret 2024 - Agustus 2024"
        iconStyle={{ background: "rgb(18, 107, 155)", color: "#fff" }}
        icon={<MdOutlineMapsHomeWork />}
      >
        <h3 className="vertical-timeline-element-title mb-2">
          WEB DEVELOPER- Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          PT COLUMBUS | Cirebon
        </h4>
        <ul className="list-disc">
          <li>Merancang aplikasi untuk perhitungan gaji secara otomatis</li>
          <li>
            Merancang aplikasi sistem pendukung keputusan untuk seleksi karyawan
            baru.
          </li>
          <li>Input dan rekap data gaji karyawan.</li>
        </ul>
      </VerticalTimelineElement>
      {/* END PT COLUMBUS */}
    </VerticalTimeline>
  );
};
