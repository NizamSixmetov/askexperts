import styles from './styles.module.css';

async function fetchData() {
  const url = await fetch("http://localhost:3000/api/projectNumber");
  const result = await url.json();
  return result
}

async function ProjectNumber() {
  const data = await fetchData()
  return (
    <div className='container'>
      <div className={`${styles.flexDiv}`}>
        {
          data.map(({ id, cap, description }) => {
            return (
              <div className={`${styles.numberCard}`} key={id}>
                <p className={`${styles.capDiv}`}>{cap} +</p>
                <p className={`${styles.descriptionDiv}`}>{description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectNumber