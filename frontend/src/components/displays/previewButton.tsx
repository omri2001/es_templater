import { Box, Button, Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
import { esTemplate } from "../template/es_template/templateType";
import { renderTemplate } from "./renderTemplate";

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
            {renderTemplate(es_template)}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
