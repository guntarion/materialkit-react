// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKAvatar from "components/MKAvatar";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
// import profilePicture from "assets/images/bruce-mars.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">JAPO TITIAN BAKAT</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                TesJapo: If you cant decide, the answer is how to safely
                <br />
                then the answer is no. If two equally difficult
                <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                ></MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
