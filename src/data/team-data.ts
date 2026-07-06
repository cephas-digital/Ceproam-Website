import Johnson from "../assets/images/team/Johnson.svg";
import Testimony from "../assets/images/team/Testimony.svg";
import Abidemi from "../assets/images/team/Abidemi.svg";
import Fola from "../assets/images/team/Fola.svg";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  position: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Johnson Ibironke",
    role: "Founder & CEO",
    position: "Visionary Strategist & President",
    image: Johnson,
  },
  {
    id: 2,
    name: "Testimony Asegumute",
    role: "Operations",
    position: "General Secretary",
    image: Testimony,
  },
  {
    id: 3,
    name: "Abidemi Okunleye",
    role: "Finance",
    position: "Treasurer & Risk Specialist",
    image: Abidemi,
  },
  {
    id: 4,
    name: "Fola Tanimola",
    role: "Legal & Governance",
    position: "Supervisory Chairman",
    image: Fola,
  },
];
