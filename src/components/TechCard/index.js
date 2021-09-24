import { Button } from "@material-ui/core";
import "./styles.css";

const TechCard = ({ title, status, onClick }) => {
  const handleClick = () => {};

  return (
    <div className="techCardBox">
      <h2>{title}</h2>
      <h3>{status}</h3>
      <Button variant="contained" onClick={onClick}>
        Apagar
      </Button>
    </div>
  );
};

export default TechCard;
