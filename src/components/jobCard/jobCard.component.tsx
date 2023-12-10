import { JobCardProps } from "./jobCard.type";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//@ts-ignore
import jobIcon from "../../assets/jobIcon.png";
import { IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { JobService } from "@/services/job.service";
import { useSnackbar } from "notistack";

const JobCard = (props: JobCardProps) => {
  let { row, setEditJob, getJobs } = props;
  let jobService = new JobService();
  let { enqueueSnackbar } = useSnackbar();

  return (
    <Card
      sx={{
        minWidth: 275,
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        gap: "0px",
        position: "relative",
      }}
    >
      <Stack direction="row" position="absolute" top="10px" right="10px">
        <IconButton
          onClick={() => {
            setEditJob(row);
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={async () => {
            try {
              await jobService.delete_job(Number(row.id));
              enqueueSnackbar("Successfully Job deleted", {
                variant: "success",
              });
              getJobs();
            } catch (error) {
              enqueueSnackbar("Opps somtthing went wrong !!", {
                variant: "error",
              });
              console.log(error);
            }
          }}
        >
          <DeleteOutlineIcon color="error" fontSize="small" />
        </IconButton>
      </Stack>
      <div
        style={{ marginRight: "0px", marginTop: "15px", marginLeft: "15px" }}
      >
        <img src={jobIcon} height={"45px"} />
      </div>
      <div>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} gutterBottom>
            {row.title}
          </Typography>

          <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
            {row.companyName} - {row.industry}
          </Typography>
          {row.location || row.remoteType ? (
            <Typography sx={{ mb: "2rem" }} color="text.secondary">
              {row.location} ({row.remoteType})
            </Typography>
          ) : (
            ""
          )}
          {row.experienceMin || row.experienceMax ? (
            <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
              Experience ({row.experienceMin} - {row.experienceMax} years)
            </Typography>
          ) : (
            ""
          )}
          {row.salaryMin || row.salaryMax ? (
            <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
              INR (₹) {row.salaryMin} - {row.salaryMax} / Month
            </Typography>
          ) : (
            ""
          )}
          {row.totalEmployee ? (
            <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
              {row.totalEmployee} employees
            </Typography>
          ) : (
            ""
          )}
        </CardContent>
        <CardActions>
          {row.quickApply ? (
            <Button
              variant={"contained"}
              color="secondary"
              sx={{ marginBottom: "15px" }}
            >
              Apply Now
            </Button>
          ) : (
            ""
          )}
          {row.extrenalApply ? (
            <Button
              variant={"outlined"}
              color="secondary"
              sx={{ marginBottom: "15px" }}
            >
              External apply
            </Button>
          ) : (
            ""
          )}
        </CardActions>
      </div>
    </Card>
  );
};

export default JobCard;
