// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/dashboard";

const Home = lazy(() => import("../../pages/Home"));
const SecondPage = lazy(() => import("../../pages/SecondPage"));
const Login = lazy(() => import("../../pages/Login"));
const Register = lazy(() => import("../../pages/Register"));
const ForgotPassword = lazy(() => import("../../pages/ForgotPassword"));
const Error = lazy(() => import("../../pages/Error"));
const Sample = lazy(() => import("../../pages/Sample"));
const DashboardPage = lazy(() => import("../../screens/DashboardPage"));
const CoursesPage = lazy(() => import("../../screens/CoursesPage"));
const AddCoursePage = lazy(() => import("../../screens/AddCoursePage"));
const UpdateCoursePage = lazy(() => import("../../screens/UpdateCoursePage"));
const CourseListPage = lazy(() => import("../../screens/CourseListPage"));
const NewsPage = lazy(() => import("../../screens/NewsPage"));
const NewsListPage = lazy(() => import("../../screens/NewsListPage"));
const AddNewsPage = lazy(() => import("../../screens/AddNewsPage"));
const UpdateNewsPage = lazy(() => import("../../screens/UpdateNewsPage"));

const CommentsHolderPage = lazy(() => import("../../screens/CommentsHolderPage"));
const AcceptCommentsPage = lazy(() => import("../../screens/AcceptCommentsPage"));
const AnswerCommentsPage = lazy(() => import("../../screens/AnswerCommentsPage"));
const CommentsListPage = lazy(() => import("../../screens/CommentsListPage"));

const UserHolderPage = lazy(() => import("../../screens/UserHolderPage"));
const UserListPage = lazy(() => import("../../screens/UserListPage"));
const AddUserPage = lazy(() => import("../../screens/AddUserPage"));
const UpdateUserPage = lazy(() => import("../../screens/UpdateUserPage"));

const TeacherHolderPage = lazy(() => import("../../screens/TeacherHolderPage"));
const TeacherListPage = lazy(() => import("../../screens/TeacherListPage"));
const EditTeacherProfilePage = lazy(() => import("../../screens/EditTeacherProfilePage"));
const UpdateTeacherPage = lazy(() => import("../../screens/UpdateTeacherPage"));

// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/coursesPage",
    element: <CoursesPage />,
  },
  {
    path: "/addcoursepage",
    element: <AddCoursePage />,
  },
  {
    path: "/updatecoursepage",
    element: <UpdateCoursePage />,
  },
  {
    path: "/courselistpage",
    element: <CourseListPage />,
  },
  {
    path: "/newspage",
    element: <NewsPage />,
  },
  {
    path: "/newslistpage",
    element: <NewsListPage />,
  },
  {
    path: "/addnewspage",
    element: <AddNewsPage />,
  },
  {
    path: "/updatenewspage",
    element: <UpdateNewsPage />,
  },
  {
    path: "/userholderpage",
    element: <UserHolderPage />,
  },
  {
    path: "/userlistpage",
    element: <UserListPage />,
  },
  {
    path: "/adduserpage",
    element: <AddUserPage />,
  },
  {
    path: "/updateuserpage",
    element: <UpdateUserPage />,
  },  
  {
    path: "/commentsholderpage",
    element: <CommentsHolderPage />,
  },
  {
    path: "/acceptcommentspage",
    element: <AcceptCommentsPage />,
  },
  {
    path: "/answercommentspage",
    element: <AnswerCommentsPage />,
  },
  {
    path: "/commentslistpage",
    element: <CommentsListPage />,
  },
  {
    path: "/teacherholderpage",
    element: <TeacherHolderPage />,
  }, {
    path: "/teacherlistpage",
    element: <TeacherListPage />,
  }, {
    path: "/editteacherprofilepage",
    element: <EditTeacherProfilePage />,
  }, {
    path: "/updateteacherpage",
    element: <UpdateTeacherPage />,
  },

  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "*",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
