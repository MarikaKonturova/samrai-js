//withAuthRedirect<T>(Component: ComponentType<T>)
import React from "react";
import { Preloader } from "./../components/common/Preloader/Preloader";
export const SuspenseComponent = (Component) => {
  return (props) => (
    <React.Suspense fallback={<Preloader />}>
      <Component {...props} />
    </React.Suspense>
  );
};
