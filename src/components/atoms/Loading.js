import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CircularProgress size={100} />
    </Box>
  );
};

export const LoadingWrapper = ({ isLoading, children }) => {
  if (isLoading) return <Loading />;

  return children;
};
