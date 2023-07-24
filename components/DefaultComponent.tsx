import {HTMLAttributes} from "react";

function DefaultComponent({
                            children,
                            className
                          }: {
  children: React.ReactNode,
  className?: HTMLAttributes<HTMLDivElement>['className']
}) {
  return <div className={`${className ? className : ''} default-component`}>{children}</div>
}

export default DefaultComponent;