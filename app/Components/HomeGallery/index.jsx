import Link from 'next/link';
import styles from './style.module.css';
import Image from 'next/image';

async function fetchData() {
  const url = await fetch("http://localhost:3000/api/HomeProccess");
  const result = await url.json();
  return result
}

async function HomeGallery() {
  const card = await fetchData();
  return (
    <div className={`${styles.positionDiv}`}>
      <div className={`${styles.absoluteDiv}`}>
        <div className={`${styles.topDiv}`}>
          <p>Proccess</p>
          <div className={`${styles.flexTop}`}>
            <div className={`${styles.topH2}`}>
              <h2>Our client, global
                analytical techno company,
                wanted to build market.
              </h2>
            </div>
            <div className={`${styles.topP}`}>
              <Link href={'/'}>More Gallery</Link>
            </div>
          </div>
        </div>
        <div className={`${styles.bottomDiv}`}>
          {
            card.map(({ id, image }) => {
              return (
                <div className={`${styles.dataCard}`} key={id}>
                  <Image
                    style={{ borderRadius: "1rem" }}
                    alt='Image'
                    src={image}
                    fill
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default HomeGallery