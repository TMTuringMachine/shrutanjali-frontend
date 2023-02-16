import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );



const Router = ()=>{
    return useRoutes([
        {
            path:'/about',
            element: <About/>
        },
    ])
}

const About = Loadable(
  lazy(() => import("../pages/About"))
);


export default Router;