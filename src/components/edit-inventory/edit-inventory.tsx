import { PageWrapper } from "../../styles/page-wrapper";
import { PageTitle } from "../../styles/page-title";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  supplier: number | null;
  inventory_name: string;
  cost: number | null;
  description: string;
}

const EditInventory = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      supplier: 1,
      inventory_name: "",
      cost: null,
      description: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (obj: IFormInput) => {
    console.log(obj);
  };

  return (
    <PageWrapper>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <PageTitle>Edit Inventory</PageTitle>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2} marginTop={"20px"}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              required
              label="Inventory Number"
              {...register("inventory_name", {
                required: "Inventory Number is Required !",
              })}
            />
            {errors?.inventory_name && (
              <p style={{ fontSize: "11px", color: "red" }}>
                {errors?.inventory_name.message}
              </p>
            )}
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              required
              label="Cost"
              {...register("cost", {
                required: "Cost is Required !",
              })}
            />
            {errors?.cost && (
              <p style={{ fontSize: "11px", color: "red" }}>
                {errors?.cost.message}
              </p>
            )}
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel>Supplier</InputLabel>
              <Select
                value={watch("supplier")?.toString()}
                label="Supplier"
                inputProps={register("supplier", {
                  required: "Supplier is required !",
                })}
              >
                <MenuItem value={1}>Supplier 1</MenuItem>
                <MenuItem value={2}>Supplier 2</MenuItem>
                <MenuItem value={3}>Supplier 3</MenuItem>
              </Select>
            </FormControl>
            {errors?.supplier && (
              <p style={{ fontSize: "11px", color: "red" }}>
                {errors?.supplier.message}
              </p>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              {...register("description", {
                required: false,
              })}
              label="Description"
              multiline
              rows={4}
            />
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            gap="10px"
          >
            <Button
              variant="outlined"
              onClick={() => {
                navigate("/inventory");
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </PageWrapper>
  );
};

export default EditInventory;
