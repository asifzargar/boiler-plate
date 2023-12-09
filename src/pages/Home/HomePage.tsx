import JobCard from "@/components/jobCard";
import { JobService } from "@/services/job.service";
import { Box, Button, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import JobModal from "../../components/jobModal";
import LoadingSpinner from "@/components/loader";

interface jobListType {
  title: string;
  companyName: string;
  industry: string;
  location: string;
  remoteType: string;
  experienceMin: number;
  experienceMax: number;
  salaryMin: number;
  salaryMax: number;
  totalEmployee: number;
  quickApply: boolean;
  extrenalApply: boolean;
  id: number;
}

const HomePage = () => {
  const [jobList, setJobList] = React.useState<jobListType[]>([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [editJob, setEditJob] = useState<jobListType | null>(null);
  let jobService = new JobService();

  const getJobs = async () => {
    setLoading(true);
    try {
      let data = await jobService.get_job_list();
      setJobList(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getJobs();
  }, []);

  const handleClose = () => {
    setModal(false);
    setEditJob(null);
  };

  useEffect(() => {
    if (editJob !== null) {
      setModal(true);
    }
  }, [editJob]);

  return (
    <div style={{ width: "100%", boxSizing: "border-box" }}>
      {loading ? <LoadingSpinner /> : ""}
      <Stack direction="row" justifyContent="flex-end" margin="10px">
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            setModal(true);
            setEditJob(null);
          }}
        >
          + Add Job
        </Button>
      </Stack>
      <JobModal
        handleClose={handleClose}
        open={modal}
        editJob={editJob}
        getJobs={getJobs}
        setEditJob={setEditJob}
      />
      {jobList.length > 0 ? (
        <Grid container spacing={2}>
          {jobList.map((row, i) => {
            return (
              <Grid item xs={12} md={6}>
                <JobCard
                  row={row}
                  key={i}
                  setEditJob={setEditJob}
                  getJobs={getJobs}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="90vh"
          fontWeight="700"
        >
          No Jobs
        </Box>
      )}
    </div>
  );
};

export default HomePage;
