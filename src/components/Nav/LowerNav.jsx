import React from "react";
import ProfileBage from "../common/ProfileBage";
import face from "../../images/face.jpg";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Button from "../common/Button";
import ArrowLeft from "../../svg/ArrowLeft";
// import ArrowRight from "../../svg/ArrowRight";

const LowerNav = () => {
  return (
    <div className="bg-black h-30 w-full pt-5">
      <ScrollMenu className=''
        LeftArrow={<Button svg={<ArrowLeft />} />}
        RightArrow={<Button className="rotate-180" svg={<ArrowLeft />} />}
      >
        <div className="h-[100px] flex flex-nowrap">
          <ProfileBage src={face} name="italo-mhjhjhelo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-mhjhjhelo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-mhjhjhelo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-mhjhjhelo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
          <ProfileBage src={face} name="italo-melo" />
        </div>
      </ScrollMenu>
    </div>
  );
};

export default LowerNav;
