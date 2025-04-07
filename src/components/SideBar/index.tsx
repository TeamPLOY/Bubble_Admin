import * as S from "./style";
import { useState } from "react";
import {
  DashBoardBlack,
  LaundryBlack,
  NoticeBlack,
  DashBoardBlue,
  LaundryBlue,
  NoticeBlue,
} from "../../assets/icon/index";

const SIDE_MENU = [
  {
    name: "대시보드",
    icon: <DashBoardBlack />,
    active: <DashBoardBlue />,
  },
  {
    name: "공지사항",
    icon: <LaundryBlack />,
    active: <LaundryBlue />,
  },
  {
    name: "세탁실",
    icon: <NoticeBlack />,
    active: <NoticeBlue />,
  },
];

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  return (
    <>
      <S.SideBarLayout>
        <S.SideBarMenu>
          {SIDE_MENU.map(({ name, icon, active }, index) => (
            <S.MenuItem
              key={index}
              onClick={() => setSelected(name)}
              className={selected === name ? "active" : ""}
            >
              {selected === name ? active : icon}
              <span>{name}</span>
            </S.MenuItem>
          ))}
        </S.SideBarMenu>
      </S.SideBarLayout>
    </>
  );
};
