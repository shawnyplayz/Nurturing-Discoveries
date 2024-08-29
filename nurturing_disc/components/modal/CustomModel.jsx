import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  maxHeight: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
  borderRadius: "8px",
  position: "relative",
};

const closeButtonStyle = {
  position: "absolute",
  top: 8,
  right: 8,
};

export default function CustomModal({
  open, // Prop to control whether the modal is open or closed
  title,
  description,
  imageUrl,
  additionalDetails,
  onClose, // Callback function to close the modal
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <IconButton sx={closeButtonStyle} onClick={onClose} aria-label="close">
          <CloseIcon />
        </IconButton>
        <Typography id="modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        {imageUrl && (
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <img
              src={imageUrl}
              alt="Modal content"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        )}
        <Typography id="modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
        {additionalDetails && (
          <Typography sx={{ mt: 2 }}>{additionalDetails}</Typography>
        )}
        <Button
          onClick={onClose}
          sx={{ mt: 2 }}
          variant="contained"
          color="primary"
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}
