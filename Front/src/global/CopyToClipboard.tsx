import { Button, Snackbar } from '@mui/material';
import { useState } from 'react';

interface ICopyToClipboardButtonProps {
  path: string;
}

const CopyToClipboardButton = ({ path }: ICopyToClipboardButtonProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(path);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{ width: '100%'}}
        variant="contained"
      >
            Copiar endereço
      </Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Endereço copiado!"
      />
    </>
  );
};

export default CopyToClipboardButton;
