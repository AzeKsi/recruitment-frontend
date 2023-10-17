import * as React from "react";
import { mount } from "cypress/react";

export {};

declare global {
  type HeroIcon = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
}

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}