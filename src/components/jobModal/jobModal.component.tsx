import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { Box, Grid, Stack } from "@mui/material";
import Label from "../label";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { JobService } from "@/services/job.service";
import { useSnackbar } from "notistack";
import LoadingSpinner from "../loader";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  editJob: any;
  getJobs: () => Promise<void>;
  setEditJob: any;
}

interface IFormInput {
  title: string;
  companyName: string;
  industry: string;
  location: string;
  remoteType: string;
  experienceMin: number | null;
  experienceMax: number | null;
  salaryMin: number | null;
  salaryMax: number | null;
  totalEmployee: number | null;
  quickApply: boolean;
  extrenalApply: boolean;
}

export default function JobModal(props: ModalProps) {
  let { open, handleClose, editJob, getJobs, setEditJob } = props;
  const [next, setNext] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  let jobService = new JobService();
  let { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      title: "",
      companyName: "",
      industry: "",
      location: "",
      remoteType: "",
      experienceMin: null,
      experienceMax: null,
      salaryMin: null,
      salaryMax: null,
      totalEmployee: null,
      quickApply: false,
      extrenalApply: false,
    },
  });

  const onSubmit = async (obj: any) => {
    if (next === false) {
      setNext(true);
    } else {
      setLoading(true);
      if (editJob) {
        try {
          await jobService.put_job(obj, String(editJob.id));
          enqueueSnackbar("Successfully Job Saved", {
            variant: "success",
          });
          handleClose();
          setLoading(false);
          getJobs();
          setNext(false);
          setEditJob(null);
        } catch (error) {
          console.log(error);
          enqueueSnackbar("Opps somtthing went wrong !!", { variant: "error" });
          setLoading(false);
        }
      } else {
        try {
          await jobService.post_job(obj);
          enqueueSnackbar("Successfully Job created", {
            variant: "success",
          });
          handleClose();
          setLoading(false);
          getJobs();
          setNext(false);
          setEditJob(null);
        } catch (error) {
          console.log(error);
          enqueueSnackbar("Opps somtthing went wrong !!", { variant: "error" });
          setLoading(false);
        }
      }
    }
  };

  React.useEffect(() => {
    if (editJob !== null) {
      setValue("title", editJob.title);
      setValue("companyName", editJob.companyName);
      setValue("industry", editJob.industry);
      setValue("location", editJob.location);
      setValue("remoteType", editJob.remoteType);
      setValue("experienceMin", editJob.experienceMin);
      setValue("experienceMax", editJob.experienceMax);
      setValue("salaryMin", editJob.salaryMin);
      setValue("salaryMax", editJob.salaryMax);
      setValue("totalEmployee", editJob.totalEmployee);
      setValue("quickApply", editJob.quickApply);
      setValue("extrenalApply", editJob.extrenalApply);
    }
  }, [editJob]);

  const restForm = () => {
    setValue("title", "");
    setValue("companyName", "");
    setValue("industry", "");
    setValue("location", "");
    setValue("remoteType", "");
    setValue("experienceMin", null);
    setValue("experienceMax", null);
    setValue("salaryMin", null);
    setValue("salaryMax", null);
    setValue("totalEmployee", null);
    setValue("quickApply", false);
    setValue("extrenalApply", false);
  };

  return (
    <React.Fragment>
      {loading ? <LoadingSpinner /> : ""}
      <Dialog open={open} maxWidth="sm" fullWidth>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <DialogTitle>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box sx={{ fontSize: "20px", fontWeight: 700 }}>Create a Job</Box>
              <Box sx={{ fontSize: "16px", fontWeight: 500 }}>
                Step {next ? "2" : "1"}
              </Box>
            </Stack>
          </DialogTitle>
          {!next ? (
            <DialogContent>
              <Grid container spacing={3} marginTop="0.1rem">
                <Grid item xs={12}>
                  <Label label={"Job Title"} required={true} />
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="ex. UX UI Designer"
                    {...register("title", {
                      required: "Title is Required !",
                    })}
                  />
                  {errors?.title && (
                    <p style={{ fontSize: "11px", color: "red" }}>
                      {errors?.title.message}
                    </p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Label label={"Company name"} required={true} />
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="ex. Google"
                    {...register("companyName", {
                      required: "Company Name is Required !",
                    })}
                  />
                  {errors?.companyName && (
                    <p style={{ fontSize: "11px", color: "red" }}>
                      {errors?.companyName.message}
                    </p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Label label={"Industry"} required={true} />
                  <TextField
                    fullWidth
                    size="small"
                    {...register("industry", {
                      required: "Industry is Required !",
                    })}
                    placeholder="ex. Information Technology "
                  />
                  {errors?.industry && (
                    <p style={{ fontSize: "11px", color: "red" }}>
                      {errors?.industry.message}
                    </p>
                  )}
                </Grid>
                <Grid item xs={6}>
                  <Label label={"Location"} required={false} />
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="ex. Chennai "
                    {...register("location", {
                      required: false,
                    })}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Label label={"Remote type"} required={false} />
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="ex. In-office "
                    {...register("remoteType", {
                      required: false,
                    })}
                  />
                </Grid>
              </Grid>
            </DialogContent>
          ) : (
            <DialogContent>
              <Grid container spacing={3} marginTop="0.1rem">
                <Grid item xs={6}>
                  <Label label={"Experience"} required={false} />
                  <TextField
                    fullWidth
                    type="number"
                    size="small"
                    placeholder="Minimum"
                    {...register("experienceMin", {
                      required: false,
                    })}
                  />
                </Grid>
                <Grid item xs={6} marginTop="1.25rem">
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    placeholder="Maximum"
                    {...register("experienceMax", {
                      required: false,
                    })}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Label label={"Salary"} required={false} />
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    {...register("salaryMin", {
                      required: false,
                    })}
                    placeholder="Minimum "
                  />
                </Grid>
                <Grid item xs={6} marginTop="1.25rem">
                  <TextField
                    fullWidth
                    size="small"
                    type="number"
                    placeholder="Maximum "
                    {...register("salaryMax", {
                      required: false,
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Label label={"Total employee"} required={false} />
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="ex. 100 "
                    type="number"
                    {...register("totalEmployee", {
                      required: false,
                    })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <Label label={"Apply type"} required={false} />
                    <RadioGroup row>
                      <FormControlLabel
                        checked={watch("quickApply")}
                        control={
                          <Radio
                            size="small"
                            onChange={(_e) => {
                              if (watch("quickApply") === false) {
                                setValue("quickApply", true);
                              } else {
                                setValue("quickApply", false);
                              }
                            }}
                          />
                        }
                        label="Quick Apply"
                      />
                      <FormControlLabel
                        checked={watch("extrenalApply")}
                        control={
                          <Radio
                            size="small"
                            onChange={(_e) => {
                              if (watch("extrenalApply") === false) {
                                setValue("extrenalApply", true);
                              } else {
                                setValue("extrenalApply", false);
                              }
                            }}
                          />
                        }
                        label="External Apply"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </DialogContent>
          )}

          <DialogActions sx={{ margin: "1rem 1rem 1rem 1rem" }}>
            <Button
              onClick={() => {
                setEditJob(null);
                setNext(false);
                restForm();
                handleClose();
              }}
              variant="outlined"
              color="secondary"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={loading}
            >
              {next ? "Save" : "Next"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
