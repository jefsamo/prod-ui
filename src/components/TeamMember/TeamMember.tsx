import { FC } from "react";
import { TeamMemberType } from "../../utils";
import Twitter_Yellow from "./svg/twitter_yellow.png";
import "./teamMember.scss";

const TeamMember: FC<{ member: TeamMemberType }> = ({ member }) => {
  return (
    <>
      <div className="member-card">
        <img src={member.image} alt="" />
        <div className="info">
          <div className="member-details">
            <h3 className="name">{member.name}</h3>
            <p className="role">{member.role}</p>
          </div>
          <div className="twitter">
            <a href={member.handle} target="_blank" rel="noreferrer">
              <img src={Twitter_Yellow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
