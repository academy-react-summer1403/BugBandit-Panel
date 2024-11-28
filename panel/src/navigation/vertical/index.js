import {  Home, Circle , Users , List , BookOpen , FileText , User } from "react-feather";

export default [
  {
    id: "dashboard",
    title: "داشبورد",
    icon: <Home size={20} />,
    navLink: "/dashboard",
  },
  {
    id: "coursesPage",
    title: "دوره ها",
    icon: <List size={20} />,
    children: [
      {
        id: "courselist",
        title: "لیست دوره ها",
        icon: <Circle size={12} />,
        navLink: "/courselistpage",
      },
      {
        id: "addcourse",
        title: "افزودن دوره",
        icon: <Circle size={12} />,
        navLink: "/addcoursepage",
      },
      {
        id: "updatecourse",
        title: "اپدیت دوره",
        icon: <Circle size={12} />,
        navLink: "/updatecoursepage",
      },
    ],
  },
  {
    id: "newsPage",
    title: "اخبار",
    icon: <BookOpen size={20} />,
    children: [
      {
        id: "newslist",
        title: "لیست خبر ها",
        icon: <Circle size={12} />,
        navLink: "/newslistpage",
      },
      {
        id: "addnews",
        title: "افزودن خبر",
        icon: <Circle size={12} />,
        navLink: "/addnewspage",
      },
      {
        id: "updatenews",
        title: "اپدیت خبر",
        icon: <Circle size={12} />,
        navLink: "/updatenewspage",
      },
    ],
  },
  {
    id: "commentsholderpage",
    title: "کامنت ها",
    icon: <FileText size={20} />,
    children: [
      {
        id: "commentslistpage",
        title: "لیست کامنت ها",
        icon: <Circle size={12} />,
        navLink: "/commentslistpage",
      },
      {
        id: "acceptcommentspage",
        title: "مدیریت کامنت ها",
        icon: <Circle size={12} />,
        navLink: "/acceptcommentspage",
      },
      {
        id: "answercommentspage",
        title: "پاسخ به کامنت ها",
        icon: <Circle size={12} />,
        navLink: "/answercommentspage",
      },
    ],
  },
  {
    id: "userholderpage",
    title: "مدریت دانشجویان",
    icon: <Users size={20} />,
    children: [
      {
        id: "userlistpage",
        title: "لیست دانشچویان",
        icon: <Circle size={12} />,
        navLink: "/userlistpage",
      },
      {
        id: "adduserpage",
        title: "افزودن دانشچویان",
        icon: <Circle size={12} />,
        navLink: "/adduserpage",
      },
      {
        id: "updateuserpage",
        title: "اپدیت دانشچویان",
        icon: <Circle size={12} />,
        navLink: "/updateuserpage",
      },
    ],
  },
  {
    id: "teacherholderpage",
    title: "مدریت اساتید",
    icon: <User size={20} />,
    children: [
      {
        id: "teacherlistpage",
        title: "لیست اساتید",
        icon: <Circle size={12} />,
        navLink: "/teacherlistpage",
      },
      {
        id: "editteacherprofilepage",
        title: "ویرایش پروفایل اساتید",
        icon: <Circle size={12} />,
        navLink: "/editteacherprofilepage",
      },
      {
        id: "updateteacherpage",
        title: "اپدیت اساتید",
        icon: <Circle size={12} />,
        navLink: "/updateteacherpage",
      },
    ],
  },
];
