import React, { useEffect } from "react";
import oldman from "../../utils/oldperson.jpeg";
import singer from "../../utils/arijitsingh.jpeg";
import videocall from "../../utils/callmeplz.jpeg";
import styles from "./Image.module.css";

const Image = () => {
  useEffect(() => {
    const timerSlide2 = setTimeout(() => {
      const buttonSlide2 = document.querySelector('[data-bs-slide-to="1"]');
      if (buttonSlide2) {
        buttonSlide2.click();
      }
    }, 1);
    const timerSlide1 = setTimeout(() => {
      const buttonSlide1 = document.querySelector('[data-bs-slide-to="0"]');
      if (buttonSlide1) {
        buttonSlide1.click();
      }
    }, 2);

    return () => {
      clearTimeout(timerSlide1);
      clearTimeout(timerSlide2);
    };
  }, []);
  return (
    <div>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div
          class={`carousel-inner ${styles.carosel}`}
          style={{ height: "80vh" }}
        >
          <div class="carousel-item active h-100" data-bs-interval="10000">
            <img
              src={singer}
              class={`d-block mx-auto h-100 w-auto ${styles.image}`}
              alt="singer"
            />
            <div class="carousel-caption d-block">
              <p className={`${styles.parra}`}>
                Introducing Sehalo, the innovative app designed to bridge the
                gap between artists and audiences, all under the overarching
                theme of "Art with Emotions". Our platform's Public mode serves
                as a vibrant hub where artists can showcase their creativity and
                connect with an eager audience who appreciates their work.
                Whether you're a painter, musician, poet, or any other form of
                artist, Sehalo provides the perfect stage for you to express
                yourself and share your art with the world. Through our unique
                interface, users can explore a diverse range of artistic
                expressions and immerse themselves in a world where emotions
                come to life through art with the priority of Happiness and
                Loyalty.
              </p>
            </div>
          </div>
          <div class="carousel-item h-100" data-bs-interval="2000">
            <img
              src={oldman}
              class={`d-block mx-auto h-100 w-auto ${styles.image}`}
              alt="old man"
            />
            <div class="carousel-caption d-block">
              <p className={`${styles.parra}`}>
                But Sehalo isn't just about the public display of art; it's also
                about nurturing personal well-being. With our private mode,
                we've curated a collection of resources and tools. In today's
                fast-paced world, it's easy to neglect our emotional well-being,
                which is why Sehalo is committed to providing a sanctuary where
                users can find solace, support, and inspiration. Sehalo's
                private mode is here to help, Let's check the meter of your
                Happiness in the Private mode of Sehalo app.
              </p>
            </div>
          </div>
          <div class="carousel-item h-100">
            <img
              src={videocall}
              class={`d-block mx-auto h-100 w-auto ${styles.image}`}
              alt="boy & girl"
            />
            <div class="carousel-caption d-block">
              <p className={`${styles.parra}`}>
                Ready to embark on a journey of artistic discovery and personal
                growth? Install Sehalo now and join our community of passionate
                artists and individuals dedicated to exploring the profound
                connection between art and emotions. With just a click, you'll
                gain access to a world of creativity, connection, and self-care.
                Embrace the power of art and unlock the path to a happier, more
                fulfilling life with Sehalo.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
