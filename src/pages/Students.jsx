import {
  Typography,
  Card,
  IconButton,
  AspectRatio,
  Box,
  Grid,
  Button,
} from "@mui/joy";

import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import AddIcon from "@mui/icons-material/Add";

import { useLoaderData, Link } from "react-router-dom";

const Students = () => {
  const students = useLoaderData();
  console.log(students);
  return (
    <Box
      sx={(theme) => ({
        minHeight: "100vh",
        padding: theme.spacing(4),
        bgcolor: theme.vars.palette.neutral[100],
      })}
    >
      <Button sx={{ mb: 2 }} startDecorator={<AddIcon />}>
        Insert New Student
      </Button>

      <Grid spacing={2} container>
        {students.map((student) => (
          <Grid key={student.id} item xs={12} sm={6} md={3} xl={2}>
            <Card variant="outlined">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ flex: 1 }}>
                  <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                    {student.name}
                  </Typography>
                  <Typography
                    level="body2"
                    sx={{
                      display: "block",
                      whiteSpace: "nowrap",
                      width: "80%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {student.address}
                  </Typography>
                </Box>
                <IconButton color="success">
                  <EditTwoToneIcon />
                </IconButton>
              </Box>
              <AspectRatio minHeight="200px" maxHeight="300px" sx={{ my: 2 }}>
                <img src={student.avatar} />
              </AspectRatio>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <div>
                  <Typography fontSize="lg" fontWeight="lg">
                    Class: {student.standard}
                  </Typography>
                  <Typography level="body3">
                    Roll: {student.roll} | sec: {student.section}
                  </Typography>
                </div>

                <Button
                  type="submit"
                  startDecorator={<DeleteTwoToneIcon />}
                  variant="soft"
                  size="sm"
                  color="danger"
                  aria-label="Explore Bahamas Islands"
                  sx={{ fontWeight: 600, marginLeft: "auto" }}
                >
                  Delete
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Students;
