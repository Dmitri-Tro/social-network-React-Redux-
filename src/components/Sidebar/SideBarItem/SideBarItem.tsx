import React, { FC, memo } from "react";
import { NavLink } from "react-router-dom";

type SideBarItemProps = {
    title: string;
    navTo: string;
    itemStyles: string;
    linkStyles?: string;
    linkStylesActive?: string;
};

export const SideBarItem: FC<SideBarItemProps> = memo(({
                                                           title,
                                                           navTo,
                                                           itemStyles,
                                                           linkStyles,
                                                           linkStylesActive
                                                       }) => {
    return (
        <li className={itemStyles}>
            <NavLink to={navTo}
                     className={({ isActive }) => [isActive ? linkStylesActive : linkStyles].join(" ")}
            >
                {title}
            </NavLink>
        </li>
    );
});
