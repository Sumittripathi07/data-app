import { Box, Card, Typography, Input, Grid, Stack, Button } from "@mui/joy";
import DoneIcon from "@mui/icons-material/Done";
import UndoIcon from "@mui/icons-material/Undo";
const CreateStudent = () => {
  return (
    <Box
      sx={(theme) => ({
        minHeight: "100vh",
        padding: theme.spacing(4),
        bgcolor: theme.vars.palette.neutral[100],
      })}
    >
      <Card
        component={Stack}
        rowGap={2}
        sx={(theme) => ({ px: theme.spacing(4), pb: theme.spacing(4) })}
      >
        <Typography level="h4">Create new student</Typography>
        <Grid spacing={4} container>
          <Grid md={4} item>
            <Input placeholder="Enter Your Full Name" size="lg" />
          </Grid>
          <Grid md={4} item>
            <Input placeholder="Enter Your Full Address" size="lg" />
          </Grid>
          <Grid md={4} item>
            <Input placeholder="Enter Your Class" size="lg" />
          </Grid>
          <Grid md={4} item>
            <Input placeholder="Enter Your Roll Number" size="lg" />
          </Grid>
          <Grid md={4} item>
            <Input placeholder="Enter Your Section" size="lg" />
          </Grid>
          <Grid md={4} item>
            <Input placeholder="Enter Your Avatar URL" size="lg" />
          </Grid>
          <Grid md={4} item>
            <Button
              type="submit"
              startDecorator={<DoneIcon />}
              sx={{ mr: 2, mb: 2 }}
            >
              Create New Student
            </Button>
            <Button
              startDecorator={<UndoIcon />}
              variant="outlined"
              color="neutral"
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default CreateStudent;
