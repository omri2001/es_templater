import { Box, Button, Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
import { esTemplate, renderObject } from "../es_template/templateType";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function PreviewButton({
  es_template,
}: {
  es_template: esTemplate;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Preview</Button>
      <Dialog open={open} maxWidth="md" fullWidth onClose={handleClose}>
        <DialogContent>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {renderObject(es_template)}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
