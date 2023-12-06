import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <>
      <section className={styles.about_section}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col_md_6}>
              <h2>About Me</h2>
              <p>
                My name is Edward Dana, I am currently 17 and now certified in
                HTML5 Mobile App Development. I have been going to West-Mec for
                1 year now, and I am going to be a senior soon at Willow Canyon
                High School. I joined coding for my love of technology and video
                games and hope to have a career in game development in the
                future.
              </p>
              <div className={styles.about_buttons}>
                <a
                  href="https://eddie710.github.io/Year-1-Portfolio-Projects/"
                  className={styles.btn_primary}
                >
                  My Old Portfolio
                </a>
              </div>
            </div>
            <div className={styles.col_md_6}>
              <Image
                src="/OILogo.PNG"
                alt="Profile Image"
                className={styles.img_fluid}
                width={300}
                height={200}
              />
            </div>
          </div>
          <div className={styles.row_mt_5}>
            <div className={styles.col_md_4}>
              <div className={styles.image_section}>
                <Image
                  src="/campusLogo.png"
                  alt="Image 1"
                  className={styles.img_fluid}
                  width={300}
                  height={200}
                />
                <div className={styles.image_description}>
                  <h3>West-Mec</h3>
                  <p>The Central Campus I went to.</p>
                </div>
              </div>
            </div>
            <div className={styles.col_md_4}>
              <div className={styles.image_section}>
                <Image
                  src="/wc.png"
                  alt="Image 2"
                  className={styles.img_fluid}
                  width={300}
                  height={200}
                />
                <div className={styles.image_description}>
                  <h3>Willow Canyon</h3>
                  <p>This is where I went to high school.</p>
                </div>
              </div>
            </div>
            <div className={styles.col_md_4}>
              <div className={styles.image_section}>
                <Image
                  src="/image0.jpeg"
                  alt="Image 3"
                  className={styles.img_fluid}
                  width={300}
                  height={200}
                />
                <div className={styles.image_description}>
                  <h3>Me</h3>
                  <p>This is when we got accepted.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.portfolio_section}>
        <div className={styles.container}>
          <h2>Portfolio Teasers</h2>
          <div className={styles.row}>
            <div className={styles.col_md_4}>
              <div className={styles.portfolio_item}>
                <p>This is an Ecommerce Website I made for a Restaurant.</p>
              </div>
            </div>
            <div className={styles.col_md_4}>
              <div className={styles.portfolio_item}>
                <Image
                  src="/jQueryLogo.png"
                  alt="jQuery Website"
                  className={styles.img_fluid}
                  width={300}
                  height={200}
                  id={styles.product_Img}
                />
                <a
                  href="https://eddie710.github.io/jQuery-Website/"
                  target="_blank"
                >
                  <h3>jQuery Website</h3>
                </a>
                <p>
                  This is a website I made with jQuery for a vacation in Alaska.
                </p>
              </div>
            </div>
            <div className={styles.col_md_4}>
              <div className={styles.portfolio_item}>
                {/* Add your content here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;