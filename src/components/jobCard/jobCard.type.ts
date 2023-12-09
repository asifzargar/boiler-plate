interface JobCardProps {
  row: JobType;
  setEditJob: React.Dispatch<React.SetStateAction<JobType | null>>;
  getJobs: () => Promise<void>;
}

interface JobType {
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

export type { JobCardProps };
