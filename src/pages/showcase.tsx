import React from "react";
import Layout from "@theme/Layout";

import imaginar from "../../static/video/imaginar.mp4";
import ian from "../../static/video/ian.mp4";
import mesoMountain from "../../static/video/meso-mountain.mp4";

console.log(imaginar);

import styles from "./showcase.module.scss";

const SHOWCASE_ENTRIES = [
  {
    id: "meso-mountain",
    title: "Meso Mountain",
    media: {
      aspect: "1280 / 720",
      video: { src: mesoMountain },
    },
    description: (
      <>
        Meso Mountain is a charming and immersive 3D platformer built for WebXR
        created by{" "}
        <a className="primary-link" href="https://pixelfishcreative.xyz">
          Pixel Fish Creative
        </a>
        . In this game you play as an adorable parasaur on a mission to find
        their lost eggs. Run, jump, and explore the cozy Mesozoic island to
        embark on your quest to save your nest!
      </>
    ),
    cta: {
      text: "Try it out",
      url: "https://pixelfishcreative.xyz/#/meso-mountain",
      mobileRecommended: false,
    },
  },
  {
    id: "imaginar",
    title: "ImaginAR",
    media: {
      aspect: "480 / 968",
      video: { src: imaginar },
    },
    description: (
      <>
        <a className="primary-link" href="https://imaginar.dev/">
          imaginAR
        </a>{" "}
        is a location-based WebAR platform where people create and discover
        digital artifacts anchored to real-world places. By leaving 3D objects,
        images, drawings, text and sounds throughout the city, imaginAR turns
        physical space into a canvas for collective memory, storytelling and
        digital graffiti.
      </>
    ),
    cta: {
      text: "Try it out",
      url: "https://imaginar.dev/",
      mobileRecommended: true,
    },
  },
  {
    id: "ian",
    title: "Experiments by Ian Curtis",
    description: (
      <>
        These experiments explore bringing generated 3D worlds into WebAR, from{" "}
        <a
          className="primary-link"
          href="https://x.com/XRarchitect/status/2077641433855795594"
        >
          portals
        </a>{" "}
        into{" "}
        <a
          className="primary-link"
          href="https://x.com/XRarchitect/status/2084833796290220072"
        >
          new environments
        </a>{" "}
        and image-targeted{" "}
        <a
          className="primary-link"
          href="https://x.com/xrarchitect/status/1995541338335678801"
        >
          interior design
        </a>{" "}
        to using generated worlds as spatial references for{" "}
        <a
          className="primary-link"
          href="https://x.com/XRarchitect/status/2072207377106153797"
        >
          real-time AR camera movements
        </a>
        .
      </>
    ),
    media: {
      aspect: "600 / 400",
      video: { src: ian },
    },
    cta: { text: "Follow", url: "https://x.com/XRarchitect" },
  },
];

interface CtaProps {
  id: string;
  cta: { text: string; url: string; mobileRecommended?: boolean };
}

const Cta: React.FC<CtaProps> = ({ id, cta }) => {
  if (cta.mobileRecommended) {
    return (
      <>
        <button
          className="btn btn-primary"
          popoverTarget={id}
          onClick={(e) => {
            const supportsMobile =
              // @ts-expect-error
              navigator.userAgentData?.mobile ??
              !!navigator.userAgent?.match(/(Android|iPhone|iPad)/i);

            if (supportsMobile) {
              e.preventDefault();
              window.location.href = cta.url;
            }
          }}
        >
          {" "}
          {cta.text}
        </button>
        <div id={id} popover="auto" className={styles.qrCodePopover}>
          Mobile device recommended
          <img
            alt="QR code"
            src={
              "https://8th.io/qr?" +
              new URLSearchParams({ v: "2", url: cta.url })
            }
          />
          <a
            className="primary-link"
            href={cta.url}
            rel="noopener"
            target="_blank"
          >
            Open in new tab
          </a>
        </div>
      </>
    );
  } else {
    return (
      <a
        href={cta.url}
        className="btn btn-primary"
        rel="noopener"
        target="_blank"
      >
        {cta.text}
      </a>
    );
  }
};

interface MediaProps {
  media: {
    aspect: string;
    video?: { src: string };
    image?: { src: string };
  };
}

const Media: React.FC<MediaProps> = ({ media }) => {
  if (media.video) {
    return (
      <video
        controls
        playsInline
        muted
        className={styles.showcaseMediaElement}
        src={media.video.src}
        style={{ aspectRatio: media.aspect }}
      />
    );
  } else if (media.image) {
    return (
      <img
        className={styles.showcaseMediaElement}
        src={media.image.src}
        style={{ aspectRatio: media.aspect }}
      />
    );
  } else {
    return null;
  }
};

interface ShowcaseEntryProps {
  id: string;
  title: string;
  media: MediaProps["media"];
  children: React.ReactNode;
  flipped: boolean;
  cta?: CtaProps["cta"];
}

const ShowcaseEntry: React.FC<ShowcaseEntryProps> = ({
  id,
  title,
  media,
  children,
  flipped,
  cta,
}) => {
  let description = (
    <div id={id} className={styles.showcaseDescription}>
      <h2 className={styles.showcaseTitle}>{title}</h2>
      {children}
      {cta && (
        <div className={styles.cta}>
          <Cta cta={cta} id={id + "/popover"} />
        </div>
      )}
    </div>
  );

  let mediaElement = <Media media={media} />;

  return (
    <article
      className={[styles.showcaseSection, flipped && styles.flippedSection]
        .filter(Boolean)
        .join(" ")}
    >
      {description}
      {mediaElement}
    </article>
  );
};

export default function Showcase() {
  return (
    <Layout
      // @ts-expect-error
      title="Showcase"
      description="Browse projects made by 8th Wall developers."
    >
      <section className="hero compact-hero">
        <div className="container">
          <h1 className="hero-title">Showcase</h1>
          <p className="hero-description">
            Projects made by 8th Wall developers
          </p>
        </div>
      </section>

      <div className={styles.showcaseEntries}>
        {SHOWCASE_ENTRIES.map(({ description, ...rest }, i) => (
          <ShowcaseEntry flipped={i % 2 === 0} key={rest.id} {...rest}>
            {description}
          </ShowcaseEntry>
        ))}
      </div>
    </Layout>
  );
}
