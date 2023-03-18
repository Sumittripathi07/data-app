import kids from "../assets/kids.svg";
import { Button, Sheet } from "@mui/joy";
import { Link } from "react-router-dom";
// import Wrapper from '../components/wrapper';
const Index = () => {
  return (
    <Sheet
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <Wrapper
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      ></Wrapper> */}
      <img src={kids} style={{ height: "40vmax" }} />
      <Button component={Link} to="students" color="success" size="lg">
        go to student's dashboard
      </Button>
    </Sheet>
  );
};

export default Index;
