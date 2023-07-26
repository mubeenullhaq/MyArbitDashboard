import { lazy, Suspense, useEffect } from "react";

/// Components
import Index from "./jsx";
import AdminIndex from "./jsx/admin";
import { connect, useDispatch } from "react-redux";
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
// action
import { checkAutoLogin } from "./services/AuthService";
import { isAuthenticated } from "./store/selectors/AuthSelectors";
import { isAdmin } from "./store/selectors/AuthSelectors";
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SignUp = lazy(() => import("./jsx/pages/Registration"));
const ReferredSignUp = lazy(() => import("./jsx/pages/ReferredRegistration"));
const ForgotPassword = lazy(() => import("./jsx/pages/ForgotPassword"));
const Login = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./jsx/pages/Login")), 500);
  });
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function App(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const referralCode = queryParams.get("ref");

  useEffect(() => {
    
      checkAutoLogin(dispatch, navigate, referralCode);
  }, []);

  let routeblog = (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/page-register" element={<SignUp />} />
      <Route path="/referral" element={<ReferredSignUp />} />
      <Route path="/page-forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
  if (props.isAuthenticated) {
    if (props.isAdmin) {
      return (
        <>
          <Suspense
            fallback={
              <div id="preloader">
                <div className="sk-three-bounce">
                  <div className="sk-child sk-bounce1"></div>
                  <div className="sk-child sk-bounce2"></div>
                  <div className="sk-child sk-bounce3"></div>
                </div>
              </div>
            }
          >
            <AdminIndex />
          </Suspense>
        </>
      );
    } else {
      return (
        <>
          <Suspense
            fallback={
              <div id="preloader">
                <div className="sk-three-bounce">
                  <div className="sk-child sk-bounce1"></div>
                  <div className="sk-child sk-bounce2"></div>
                  <div className="sk-child sk-bounce3"></div>
                </div>
              </div>
            }
          >
            <Index />
          </Suspense>
        </>
      );
    }
  } else {
    return (
      <div className="vh-100">
        <Suspense
          fallback={
            <div id="preloader">
              <div className="sk-three-bounce">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
              </div>
            </div>
          }
        >
          {routeblog}
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAdmin: isAdmin(state),
    isAuthenticated: isAuthenticated(state),
  };
};

//export default connect((mapStateToProps)(App));
export default withRouter(connect(mapStateToProps)(App));
