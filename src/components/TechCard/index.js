import { Button } from "@material-ui/core";
import "./styles.css";

const TechCard = () => {
  const handleClick = () => {};

  return (
    <div className="techCardBox">
      <h2>Tecnologia</h2>
      <h3>Status</h3>
      <Button variant="contained" onClick={() => handleClick()}>
        Apagar
      </Button>
    </div>
  );
};

export default TechCard;
