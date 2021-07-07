import styles from "../../styles/Navigation.module.css";
export const Navigation = ({
items =[ 
  {
  name: "Portfolio",
  desc: "Description Portfolio",
  link: "/portfolio"
  }
]
}) => {
  return (
    <div>
      <nav className={styles.navigation}>
        <ul className={styles.menuUl}>
          {items.map((item, index) => (
            <li
              key={index}
              alt={item}
              style={{ "--total": `${item.name.length}` }}
              className={styles.menuLi}
            >
              <a
                href={item.link === undefined ? "/" : item.link}
                className={styles.menuA}
              >
                <span className={styles.barHover}>{item.desc}</span>
                <div className={styles.contentSpan}>
                  {item.name.split("").map((elem, index) => (
                    <span
                      className={styles.text}
                      style={{
                        "--i": `${index}`,
                        "--random": `${Math.random() * 3 + 0.5}`,
                        margin: `${elem === " " ? "0px 5px" : ""}`,
                      }}
                      key={index}
                    >
                      {elem}
                    </span>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
