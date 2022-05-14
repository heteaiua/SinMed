import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/Home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    /*subNav: [
	{
		title: "Our Aim",
		path: "/about-us/aim",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Our Vision",
		path: "/about-us/vision",
		icon: <IoIcons.IoIosPaper />,
	},
	],*/
  },
  {
    title: "Specializations",
    path: "/Specializations",
    icon: <IoIcons.IoMdSchool />,
    //iconClosed: <RiIcons.RiArrowDownSFill />,
    //iconOpened: <RiIcons.RiArrowUpSFill />,

    /*subNav: [
	{
		title: "Service 1",
		path: "/services/services1",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Service 2",
		path: "/services/services2",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Service 3",
		path: "/services/services3",
		icon: <IoIcons.IoIosPaper />,
	},
	],*/
  },

  {
    title: "Doctors",
    path: "/Doctors",
    icon: <IoIcons.IoMdMedkit />,
  },

  {
    title: "Appointments",
    path: "/Appointments",
    icon: <IoIcons.IoMdCheckmarkCircle />,
  },

  {
    title: "Prices",
    path: "/Prices",
    icon: <IoIcons.IoLogoUsd />,
  },

{
	title: "About us",
	path: "/About_us",
	icon: <IoIcons.IoIosBulb />,
},

{
	title: "Contact",
	path: "/Contact",
	icon: <FaIcons.FaPhone />,
},

];
