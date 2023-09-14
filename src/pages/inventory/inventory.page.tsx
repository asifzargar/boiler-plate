import { PageWrapper } from "../../styles/page-wrapper";
import { PageTitle } from "../../styles/page-title";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import EnhancedTable from "../../components/inventoryList";
const InventoryPage = () => {
  return (
    <PageWrapper>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <PageTitle>Inventory List</PageTitle>
        <Button variant="contained">+ Add</Button>
      </Box>
      <EnhancedTable />
    </PageWrapper>
  );
};

export default InventoryPage;
