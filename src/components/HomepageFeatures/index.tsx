import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Internal docs for new comers and developers</>,
  },
  {
    title: "",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>Detailed and quality contents based on real life experience</>
    ),
  },
  {
    title: "",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Ship greater products with ease</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--sm">
        <p style={{ fontSize: "1.2rem" }}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container ">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
