import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipiodio quirovident ipsum
            utboriosam possimus!
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fil className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
                <span className={styles.username}>Jon Doe</span>
                <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem impedit dolore corrupti consequuntur ratione vero quos cum voluptates aperiam! Tempore deleniti incidunt eveniet exercitationem et, molestias aliquid similique modi animi.</p>
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorventore cumqupernatur.</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint est ut dolorem corporis et omnis fugiat nisi aliquid autem officiis suscipit molestiae, laborum sunt distinctio. Tempora consequatur est qui possimus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, excepturi temporibus veritatis voluptatum, ipsa repellat quidem error, incidunt explicabo ea cum soluta distinctio? Ratione eos aspernatur non? At, molestiae exercitationem?</p>

            </div>
            <div className={styles.comment}>
              <Comments/>

            </div>
        </div>
          <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
