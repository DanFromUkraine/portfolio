import { ErrorBoundary } from "react-error-boundary";
import { ReactNode } from "react";

const SectionWrapper = ({
  bg,
  children,
}: {
  bg: string;
  children: ReactNode;
}) => {
  return ( 
  <ErrorBoundary fallback={<></>}>
 <section
      className={`
        ${bg && bg}
        *:min-w-sm
        *:max-w-7xl
        w-full
        center
    `}
    >
        {children}
    </section>
  </ErrorBoundary>
   
  );
};

export default SectionWrapper;
