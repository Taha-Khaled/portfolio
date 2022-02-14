import "./portfolioList.scss";

export default function PortfolioList({ title, id, setSelected, selected }) {
  return (
    <li
      className={selected === id ? "portfolioList active" : "portfolioList"}
      onClick={() => {
        setSelected(id);
      }}
    >
      {title}
    </li>
  );
}
