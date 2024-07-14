import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Admonition from "@theme/Admonition";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img
          src="img/desygna_icon.png"
          width="80"
          height="80"
          style={{ borderRadius: "80px" }}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/v4">
            Getting Started
          </Link>
        </div>
        <p>
          Desygna is a simple, powerful, and extensible styling library which is
          built on top of Emotion 👩‍🎤 and Styled System ✨ <br /> It provides
          typesafe css-in-js helpers that makes easier to create variant based
          components.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
